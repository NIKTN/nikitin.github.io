(() => {
  "use strict";

  const root = document.documentElement;
  root.classList.add("js");

  const menuToggle = document.querySelector(".menu-toggle");
  const siteNav = document.querySelector(".site-nav");

  if (menuToggle && siteNav) {
    const setMenuState = open => {
      siteNav.classList.toggle("open", open);
      menuToggle.setAttribute("aria-expanded", String(open));
      menuToggle.setAttribute("aria-label", open ? "Закрыть меню" : "Открыть меню");
    };

    menuToggle.addEventListener("click", () => {
      setMenuState(menuToggle.getAttribute("aria-expanded") !== "true");
    });
    siteNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => setMenuState(false));
    });
    document.addEventListener("keydown", event => {
      if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
        setMenuState(false);
        menuToggle.focus();
      }
    });
    document.addEventListener("pointerdown", event => {
      if (!siteNav.contains(event.target) && !menuToggle.contains(event.target)) setMenuState(false);
    });
    siteNav.addEventListener("focusout", event => {
      if (!siteNav.contains(event.relatedTarget) && !menuToggle.contains(event.relatedTarget)) setMenuState(false);
    });
    const desktopNavigation = window.matchMedia?.("(min-width: 701px)");
    const resetMobileMenu = () => {
      if (desktopNavigation.matches) setMenuState(false);
    };
    if (desktopNavigation?.addEventListener) desktopNavigation.addEventListener("change", resetMobileMenu);
    else desktopNavigation?.addListener?.(resetMobileMenu);
  }

  const filterButtons = [...document.querySelectorAll(".filter-button")];
  const projectCards = [...document.querySelectorAll(".project-card[data-category]")];
  const workStatus = document.getElementById("work-status");

  if (filterButtons.length && projectCards.length && workStatus) {
    filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        const filter = button.dataset.filter;
        filterButtons.forEach(item => {
          const selected = item === button;
          item.classList.toggle("is-active", selected);
          item.setAttribute("aria-pressed", String(selected));
        });

        let visibleCount = 0;
        projectCards.forEach(card => {
          const isVisible = filter === "all" || card.dataset.category === filter;
          card.hidden = !isVisible;
          if (isVisible) visibleCount += 1;
        });
        workStatus.textContent = `Показано проектов: ${visibleCount}.`;
      });
    });
  }

  const motionPreference = window.matchMedia?.("(prefers-reduced-motion: reduce)");

  if (!motionPreference?.matches && "IntersectionObserver" in window) {
    const motionObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        observer.unobserve(entry.target);
      });
    }, { threshold: .12, rootMargin: "0px 0px -42px 0px" });

    document.querySelectorAll("[data-motion]").forEach(item => motionObserver.observe(item));
    root.classList.add("motion-ready");
  }

})();
