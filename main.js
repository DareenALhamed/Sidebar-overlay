const sideBar = document.querySelector(".sideBar");
const openBtn = document.querySelector(".openBtn");
const closeBtn = document.querySelector(".closeBtn");
const overlay = document.querySelector(".overlay");

const openSideBar = () => {
  sideBar.classList.remove("dNone");
  document.querySelector(".container").classList.add("overlay");
};
const closeSideBar = () => {
  sideBar.classList.add("dNone");
  document.querySelector(".container").classList.remove("overlay");
};

openBtn.addEventListener("click", openSideBar);
closeBtn.addEventListener("click", closeSideBar);
