(function () {
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  var isCoarsePointer = window.matchMedia("(pointer: coarse)").matches
  var active = null

  function onMove(e) {
    if (reduceMotion || isCoarsePointer) return
    var el = e.target.closest("[data-tilt]")
    if (!el) {
      if (active) resetTilt(active)
      active = null
      return
    }
    active = el
    var rect = el.getBoundingClientRect()
    var px = (e.clientX - rect.left) / rect.width
    var py = (e.clientY - rect.top) / rect.height
    var max = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--tilt-max")) || 10
    var ry = (px - 0.5) * max * 2
    var rx = (0.5 - py) * max * 2
    el.style.setProperty("--rx", rx.toFixed(2) + "deg")
    el.style.setProperty("--ry", ry.toFixed(2) + "deg")
    el.style.setProperty("--mx", (px * 100).toFixed(2) + "%")
    el.style.setProperty("--my", (py * 100).toFixed(2) + "%")
  }

  function resetTilt(el) {
    el.style.setProperty("--rx", "0deg")
    el.style.setProperty("--ry", "0deg")
  }

  function onLeave(e) {
    var el = e.target.closest && e.target.closest("[data-tilt]")
    if (el) resetTilt(el)
    if (active === el) active = null
  }

  function initTilt() {
    reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    isCoarsePointer = window.matchMedia("(pointer: coarse)").matches
  }

  document.addEventListener("pointermove", onMove, { passive: true })
  document.addEventListener("pointerout", onLeave, { passive: true })
  document.addEventListener("astro:after-swap", initTilt)
  initTilt()
})()
