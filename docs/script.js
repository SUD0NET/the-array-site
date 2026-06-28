document.addEventListener("DOMContentLoaded", () => {
  const aside = document.querySelector(".scrolling-aside");
  if (!aside) return;

  window.addEventListener("scroll", () => {
    // check if device is mobile
    if (window.innerWidth <= 768) {
      aside.style.transform = "";
      return; 
    }
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 100) {
      aside.style.transform = `translateY(${scrollTop - 100}px)`;
    } else {
      aside.style.transform = "translateY(0px)";
    }
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth <= 768) {
      aside.style.transform = "";
    }
  });
});
