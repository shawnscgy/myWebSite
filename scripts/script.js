let wholePage = document.getElementById("main");
let originalPage = wholePage.innerHTML;
let sumHeaderElement = document.getElementById("sumHeader");
sumHeaderElement.classList.add("tooClose");

let sumText = document.getElementById("sumText");
let skiText = document.getElementById("skiText");
let expText = document.getElementById("expText");
let eduText = document.getElementById("eduText");

// Summary
let sumElement = document.getElementById("sum");
sumElement.addEventListener("click", turnToSum);
function turnToSum() {
  wholePage.innerHTML = sumText.innerHTML;
}

// Skills
let skiElement = document.getElementById("ski");
skiElement.addEventListener("click", turnToSki);
function turnToSki() {
  let footerElement = document.getElementById("footer");
  footerElement.style.marginTop = "20px";
  wholePage.innerHTML = skiText.innerHTML;
}

// Experience
let expElement = document.getElementById("exp");
expElement.addEventListener("click", turnToExp);
function turnToExp() {
  wholePage.innerHTML = expText.innerHTML;
}

// Education
let eduElement = document.getElementById("edu");
eduElement.addEventListener("click", turnToEdu);
function turnToEdu() {
  wholePage.innerHTML = eduText.innerHTML;
}

// Main
let maiElement = document.getElementById("mai");
maiElement.addEventListener("click", turnToMai);
function turnToMai() {
  wholePage.innerHTML = originalPage;
}
