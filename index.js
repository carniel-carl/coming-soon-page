let form = document.getElementById("form");
let email = document.getElementById("email");
let error = document.querySelector(".error");

form.addEventListener("submit", (event) => {

    event.preventDefault();

    let re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!re.test(email.value)) {
        email.style.border = "red solid .9px";
        error.innerHTML = "Please provide a valid email address";
        error.style.marginBottom = "1.5rem";
    } else {
        error.innerHTML = null;
        email.style.border = null;
    }

});