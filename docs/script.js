document.addEventListener("DOMContentLoaded", () => {
  const aside = document.querySelector(".scrolling-aside");
  if (!aside) return;

  window.addEventListener("scroll", () => {
    // get exact no. of pixels the page has been scrolled down
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // 100px is the point where the header disappears off the top of the screen
    if (scrollTop > 100) {
      // push side panel down by exact amount scrolled, minus header height
      aside.style.transform = `translateY(${scrollTop - 100}px)`;
    } else {
      aside.style.transform = "translateY(0px)";
    }
  });
});
