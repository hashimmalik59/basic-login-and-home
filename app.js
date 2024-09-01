let navBar = document.querySelector("span");

let email = prompt("Enter your Email");
let password = prompt("Enter your Password");

if (email === "hm3630450@gmail.com" && password === "pak...321") {
  navBar.innerHTML = "Home     About     Contact     Portfolio";
  alert("Congratulation!");
} else {
  alert("Your Email and Password are Incorrect");
}