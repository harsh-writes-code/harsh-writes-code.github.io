(function () {
  var SELECTOR = ".animate, .reveal-up, .reveal-left, .reveal-right, .reveal-scale"
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  var observer = null

  function staggerIndex(el) {
    var parent = el.parentElement
    if (!parent) return 0
    return Array.prototype.indexOf.call(parent.children, el)
  }

  function reveal(el) {
    var delay = Math.min(staggerIndex(el), 8) * 90
    setTimeout(function () {
      el.classList.add("show")
    }, delay)
  }

  function observeAll() {
    if (observer) observer.disconnect()

    var elements = document.querySelectorAll(SELECTOR)

    if (reduceMotion) {
      elements.forEach(function (el) {
        el.classList.add("show")
      })
      return
    }

    observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            reveal(entry.target)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    )

    elements.forEach(function (el) {
      el.classList.remove("show")
      observer.observe(el)
    })
  }

  document.addEventListener("DOMContentLoaded", observeAll)
  document.addEventListener("astro:after-swap", observeAll)
})()
