"use strict";
(() => {
  let dom;
  let area;
  window.addEventListener("load", () => {
    const windowSize = window.screen.height;
    area = document.getElementsByClassName("main__func-description-area__wrap")[0];
    dom = document.getElementsByClassName("animation1")[0];
    const slide_label = document.getElementsByClassName("slide-in-label");
    const slide_item = document.getElementsByClassName("slide-in-item");
    window.addEventListener("scroll", () => {
      console.log(slide_label);
      Array.prototype.forEach.call(slide_label, (l, i) => {
        if(l.getBoundingClientRect().top < windowSize/2) {
          slide_item[i].style.opacity = 1;
          slide_item[i].style.transform = "translateY(0)";
        }
      });
      if(area.getBoundingClientRect().bottom < windowSize) {
        dom.style.transform = "translateY(0)"
      }
    });
  });
})();
