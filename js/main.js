"use strict";

(function () {
  "use strict";

  var windowSize = window.screen.height;
  var delay = 300;
  window.addEventListener("load", function () {
    setTimeout(function () {
      return window.scrollTo(0, 60);
    }, 1);
    var content1 = document.getElementsByClassName("slide-label-content1")[0];
    var descArea = document.getElementsByClassName("main__func-description-area__wrap");
    var slide_label = document.getElementsByClassName("slide-in-label");
    var slide_item = document.getElementsByClassName("slide-in-item");
    window.addEventListener("scroll", function () {
      if (isInView(content1)) {
        var items = document.getElementsByClassName("main__content-wrap__item--2");
        onElementInView(content1);
        setTimeout(function () {
          onElementInView(items[0]);
        }, delay);
        setTimeout(function () {
          items[0].getElementsByClassName("main__content-wrap__item--2__hu--l")[0].classList.add("hu");
        }, delay * 2);
        setTimeout(function () {
          onElementInView(items[1]);
        }, delay * 4);
        setTimeout(function () {
          items[1].getElementsByClassName("main__content-wrap__item--2__hu--r")[0].classList.add("hu");
        }, delay * 5);
        content1 = null;
      }
      Array.prototype.forEach.call(slide_label, function (l, i) {
        if (isInView(l)) {
          onElementInView(l);
          setTimeout(function () {
            onElementInView(slide_item[i]);
          }, delay);
          l = null;
        }
      });
      Array.prototype.forEach.call(descArea, function (l) {
        if (isInView(l)) {
          onElementInView(l.getElementsByClassName("main__func-description-area__wrap__text__point")[0]);
          setTimeout(function () {
            onElementInView(l.getElementsByClassName("main__func-description-area__wrap__text__h3")[0]);
          }, delay);
          setTimeout(function () {
            onElementInView(l.getElementsByClassName("main__func-description-area__wrap__text__description")[0]);
          }, delay * 2);
          setTimeout(function () {
            var el = l.getElementsByClassName("main__func-description-area__wrap__img")[0];
            onElementInView(el);
            l = null;
            setTimeout(function () {
              el.classList.add("animation");
            }, 500);
          }, delay * 3);
        }
      });
    });
  });
  function onElementInView(element) {
    window.requestAnimationFrame(function () {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    });
  }
  function isInView(element) {
    if (element === null) return false;
    return element.getBoundingClientRect().top < windowSize * 0.7;
  }
})();
