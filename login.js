//javascript for working login script here!
const user = document.getElementById("Username");
let signed_in = false;
const Password = document.getElementById("Password");
console.log(user);
function Login() {
if(user.value=="1A-30" || user.value=="1A-13"){
  if(Password.value=="3310" || Password.value=="1326"){
window.location.href = "home.html";
    let signed_in = true;
  }
} else {

}
};
