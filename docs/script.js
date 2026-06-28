document.addEventListener("DOMContentLoaded", () => {
  const aside = document.querySelector(".scrolling-aside");
  if (!aside) return;

  window.addEventListener("scroll", () => {
    // Get the exact number of pixels the page has been scrolled down
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // 140px is the point where the header disappears off the top of the screen
    if (scrollTop > 100) {
      // Push the side panel down by the exact amount scrolled, minus the header height
      aside.style.transform = `translateY(${scrollTop - 100}px)`;
    } else {
      // Snap it perfectly back to its default starting position at the top
      aside.style.transform = "translateY(0px)";
    }
  });
});
