//javascript for working login script here!
const user = document.getElementById("Username");
let signed_in = false;
const Password = document.getElementById("Password");
console.log(user);

function Login() {
  if(user.value == "1A-30" || user.value == "1A-13") {
    if(Password.value == "3310" || Password.value == "1326") {
      signed_in = true;
      window.location.href = "home.html";
    }
  }
}

function timecheck() {
  const d = new Date();
  let minutes = String(d.getUTCMinutes()).padStart(2, '0');
  let hours = String(d.getUTCHours()).padStart(2, '0');
  document.getElementById("taskbartime").innerHTML = hours + ":" + minutes;
}

setInterval(timecheck, 1000); // delay in milliseconds
