const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const boxes = document.querySelector(".boxes");

const img1 = document.querySelector(".num_1"),
  img2 = document.querySelector(".num_2"),
  img3 = document.querySelector(".num_3"),
  img4 = document.querySelector(".num_4"),
  img5 = document.querySelector(".num_5");

img1.addEventListener("click", () => {
  boxes.style.transform = "translateX(40%)";
});
img2.addEventListener("click", () => {
  boxes.style.transform = "translateX(20%)";
});
img3.addEventListener("click", () => {
  boxes.style.transform = "translateX(0)";
});
img4.addEventListener("click", () => {
  boxes.style.transform = "translateX(-20%)";
});
img5.addEventListener("click", () => {
  boxes.style.transform = "translateX(-40%)";
});
