/* TEN@ Digitals — shared header, footer and interactions */

// Service taxonomy (PRD section 6) — names preserved exactly.
const CATEGORIES = [
  {
    id: "brand-partnerships",
    name: "Brand Partnerships & Creative Services",
    services: [
      "Celebrity Partnerships & Talent Management",
      "Ad Scriptwriting & Concept Development",
      "Advertisement Shoots & Production",
      "Video Editing & Motion Graphics",
      "Digital Marketing Video Production",
      "Campaign Strategy & Management (Meta Ads & Google Ads)",
      "Lead Generation & Brand Awareness Campaigns",
      "Website Design & Development",
      "Search Engine Optimization (SEO)"
    ]
  },
  {
    id: "adshape",
    name: "AdShape – Digital Creative & Performance Solutions",
    services: [
      "Video Editing & Motion Graphics",
      "Digital Advertising Video Production",
      "Paid Campaign Management (Meta Ads & Google Ads)",
      "Lead Generation & Brand Awareness Campaigns"
    ]
  },
  {
    id: "marketing-agency",
    name: "Marketing Agency Services",
    services: [
      "Campaign Manager 360 (CM360)",
      "Programmatic Advertising",
      "Display & Video 360 (DV360)",
      "Amazon Ads",
      "The Trade Desk",
      "FreeWheel",
      "Adform",
      "Paid Social Media Advertising"
    ]
  },
  {
    id: "it-automation-ai",
    name: "IT Automation & AI Products",
    services: [
      "AI-Powered Interview Assessment Tool",
      "Personalized AI Aptitude Training Platform",
      "Personalized AI-Based Syllabus & Skills Training Platform"
    ]
  }
];

const CONTACT = {
  email: "reach@tenat.com",
  address: "No. 29, Mount Poonamallee Main Road, Nandambakkam, Chennai - 600089",
  website: "Tenatdigital.com"
};

// Social profile URLs are To be confirmed (PRD 5.4 / 5.5) — links point to "#" until supplied.
const SOCIALS = [
  { name: "Instagram", path: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>' },
  { name: "LinkedIn", path: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7"/>' },
  { name: "Facebook", path: '<path d="M15 3h-2a4 4 0 0 0-4 4v3H7v4h2v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h2z"/>' },
  { name: "YouTube", path: '<rect x="2" y="5" width="20" height="14" rx="4"/><path d="m10 9 5 3-5 3z" fill="currentColor"/>' },
  { name: "X", path: '<path d="M4 4l16 16M20 4 4 20"/>' }
];

// Relative path back to the site root ("" or "../"), set per page so links also work when opened from files.
const root = () => document.body.dataset.root || "";

const icon = (inner, size = 20) =>
  `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`;

const chevron = icon('<path d="m6 9 6 6 6-6"/>', 16);

function socialLinks() {
  return SOCIALS.map(s =>
    `<a href="#" aria-label="${s.name} (profile URL to be confirmed)" title="${s.name} — URL to be confirmed">${icon(s.path, 18)}</a>`
  ).join("");
}

function renderHeader() {
  const page = document.body.dataset.page;
  const cur = p => (page === p ? ' aria-current="page"' : "");
  const ddItems = CATEGORIES.map((c, i) =>
    `<li><a href="${root()}work/index.html#${c.id}"><span class="dd-num">0${i + 1}</span><span>${c.name}</span></a></li>`
  ).join("");

  return `
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header">
    <div class="container nav-wrap">
      <a class="logo" href="${root()}index.html" aria-label="TEN@ Digitals home">TEN<span class="at">@</span></a>
      <button class="menu-toggle" aria-expanded="false" aria-controls="main-nav" aria-label="Open menu"><span></span></button>
      <nav class="main-nav" id="main-nav" aria-label="Primary">
        <ul>
          <li><a href="${root()}index.html"${cur("home")}>HOME</a></li>
          <li><a href="${root()}about/index.html"${cur("about")}>ABOUT</a></li>
          <li class="has-dropdown${page === "work" ? " current" : ""}">
            <div class="nav-row">
              <a href="${root()}work/index.html"${cur("work")}>WORK</a>
              <button class="dropdown-toggle" aria-expanded="false" aria-controls="work-dd" aria-label="Show service categories">${chevron}</button>
            </div>
            <div class="dropdown" id="work-dd">
              <ul>${ddItems}</ul>
            </div>
          </li>
          <li><a href="${root()}contact/index.html"${cur("contact")}>CONTACT</a></li>
          <li class="nav-cta"><a href="${root()}contact/index.html">Start a project <span class="arrow" aria-hidden="true">→</span></a></li>
        </ul>
      </nav>
    </div>
  </header>`;
}

function renderFooter() {
  const year = new Date().getFullYear();
  const cats = CATEGORIES.map(c => `<li><a href="${root()}work/index.html#${c.id}">${c.name}</a></li>`).join("");
  return `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <a class="logo logo-light" href="${root()}index.html" aria-label="TEN@ Digitals home">TEN<span class="at">@</span></a>
          <p>Ideas that move people. Campaigns that move businesses.</p>
          <div class="socials" aria-label="Social media">${socialLinks()}</div>
          <span class="tbc">Social URLs to be confirmed</span>
        </div>
        <div>
          <h3>Explore</h3>
          <ul>
            <li><a href="${root()}index.html">Home</a></li>
            <li><a href="${root()}about/index.html">About</a></li>
            <li><a href="${root()}work/index.html">Work</a></li>
            <li><a href="${root()}contact/index.html">Contact</a></li>
            <li><a href="${root()}privacy/index.html">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h3>Work</h3>
          <ul>${cats}</ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            <li><a href="mailto:${CONTACT.email}">${CONTACT.email}</a></li>
            <li><address>${CONTACT.address}</address></li>
            <li><a href="https://${CONTACT.website.toLowerCase()}" rel="noopener">${CONTACT.website}</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${year} TEN@ Digitals. All rights reserved.</span>
        <a href="${root()}privacy/index.html">Privacy Policy</a>
      </div>
    </div>
  </footer>
  ${document.body.dataset.page === "contact" ? "" : `
  <a class="float-cta" href="${root()}contact/index.html" aria-label="Start a project"><span class="pulse" aria-hidden="true"></span><span class="label">Start a project</span></a>`}`;
}

function initNav() {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("main-nav");
  const dd = document.querySelector(".has-dropdown");
  const ddBtn = dd.querySelector(".dropdown-toggle");

  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", open);
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    nav.classList.toggle("open", open);
  });

  const setDd = open => {
    dd.classList.toggle("open", open);
    ddBtn.setAttribute("aria-expanded", open);
  };
  ddBtn.addEventListener("click", e => {
    e.stopPropagation();
    setDd(!dd.classList.contains("open"));
  });
  document.addEventListener("click", e => { if (!dd.contains(e.target)) setDd(false); });
  document.addEventListener("keydown", e => {
    if (e.key !== "Escape") return;
    if (dd.classList.contains("open")) { setDd(false); ddBtn.focus(); }
    if (nav.classList.contains("open")) { toggle.click(); toggle.focus(); }
  });
  dd.addEventListener("focusout", e => { if (!dd.contains(e.relatedTarget)) setDd(false); });

  // Close mobile menu after following an in-page link
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    if (nav.classList.contains("open")) toggle.click();
    setDd(false);
  }));

  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) { els.forEach(el => el.classList.add("in")); return; }
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
    });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
}

function renderWork() {
  const list = document.getElementById("categories");
  if (!list) return;
  list.innerHTML =CATEGORIES.map((c, i) => `
    <section class="category reveal" id="${c.id}" aria-labelledby="${c.id}-title">
      <div class="cat-head">
        <div class="cat-index">0${i + 1}</div>
        <h2 id="${c.id}-title">${c.name}</h2>
        ${c.id === "adshape" ? '<p><span class="tbc">Sub-brand / service line / division — to be confirmed</span></p>' : ""}
        <p class="tbc-inline"><span class="tbc">Category description to be confirmed</span></p>
        <a class="btn btn-outline" href="${root()}contact/index.html?category=${c.id}">Enquire about this category <span class="arrow" aria-hidden="true">→</span></a>
      </div>
      <div class="service-grid">
        ${c.services.map(s => `
          <article class="service">
            <h3>${s}</h3>
            <div class="service-foot">
              <span class="tbc">Details TBC</span>
              <a class="enquire" href="${root()}contact/index.html?service=${encodeURIComponent(c.id + "|" + s)}">Enquire →</a>
            </div>
          </article>`).join("")}
      </div>
    </section>`).join("");

  // Categories are rendered after load, so honour a deep link like /work/#adshape now.
  const target = location.hash && document.getElementById(location.hash.slice(1));
  if (target) window.addEventListener("load", () => requestAnimationFrame(() => target.scrollIntoView()));
}

function initContactForm() {
  const form = document.getElementById("enquiry-form");
  if (!form) return;

  // Build "Service required" options grouped by category
  const select = form.elements.service;
  CATEGORIES.forEach(c => {
    const group = document.createElement("optgroup");
    group.label = c.name;
    const all = new Option(`${c.name} — general enquiry`, `${c.id}|*`);
    group.appendChild(all);
    c.services.forEach(s => group.appendChild(new Option(s, `${c.id}|${s}`)));
    select.appendChild(group);
  });

  // Prefill from Work page links
  const params = new URLSearchParams(location.search);
  if (params.get("service")) select.value = params.get("service");
  else if (params.get("category")) select.value = `${params.get("category")}|*`;

  const rules = {
    name: v => v.trim().length >= 2 || "Please enter your name.",
    company: v => v.trim().length >= 1 || "Please enter your company name.",
    email: v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) || "Please enter a valid email address.",
    phone: v => /^[+()\-\s\d]{7,20}$/.test(v.trim()) && v.replace(/\D/g, "").length >= 7 || "Please enter a valid phone number.",
    service: v => !!v || "Please choose the service you need.",
    details: v => v.trim().length >= 10 || "Please tell us a little about your project (at least 10 characters).",
    budget: v => v.trim().length >= 1 || "Please share an indicative budget."
  };

  const validateField = el => {
    const rule = rules[el.name];
    if (!rule) return true;
    const result = rule(el.value);
    const field = el.closest(".field");
    const err = field.querySelector(".error");
    const ok = result === true;
    field.classList.toggle("invalid", !ok);
    el.setAttribute("aria-invalid", !ok);
    err.textContent = ok ? "" : result;
    return ok;
  };

  Object.keys(rules).forEach(n => {
    const el = form.elements[n];
    el.addEventListener("blur", () => validateField(el));
    el.addEventListener("input", () => { if (el.closest(".field").classList.contains("invalid")) validateField(el); });
  });

  const status = document.getElementById("form-status");
  form.addEventListener("submit", e => {
    e.preventDefault();
    const fields = Object.keys(rules).map(n => form.elements[n]);
    const invalid = fields.filter(el => !validateField(el));
    status.className = "form-status";
    if (invalid.length) {
      status.classList.add("error");
      status.textContent = `Please fix ${invalid.length} field${invalid.length > 1 ? "s" : ""} highlighted below.`;
      invalid[0].focus();
      return;
    }
    if (form.elements.website_url.value) return; // honeypot

    // Submission backend is To be confirmed (PRD 7, FR-07). Until then, route to reach@tenat.com via the visitor's mail app.
    const d = Object.fromEntries(new FormData(form));
    const [catId, svc] = d.service.split("|");
    const cat = CATEGORIES.find(c => c.id === catId);
    const serviceLabel = svc === "*" ? `${cat.name} (general)` : `${svc} — ${cat.name}`;
    const body = [
      `Name: ${d.name}`, `Company: ${d.company}`, `Email: ${d.email}`, `Phone: ${d.phone}`,
      `Service required: ${serviceLabel}`, `Budget: ${d.budget}`, "", "Project details:", d.details
    ].join("\n");
    const href = `mailto:${CONTACT.email}?subject=${encodeURIComponent("Project enquiry — " + d.company)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;

    status.classList.add("success");
    status.innerHTML = `Thanks, ${d.name.split(" ")[0]}! Your mail app should open with the enquiry addressed to <a href="mailto:${CONTACT.email}">${CONTACT.email}</a>. If it didn't, please email us directly. <span class="tbc">Final confirmation copy TBC</span>`;
    status.setAttribute("tabindex", "-1");
    status.focus();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.body.insertAdjacentHTML("afterbegin", renderHeader());
  document.body.insertAdjacentHTML("beforeend", renderFooter());
  renderWork();
  initNav();
  initContactForm();
  initReveal();
});
