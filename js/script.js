const prev = document.querySelector(".carousel-control-prev");
const next = document.querySelector(".carousel-control-next");

const scroll = document.querySelector(".carousel-item");

let step = 0;

prev.onclick = () => {
  step += 150;
  scroll.style.transform = `translate(-${step}px, 0)`;
};

next.onclick = () => {
  step = 150;
  scroll.style.transform = `translate(${step}px, 0)`;
};
