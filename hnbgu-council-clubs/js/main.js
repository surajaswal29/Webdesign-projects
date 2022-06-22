"use strict";
// Author: Suraj Aswal
const downClick = document.querySelectorAll("#down-tab"); //getting all click button element
const hnbguClub = document.querySelectorAll("#hnbgu-clubs"); //getting all dropdown element
// console.log(downClick);

// performing event for every node
for (let i = 0; i <= downClick.length; i++) {
  downClick[i].addEventListener("click", function () {
    hnbguClub[i].classList.toggle("hnbgu-clubs-hide");
  });
}
