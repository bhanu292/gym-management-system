const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const adminEmail = "bhanu@gmail.com";
    const adminPassword = "5827238";

    if (
        email === adminEmail &&
        password === adminPassword
    ) {

        localStorage.setItem(
            "isLoggedIn",
            "true"
        );

        alert("Login successful!");

        window.location.href = "dashboard.html";

    } else {

        alert("Invalid email or password!");

    }

});