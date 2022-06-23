"use strict";
// Author: Suraj Aswal
const downClick = document.querySelectorAll("#down-tab"); //getting all click button element
const hnbguClub = document.querySelectorAll("#hnbgu-clubs"); //getting all dropdown element
const hamMenuBtn = document.querySelector("#ham-default");
const hamMenuDropdown = document.querySelector("#hnbgu-nav-links");
// console.log(downClick);
console.log(hamMenuBtn);
// performing event for every node
for (let i = 0; i < downClick.length; i++) {
  const ele = downClick[i];
  ele.addEventListener("click", function () {
    hnbguClub[i].classList.toggle("hnbgu-clubs-hide");
  });
}
console.log("eroooor😂😂😂");
hamMenuBtn.addEventListener("click", function () {
  console.log("clicked Menu");
  hamMenuDropdown.classList.toggle("hide-navbar");
});
