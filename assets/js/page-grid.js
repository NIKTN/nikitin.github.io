(() => {
  "use strict";

  const field = document.querySelector(".page-grid");
  const canvas = field?.querySelector("canvas");
  const context = canvas?.getContext("2d", { alpha: true });
  if (!context) return;

  const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const autonomous = window.matchMedia("(max-width: 700px), (hover: none) and (pointer: coarse)");
  const accent = getComputedStyle(document.documentElement).getPropertyValue("--accent").trim();
  const hex = accent.match(/^#([a-f\d]{6})$/i);
  const rgb = hex ? [0, 2, 4].map(offset => parseInt(hex[1].slice(offset, offset + 2), 16)) : [220, 247, 99];
  const color = alpha => "rgba(" + rgb.join(",") + "," + alpha + ")";
  const grid = 64;
  const radius = 220;
  let width = 0;
  let height = 0;
  let pixelRatio = 0;
  let frame = 0;
  let lastPaint = 0;
  let active = false;
  let targetX = 0;
  let targetY = 0;
  let focusX = NaN;
  let focusY = NaN;
  let opacity = 0;
  let lastNode = "";
  let lastEmission = -Infinity;
  let roaming = false;
  let route = null;
  const pulses = [];

  function randomPoint() {
    return { x: width * (.08 + Math.random() * .84), y: height * (.12 + Math.random() * .76) };
  }

  function moveAutomatically(timestamp) {
    if (!route) {
      const start = { x: focusX, y: focusY };
      let end = randomPoint();
      for (let attempt = 0; attempt < 8 && Math.hypot(end.x - start.x, end.y - start.y) < Math.min(width, height) * .35; attempt++) {
        end = randomPoint();
      }
      route = { start, end, started: timestamp, duration: 4200 + Math.random() * 2800 };
    }
    const progress = Math.min(1, (timestamp - route.started) / route.duration);
    const eased = progress * progress * (3 - 2 * progress);
    targetX = route.start.x + (route.end.x - route.start.x) * eased;
    targetY = route.start.y + (route.end.y - route.start.y) * eased;
    if (progress === 1) route = null;
  }

  function emit(x, y, timestamp) {
    const column = Math.round((x + scrollX) / grid);
    const row = Math.round((y + scrollY) / grid);
    const key = column + ":" + row;
    if (motion.matches || key === lastNode || timestamp - lastEmission < 110) return;
    lastNode = key;
    lastEmission = timestamp;
    const origin = { x: column * grid, y: row * grid };
    [[1, 0], [0, 1], [-1, 0], [0, -1]].forEach(([dx, dy], index) => {
      const turn = (column + row + index) % 2 ? 1 : -1;
      const first = { x: origin.x + dx * grid, y: origin.y + dy * grid };
      const second = { x: first.x - dy * grid * turn, y: first.y + dx * grid * turn };
      pulses.push({
        started: timestamp,
        points: [origin, first, second, { x: second.x + dx * grid, y: second.y + dy * grid }],
      });
    });
    if (pulses.length > 16) pulses.splice(0, pulses.length - 16);
  }

  function drawPulses(timestamp) {
    context.lineCap = "round";
    for (let i = pulses.length - 1; i >= 0; i--) {
      const pulse = pulses[i];
      const progress = Math.max(0, (timestamp - pulse.started) / 1100);
      if (progress >= 1) { pulses.splice(i, 1); continue; }
      const fade = (1 - progress) ** 1.2;
      const head = progress * grid * 3;
      for (let segment = 0; segment < 3; segment++) {
        const a = pulse.points[segment];
        const b = pulse.points[segment + 1];
        const dx = (b.x - a.x) / grid;
        const dy = (b.y - a.y) / grid;
        const travelled = Math.max(0, Math.min(grid, head - segment * grid));
        if (!travelled) continue;

        // Each route is an existing grid line, including its right-angle turns.
        context.shadowBlur = 0;
        context.lineWidth = 1;
        context.strokeStyle = color(.16 * fade);
        context.beginPath();
        context.moveTo(a.x - scrollX, a.y - scrollY);
        context.lineTo(a.x + dx * travelled - scrollX, a.y + dy * travelled - scrollY);
        context.stroke();

        const tail = Math.max(0, Math.min(grid, head - 48 - segment * grid));
        if (travelled > tail) {
          context.shadowBlur = 9;
          context.lineWidth = 1.6;
          context.strokeStyle = color(.85 * fade);
          context.beginPath();
          context.moveTo(a.x + dx * tail - scrollX, a.y + dy * tail - scrollY);
          context.lineTo(a.x + dx * travelled - scrollX, a.y + dy * travelled - scrollY);
          context.stroke();
        }
        const nodeLight = Math.max(0, 1 - Math.abs(head - (segment + 1) * grid) / 30);
        if (nodeLight > 0) {
          context.shadowBlur = 10;
          context.fillStyle = color(nodeLight * fade);
          context.fillRect(b.x - scrollX - 2, b.y - scrollY - 2, 4, 4);
        }
      }
      const segment = Math.min(2, Math.floor(head / grid));
      const a = pulse.points[segment];
      const b = pulse.points[segment + 1];
      const distance = head - segment * grid;
      const x = a.x + (b.x - a.x) / grid * distance - scrollX;
      const y = a.y + (b.y - a.y) / grid * distance - scrollY;
      context.shadowBlur = 10;
      context.fillStyle = "rgba(243,255,209," + fade + ")";
      context.fillRect(x - 1, y - 1, 2, 2);
    }
  }

  function draw(timestamp = performance.now()) {
    context.clearRect(0, 0, width, height);
    if (!opacity || !Number.isFinite(focusX)) return;
    const lightAt = (x, y) => Math.max(0, 1 - Math.hypot(x - focusX, y - focusY) / radius) ** 2;
    const firstX = ((-scrollX % grid) + grid) % grid;
    const firstY = ((-scrollY % grid) + grid) % grid;
    const startX = firstX + Math.floor((focusX - radius - firstX) / grid) * grid;
    const startY = firstY + Math.floor((focusY - radius - firstY) / grid) * grid;
    context.globalAlpha = opacity;
    context.shadowColor = color(.45);

    // Only grid segments and intersections receive light; the cells stay clear.
    for (let y = startY; y <= focusY + radius; y += grid) {
      for (let x = startX; x <= focusX + radius; x += grid) {
        const horizontal = lightAt(x + grid / 2, y);
        const vertical = lightAt(x, y + grid / 2);
        context.shadowBlur = 5;
        if (horizontal > .005) {
          context.fillStyle = color(horizontal * .62);
          context.fillRect(x, y, grid, 1);
        }
        if (vertical > .005) {
          context.fillStyle = color(vertical * .62);
          context.fillRect(x, y, 1, grid);
        }
        const light = lightAt(x, y);
        if (light > .02) {
          const size = 1 + light * 1.7;
          context.shadowBlur = 7;
          context.fillStyle = color(light * .9);
          context.fillRect(x - size / 2, y - size / 2, size, size);
        }
      }
    }
    drawPulses(timestamp);
    context.shadowBlur = 0;
    context.globalAlpha = 1;
  }

  function animate(timestamp) {
    frame = 0;
    if (document.hidden) return;
    // Keep the shared drawing style, with a lower frame rate for mobile autoplay.
    if (roaming && lastPaint && timestamp - lastPaint < 1000 / 30) {
      frame = requestAnimationFrame(animate);
      return;
    }
    const elapsed = lastPaint ? Math.min(timestamp - lastPaint, 80) : 16;
    lastPaint = timestamp;
    if (roaming) moveAutomatically(timestamp);
    const follow = 1 - Math.exp(-elapsed / 75);
    focusX += (targetX - focusX) * follow;
    focusY += (targetY - focusY) * follow;
    if (roaming) emit(focusX, focusY, timestamp);
    opacity += ((active ? 1 : 0) - opacity) * (1 - Math.exp(-elapsed / 150));
    const settled = Math.abs(targetX - focusX) < .1 && Math.abs(targetY - focusY) < .1 && Math.abs((active ? 1 : 0) - opacity) < .003;
    if (settled) {
      focusX = targetX;
      focusY = targetY;
      opacity = active ? 1 : 0;
    }
    draw(timestamp);
    if (roaming || !settled || pulses.length) frame = requestAnimationFrame(animate);
    else lastPaint = 0;
  }
  function refresh() {
    if (document.hidden) return;
    if (motion.matches || !Number.isFinite(focusX)) {
      focusX = targetX;
      focusY = targetY;
      if (motion.matches) opacity = active ? 1 : 0;
      draw();
    }
    if (!motion.matches && !frame) frame = requestAnimationFrame(animate);
  }
  function leave() {
    if (roaming) return;
    active = false;
    lastNode = "";
    pulses.length = 0;
    refresh();
  }
  function resize() {
    const rect = field.getBoundingClientRect();
    const ratio = Math.min(devicePixelRatio || 1, 1.5);
    if (width === rect.width && height === rect.height && pixelRatio === ratio) return;
    width = rect.width;
    height = rect.height;
    pixelRatio = ratio;
    canvas.width = Math.max(1, Math.round(width * ratio));
    canvas.height = Math.max(1, Math.round(height * ratio));
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    if (roaming) {
      focusX = Math.max(0, Math.min(width, focusX));
      focusY = Math.max(0, Math.min(height, focusY));
      route = null;
      refresh();
    }
    draw();
  }

  resize();
  document.addEventListener("pointermove", event => {
    if (roaming || event.pointerType === "touch") return;
    targetX = event.clientX;
    targetY = event.clientY;
    active = true;
    emit(targetX, targetY, performance.now());
    refresh();
  }, { passive: true });
  document.addEventListener("pointerout", event => { if (!event.relatedTarget) leave(); });
  document.addEventListener("pointercancel", leave);
  window.addEventListener("blur", leave);
  window.addEventListener("scroll", () => { if (opacity) refresh(); }, { passive: true });
  window.addEventListener("resize", resize, { passive: true });
  if ("ResizeObserver" in window) new ResizeObserver(resize).observe(field);
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) {
      if (roaming) { route = null; active = true; refresh(); }
      return;
    }
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
    lastPaint = 0;
    active = false;
    opacity = 0;
    lastNode = "";
    pulses.length = 0;
    draw();
  });
  const updateMode = () => {
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
    lastPaint = 0;
    pulses.length = 0;
    lastNode = "";
    lastEmission = -Infinity;
    const wasRoaming = roaming;
    roaming = autonomous.matches && !motion.matches;
    route = null;
    if (roaming) {
      active = true;
      if (!Number.isFinite(focusX)) {
        const point = randomPoint();
        targetX = point.x;
        targetY = point.y;
      } else {
        focusX = Math.max(width * .08, Math.min(width * .92, focusX));
        focusY = Math.max(height * .12, Math.min(height * .88, focusY));
        targetX = focusX;
        targetY = focusY;
      }
    } else if (wasRoaming || autonomous.matches) {
      active = false;
      opacity = 0;
    }
    refresh();
  };
  [motion, autonomous].forEach(preference => {
    if (preference.addEventListener) preference.addEventListener("change", updateMode);
    else preference.addListener(updateMode);
  });
  updateMode();
})();
