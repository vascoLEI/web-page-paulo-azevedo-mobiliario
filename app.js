(() => {
  const app = document.getElementById("app-view");
  const homeTemplate = document.createElement("template");
  homeTemplate.innerHTML = app.innerHTML;

  const routes = {
    inicio: { title: "Paulo Azevedo Mobiliário", style: "inicio" },
    produtos: { title: "Produtos | Paulo Azevedo Mobiliário", style: "produtos" },
    sobre: { title: "Sobre nós | Paulo Azevedo Mobiliário", style: "sobre" },
    contactos: { title: "Contactos | Paulo Azevedo Mobiliário", style: "contactos" },
    privacidade: { title: "Política de Privacidade | Paulo Azevedo Mobiliário", style: "produtos" },
    cookies: { title: "Política de Cookies | Paulo Azevedo Mobiliário", style: "produtos" }
  };

  const header = document.querySelector("header");
  const menuToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = lightbox.querySelector("img");
  const lightboxClose = lightbox.querySelector("button");
  const scrollPositions = new Map();
  const availableCategories = new Set(Array.from(document.getElementById("view-produtos").content.querySelectorAll("[data-filter]"), button => button.dataset.filter));
  const mapConsentKey = "pam_map_consent_v1";
  let activeRoute = null;
  let navigationAction = null;
  let disposeView = () => {};
  let revealObserver = null;
  let lightboxTrigger = null;
  let scrollFrame = null;
  let mapAllowed = false;

  if ("scrollRestoration" in history) history.scrollRestoration = "manual";

  function readRoute() {
    const [path = "", query = ""] = location.hash.replace(/^#\/?/, "").split("?");
    const name = path.replace(/\/$/, "") || "inicio";
    const params = new URLSearchParams(query);
    const requestedCategory = params.get("categoria") || "all";
    const category = availableCategories.has(requestedCategory) ? requestedCategory : "all";
    return {
      name: Object.hasOwn(routes, name) ? name : "inicio",
      category,
      key: location.hash || "#/inicio"
    };
  }

  function setMenu(open) {
    navLinks.classList.toggle("open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  }

  function updateHeader() {
    header.classList.toggle("header-small", window.scrollY > (activeRoute?.name === "inicio" ? 80 : 50));
  }

  function observeReveal() {
    const elements = app.querySelectorAll(".reveal:not(.visible)");
    if (!("IntersectionObserver" in window)) {
      elements.forEach(element => element.classList.add("visible"));
      return;
    }
    if (!revealObserver) {
      revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08 });
    }
    elements.forEach(element => revealObserver.observe(element));
  }

  function renderProducts() {
    const grid = app.querySelector("#produtos-grid");
    const fragment = document.createDocumentFragment();
    PRODUCTS.forEach((product, index) => {
      const card = document.createElement("article");
      card.className = "produto-card reveal";
      card.dataset.categoria = product.categoria;
      card.style.transitionDelay = `${(index % 12) * 40}ms`;

      const imageButton = document.createElement("button");
      imageButton.type = "button";
      imageButton.className = "produto-card-img-wrap";
      imageButton.dataset.lightbox = product.imagem;
      imageButton.setAttribute("aria-label", `Ampliar ${product.nome}`);

      const image = document.createElement("img");
      image.src = product.imagem;
      image.alt = product.nome;
      image.loading = "lazy";
      image.decoding = "async";
      imageButton.append(image);

      const body = document.createElement("div");
      body.className = "produto-card-body";
      const title = document.createElement("h3");
      title.textContent = product.nome;
      const description = document.createElement("p");
      description.textContent = product.descricao || "";
      body.append(title, description);
      card.append(imageButton, body);
      fragment.append(card);
    });
    grid.replaceChildren(fragment);
  }

  function applyFilter(category) {
    app.querySelectorAll(".filtro-btn").forEach(button => {
      const selected = button.dataset.filter === category;
      button.classList.toggle("active", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
    app.querySelectorAll(".produto-card").forEach(card => {
      card.hidden = category !== "all" && card.dataset.categoria !== category;
    });
    observeReveal();
  }

  function initializeCarousel() {
    const track = app.querySelector(".produtos-track");
    if (!track) return () => {};
    const slides = Array.from(track.children);
    let index = 0;
    let visible = 3;
    let step = 0;

    function updatePosition() {
      track.style.transform = `translateX(-${index * step}px)`;
    }

    function recalculate() {
      visible = window.innerWidth <= 768 ? 1 : 3;
      const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      step = (slides[0]?.getBoundingClientRect().width || 0) + gap;
      index = Math.min(index, Math.max(slides.length - visible, 0));
      updatePosition();
    }

    recalculate();
    window.addEventListener("resize", recalculate);
    const timer = window.setInterval(() => {
      if (document.hidden || slides.length <= visible || track.matches(":hover") || track.contains(document.activeElement)) return;
      index = index >= slides.length - visible ? 0 : index + 1;
      updatePosition();
    }, 3500);

    return () => {
      window.clearInterval(timer);
      window.removeEventListener("resize", recalculate);
    };
  }

  function loadMap() {
    const container = app.querySelector("#map-container");
    const consent = app.querySelector("#map-consent");
    if (!container || !consent) return;
    if (!container.childElementCount) {
      const iframe = document.createElement("iframe");
      iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.7866740195836!2d-8.762019025093878!3d41.378719296534555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd24468f8eae7b3b%3A0x39d71751914f5325!2sPaulo%20Azevedo%20Mobili%C3%A1rio!5e0!3m2!1spt-PT!2spt!4v1763426293566!5m2!1spt-PT!2spt";
      iframe.title = "Localização da loja Paulo Azevedo Mobiliário";
      iframe.width = "100%";
      iframe.height = "340";
      iframe.style.border = "0";
      iframe.loading = "lazy";
      iframe.referrerPolicy = "no-referrer-when-downgrade";
      iframe.allowFullscreen = true;
      container.append(iframe);
    }
    container.hidden = false;
    consent.hidden = true;
  }

  function initializeMap() {
    try {
      mapAllowed = mapAllowed || localStorage.getItem(mapConsentKey) === "1";
    } catch {}
    if (mapAllowed) loadMap();
  }

  function closeLightbox(restoreFocus = true) {
    lightbox.hidden = true;
    lightboxImage.removeAttribute("src");
    document.body.classList.remove("lightbox-open");
    if (restoreFocus && lightboxTrigger?.isConnected) lightboxTrigger.focus({ preventScroll: true });
    lightboxTrigger = null;
  }

  function openLightbox(button) {
    lightboxTrigger = button;
    lightboxImage.src = button.dataset.lightbox;
    lightboxImage.alt = button.querySelector("img")?.alt || "Imagem do produto";
    lightbox.hidden = false;
    document.body.classList.add("lightbox-open");
    lightboxClose.focus({ preventScroll: true });
  }

  function renderRoute() {
    const next = readRoute();
    const config = routes[next.name];
    const changedView = activeRoute?.name !== next.name;
    if (activeRoute) scrollPositions.set(activeRoute.key, window.scrollY);
    if (scrollFrame !== null) cancelAnimationFrame(scrollFrame);
    closeLightbox(false);
    setMenu(false);

    if (changedView) {
      disposeView();
      revealObserver?.disconnect();
      document.querySelectorAll("[data-view-style]").forEach(link => {
        link.media = link.dataset.viewStyle === config.style ? "all" : "not all";
      });
      document.body.dataset.view = next.name;
      const template = next.name === "inicio" ? homeTemplate : document.getElementById(`view-${next.name}`);
      app.replaceChildren(template.content.cloneNode(true));
      if (next.name === "produtos") renderProducts();
      if (next.name === "contactos") initializeMap();
      disposeView = next.name === "inicio" ? initializeCarousel() : () => {};
    }

    activeRoute = next;
    document.title = config.title;
    if (next.name === "produtos") applyFilter(next.category);
    observeReveal();
    document.querySelectorAll("[data-nav]").forEach(link => {
      const selected = link.dataset.nav === next.name;
      link.classList.toggle("active-page", selected);
      if (selected) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });

    const action = navigationAction;
    navigationAction = null;
    if (changedView || action !== "filter") {
      const top = action === "link" ? 0 : scrollPositions.get(next.key) || 0;
      scrollFrame = requestAnimationFrame(() => {
        window.scrollTo({ top, behavior: "instant" });
        updateHeader();
        app.focus({ preventScroll: true });
        scrollFrame = null;
      });
    } else {
      updateHeader();
    }
  }

  menuToggle.addEventListener("click", () => setMenu(menuToggle.getAttribute("aria-expanded") !== "true"));
  lightboxClose.addEventListener("click", () => closeLightbox());
  lightbox.addEventListener("click", event => {
    if (event.target === lightbox) closeLightbox();
  });

  document.addEventListener("click", event => {
    const target = event.target instanceof Element ? event.target : event.target.parentElement;
    const imageButton = target.closest("[data-lightbox]");
    if (imageButton) {
      openLightbox(imageButton);
      return;
    }
    const filter = target.closest(".filtro-btn");
    if (filter) {
      const category = filter.dataset.filter;
      const hash = category === "all" ? "#/produtos" : `#/produtos?categoria=${encodeURIComponent(category)}`;
      if (location.hash !== hash) {
        navigationAction = "filter";
        location.hash = hash;
      }
      return;
    }
    if (target.closest("[data-accept-map]")) {
      mapAllowed = true;
      try {
        localStorage.setItem(mapConsentKey, "1");
      } catch {}
      loadMap();
      return;
    }
    const link = target.closest('a[href^="#/"]');
    if (!link || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    navigationAction = "link";
    if (link.getAttribute("href") === location.hash) {
      event.preventDefault();
      renderRoute();
    }
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeLightbox();
      setMenu(false);
    }
    if (!lightbox.hidden && event.key === "Tab") {
      event.preventDefault();
      lightboxClose.focus();
    }
  });

  window.addEventListener("hashchange", renderRoute);
  window.addEventListener("scroll", updateHeader, { passive: true });
  renderRoute();
})();
