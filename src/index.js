import "./index.scss";
import Carousel from "bootstrap/js/dist/carousel";
import Offcanvas from "bootstrap/js/dist/offcanvas";
import Collapse from "bootstrap/js/dist/collapse";

// ------電腦版-------
function collapsePCHandler() {
  // get elements
  const collapse = document.getElementById("filter-collapse");
  const collapseBtn = document.getElementById("filter-collapse-btn");
  const collapseBtnText = document.getElementById("filter-btn-text");
  const filterIcon = document.getElementById("filter-icon");

  const bsCollapse = new Collapse(collapse, {
    toggle: false,
  });

  collapseBtn.addEventListener("click", function () {
    bsCollapse.toggle();
  });

  collapse.addEventListener("show.bs.collapse", function () {
    collapseBtnText.innerText = "收起";
    filterIcon.classList.add("transform-rotate-180");
  });
  collapse.addEventListener("hide.bs.collapse", function () {
    collapseBtnText.innerText = "顯示更多";
    filterIcon.classList.remove("transform-rotate-180");
  });
}

// --------手機版----------
function collapseMobileHandler() {
  const collapseMobile = document.getElementById("filter-mobile-collapse");
  const collapseBtnMobile = document.getElementById(
    "filter-mobile-collapse-btn"
  );
  const collapseBtnTextMobile = document.getElementById(
    "filter-mobile-btn-text"
  );
  const filterIconMobile = document.getElementById("filter-mobile-icon");

  // 初始化下拉選單

  const bsCollapseMobile = new Collapse(collapseMobile, {
    toggle: false,
  });

  collapseBtnMobile.addEventListener("click", function () {
    bsCollapseMobile.toggle();
  });

  collapseMobile.addEventListener("show.bs.collapse", function () {
    collapseBtnTextMobile.innerText = "收起";
    filterIconMobile.classList.add("transform-rotate-180");
  });
  collapseMobile.addEventListener("hide.bs.collapse", function () {
    collapseBtnTextMobile.innerText = "顯示更多";
    filterIconMobile.classList.remove("transform-rotate-180");
  });
}

// -----控制offcanvas------
function offcanvasHandler() {
  const myOffcanvas = document.getElementById("offcanvasScrolling");
  const mobileFilterBtn = document.getElementById("mobile-filter-btn");

  const bsOffcanvas = new Offcanvas(myOffcanvas, { backdrop: true });

  mobileFilterBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    bsOffcanvas.toggle();
  });
}

collapsePCHandler();
collapseMobileHandler();
offcanvasHandler();
