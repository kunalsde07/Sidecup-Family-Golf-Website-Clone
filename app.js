let cursor = document.getElementById("cursor");
let cursorBlur = document.getElementById("cursor_blur");

document.addEventListener("mousemove", (dets) => {
  cursor.style.left = `${dets.x}px`;
  cursor.style.top = `${dets.y}px`;
});
document.addEventListener("mousemove", (dets) => {
  cursorBlur.style.left = dets.x-180+"px";
  cursorBlur.style.top = dets.y-180+"px";
});

gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "100px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers :  true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -20%",
    end: "top -100%",
    // markers :  true,
    scrub: 2,
  },
});


// card hover effect