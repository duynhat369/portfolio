////Scroll to highlight navBar items
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".navigator-items ul li a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    console.log(sectionTop);
    if (pageYOffset + 48 * 3 >= sectionTop) {
      /* - 3rem = 48px, vì 1 section có my-5 và pb-5 nên 48*3.
      - Mục đích để khi scroll hết nội dụng của section trên (vẫn còn padding và margin của nó) thì active section dưới
      - cần fix tiếp vì  có nhiều section có nội dung rất ngắn */
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((a) => {
    a.classList.remove("active");
    if (a.classList.contains(current)) {
      //current là id section cũng là tên class của thẻ a
      a.classList.add("active");
    }
  });
});
