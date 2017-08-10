"use strict";
(() => {
  let dom;
  let area;
  window.addEventListener("load", () => {
    const windowSize = window.screen.height;
    area = document.getElementsByClassName("main__func-description-area__wrap")[0];
    dom = document.getElementsByClassName("animation1")[0];
    window.addEventListener("scroll", () => {
      if(area.getBoundingClientRect().bottom < windowSize) {
        dom.style.transform = "translateY(0)"
      }
    });
  });
})();
