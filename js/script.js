const navSmallMenuEl = document.querySelector(".nav-menu-small");
const navHeaderListSmall = document.querySelector(".nav-header-list-small");
const navSmallExitEl = document.querySelector(".icon-exit");
const navHeaderEl = document.querySelector(".nav-header");

navSmallMenuEl.addEventListener("click", (e) => {
  e.preventDefault();
  navHeaderListSmall.style.display = "flex";
  navHeaderEl.style.backdropFilter = "none";
});

navSmallExitEl.addEventListener("click", () => {
  navHeaderListSmall.style.display = "none";
  navHeaderEl.style.backdropFilter = "blur(15px)";
});

const navLiPhoneLinksList = document.querySelectorAll(".nav-header-link-small");

navLiPhoneLinksList.forEach((el) => {
  el.addEventListener("click", () => {
    navHeaderListSmall.style.display = "none";
  });
});

const rowsList = document.querySelectorAll(".row");
const iconSectionList = document.querySelectorAll(".icon-section");
const iconSectionWhiteList = document.querySelectorAll(".icon-section-white");
const h4List = document.querySelectorAll("h4");

const rowsOberver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("show-row", entry.isIntersecting);
    if (entry.isIntersecting) rowsOberver.unobserve(entry.target);
  });
});

const iconSectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("show-icon-section", entry.isIntersecting);
    if (entry.isIntersecting) iconSectionObserver.unobserve(entry.target);
  });
});

const iconSectionWhiteObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle(
      "show-icon-section-white",
      entry.isIntersecting
    );
    if (entry.isIntersecting) iconSectionWhiteObserver.unobserve(entry.target);
  });
});

const h4Observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("show-h4", entry.isIntersecting);
    if (entry.isIntersecting) h4Observer.unobserve(entry.target);
  });
});

rowsList.forEach((row) => rowsOberver.observe(row));
iconSectionList.forEach((heading) => iconSectionObserver.observe(heading));
iconSectionWhiteList.forEach((heading) =>
  iconSectionWhiteObserver.observe(heading)
);
h4List.forEach((heading) => h4Observer.observe(heading));

const navbarEl = document.querySelector(".nav-header");
window.addEventListener("scroll", () => {
  if (scrollY > 700) {
    navbarEl.classList.add("nav-fixed");
  }

  if (scrollY < 700) {
    navbarEl.classList.remove("nav-fixed");
  }
});
