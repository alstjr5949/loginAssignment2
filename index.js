const loginBtn = document.querySelector(".loginBtn");
const mainLogin = document.querySelector(".login");
const modalLogin = document.querySelector(".loginModal");
const modalCloseBtn = document.querySelector(".closeModal");

const mainLoginClick = () => {
  mainLogin.classList.add("hidden");
  modalLogin.classList.remove("hidden");
};

const modalCloseBtnClick = () => {
  mainLogin.classList.remove("hidden");
  modalLogin.classList.add("hidden");
};

loginBtn.addEventListener("click", mainLoginClick);
modalCloseBtn.addEventListener("click", modalCloseBtnClick);
