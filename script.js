var type = new Typed(".auto_text", {
  strings: ["Front-end Developer", "UX/UI Designer"],
  typeSpeed: 30,
  backSpeed: 30,
  loop: true,
});

// refresh to top
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
