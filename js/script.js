const navSmallMenuEl = document.querySelector(".nav-menu-small");
const navHeaderListSmall = document.querySelector(".nav-header-list-small");
const navSmallExitEl = document.querySelector(".icon-exit");

navSmallMenuEl.addEventListener("click", (e) => {
  e.preventDefault();
  navHeaderListSmall.style.display = "flex";
});

navSmallExitEl.addEventListener("click", () => {
  navHeaderListSmall.style.display = "none";
});
