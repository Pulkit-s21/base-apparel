import './style.css'

const form = document.getElementById("form");
const email = document.getElementById("email");

form.addEventListener("submit", e=>{

  const emailVal = email.value;

  // check if email is valid or not
  if(!validateEmail(emailVal)){
    form.classList.add("error");
  }else{
    form.classList.remove("error");
  }
});

function validateEmail(email){
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};