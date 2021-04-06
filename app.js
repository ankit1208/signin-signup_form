const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

// function validate()
// {
//   var username=document.getElementById("uname");
//   var password=document.getElementById("pass");
//   if (username.valur==""|| password.value==""){
//     alert("no blank allowed");
//   }
//   else{

//   }
// }