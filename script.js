var type = new Typed(".auto_text", {
  strings: ["Front-end Developer", "UX/UI Designer"],
  typeSpeed: 30,
  backSpeed: 30,
  loop: true,
});

const a = document.querySelectorAll(".projects a");
for (let i = 0; i < a.length; i++) {
  a[i].target = "_blank";
}
