$("#login-btn").on("click", function(event) {
    event.preventDefault();
    let userCredentials = {};
    userCredentials.usernameInput = $("#username").val().trim();
    userCredentials.passwordInput = $("#password").val().trim();

    if (userCredentials.usernameInput == "" || userCredentials.passwordInput == "") {
        alert("Please fill in both the username and password field.")
    } else if (userCredentials.usernameInput !== "" && !userCredentials.passwordInput == "") {
        $.post("/api/login", userCredentials, (serverRes => {
            if (serverRes.length == 0) {
                alert("username and password combination doesn't exist");
            } else {
                console.log("You're logged in!");
                localStorage.setItem("UserID",serverRes.UserID);
                localStorage.setItem("UserName",serverRes.UserName);
                window.location.assign("/calendar");
            }
        }))
    }
});