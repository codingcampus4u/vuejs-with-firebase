var loginfrm = document.getElementById("login-form");
var signupfrm = document.getElementById("signup-form");
var forgotfrm = document.getElementById("resetpwd-form");
var frgtpwdbtn = document.getElementById("frgtpwd");
var homebtn = document.getElementById("backhome");

function frmto() {
  if (loginfrm.style.display === "none") {
    loginfrm.style.display = "block";
    signupfrm.style.display = "none";
  } else {
    loginfrm.style.display = "none";
    signupfrm.style.display = "block";
  }
}

frgtpwdbtn.addEventListener("click", showforgot);
homebtn.addEventListener("click", homepage);

function showforgot(){
  loginfrm.style.display = "none";
  signupfrm.style.display = "none";
  forgotfrm.style.display = "block";
}

function homepage(){
  loginfrm.style.display = "block";
  signupfrm.style.display = "none";
  forgotfrm.style.display = "none";
}