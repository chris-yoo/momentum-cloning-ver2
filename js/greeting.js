const loginForm = document.querySelector(".login-form");
const loginFormInput = document.querySelector(".login-form input");
const greetingMent = document.querySelector(".greeting-ment");
const USERNAME_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";

function onSubmit(event) {
    event.preventDefault();
    const inputValue = loginFormInput.value;
    localStorage.setItem(USERNAME_KEY,inputValue);
    loginForm.classList.add(HIDDEN_CLASSNAME)
    paintGreetings(inputValue);
}

function paintGreetings(username) {
    const date = new Date();
    const hours = date.getHours();

    if(hours>=18){
        greetingMent.innerText = `Good evening, ${username}.`;
    } else if(hours<18&&hours>=12){
        greetingMent.innerText = `Good afternoon, ${username}.`;
    } else {
        greetingMent.innerText = `Good morning, ${username}.`;
    }

    
    greetingMent.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onSubmit);
}else{
    paintGreetings(savedUsername);
}