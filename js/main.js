"use strict";
(() => {
  window.addEventListener("load", () => {
    const windowSize = window.screen.height;
    const descArea = document.getElementsByClassName("main__func-description-area__wrap");
    const slide_label = document.getElementsByClassName("slide-in-label");
    const slide_item = document.getElementsByClassName("slide-in-item");
    window.addEventListener("scroll", () => {
      Array.prototype.forEach.call(slide_label, (l, i) => {
        if(l.getBoundingClientRect().top < windowSize*0.7) {
          onElementInView(slide_item[i]);
        }
      });
      Array.prototype.forEach.call(descArea, (l) => {
        if(l.getBoundingClientRect().top < windowSize*0.7) {
          const delay = 300;
          onElementInView(l.getElementsByClassName("main__func-description-area__wrap__text__point")[0]);
          setTimeout(() => {
            onElementInView(l.getElementsByClassName("main__func-description-area__wrap__text__h3")[0]);
          }, delay);
          setTimeout(() => {
            onElementInView(l.getElementsByClassName("main__func-description-area__wrap__text__description")[0]);
          }, delay * 2);
          setTimeout(() => {
            onElementInView(l.getElementsByClassName("main__func-description-area__wrap__img")[0])
          }, delay * 3);
        }
      });
    });
  });
  function onElementInView(element) {
    element.style.opacity = "1";
    element.style.transform = "translateY(0)";
  }
})();
