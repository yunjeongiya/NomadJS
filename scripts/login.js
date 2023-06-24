const welcome = document.querySelectorAll(".welcome");
const welcomeText = document.querySelector("#login h2");
const logoutBtn = document.querySelector("#logout");

const loginForm = document.querySelector("#login form");
const loginInput = document.querySelector("#login input");

function makeVisible(element) {
    element.classList.remove("hidden");
}

function makeHidden(element) {
    element.classList.add("hidden");
}

function onLogOut() {
    localStorage.removeItem("name");
    welcome.forEach(makeHidden);
    makeVisible(loginForm);
    loginInput.value = "";
}
logoutBtn.addEventListener("click", onLogOut)

function paintName(name) {
    welcome.forEach(makeVisible);
    welcomeText.innerHTML = `Welcome, ${name}!`;
}

function onSubmitLogin(event) {
    event.preventDefault();
    const typedName = loginInput.value;
    console.log("submitted", typedName);
    localStorage.setItem("name", typedName);
    makeHidden(loginForm);
    paintName(typedName);
}
loginForm.addEventListener("submit", onSubmitLogin);

const savedName = localStorage.getItem("name");
if (savedName == null) {
    console.log("no name found")
    makeVisible(loginForm);
} else {
    console.log("savedName", savedName)
    paintName(savedName);
}
