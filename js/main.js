"use strict";
(() => {
  const windowSize = window.screen.height;
  window.addEventListener("load", () => {
    const content1 = document.getElementsByClassName("slide-label-content1")[0];
    const descArea = document.getElementsByClassName("main__func-description-area__wrap");
    const slide_label = document.getElementsByClassName("slide-in-label");
    const slide_item = document.getElementsByClassName("slide-in-item");
    window.addEventListener("scroll", () => {
      if(isInView(content1)) {
        const items = document.getElementsByClassName("main__content-wrap__item--2");
        onElementInView(content1);
        setTimeout(() => { onElementInView(items[0]) }, 300);
        setTimeout(() => { onElementInView(items[1]) }, 600);
      }
      Array.prototype.forEach.call(slide_label, (l, i) => {
        if(isInView(l)) {
          onElementInView(l);
          setTimeout(() => {
            onElementInView(slide_item[i]);
          }, 300);
        }
      });
      Array.prototype.forEach.call(descArea, (l) => {
        if(isInView(l)) {
          const delay = 300;
          onElementInView(l.getElementsByClassName("main__func-description-area__wrap__text__point")[0]);
          setTimeout(() => { onElementInView(l.getElementsByClassName("main__func-description-area__wrap__text__h3")[0]); }, delay);
          setTimeout(() => { onElementInView(l.getElementsByClassName("main__func-description-area__wrap__text__description")[0]); }, delay * 2);
          setTimeout(() => {
            const el = l.getElementsByClassName("main__func-description-area__wrap__img")[0];
            onElementInView(el);
            setTimeout(() => { el.classList.add("animation"); }, 500);
          }, delay * 3);
        }
      });
    });
  });
  function onElementInView(element) {
    window.requestAnimationFrame(() => {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    });
  }
  function isInView(element) { return (element.getBoundingClientRect().top < windowSize*0.7)}
})();
