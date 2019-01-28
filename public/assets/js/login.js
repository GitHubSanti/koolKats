$("#login-btn").on("click", function(event) {
    event.preventDefault();
    let userCredentials = {};
    userCredentials.usernameInput = $("#inputUserName").val().trim();
    userCredentials.passwordInput = $("#inputPassword").val().trim();

    if (userCredentials.usernameInput == "" || userCredentials.passwordInput == "") {
        alert("Please fill in both the username and password field.")
    } else if (!userCredentials.usernameInput == "" && !userCredentials.passwordInput == "") {
        $.post("/api/login", userCredentials, (serverRes => {
            if (serverRes.length == 0) {
                alert("username and password combination doesn't exist");
            } else if (serverRes.length > 0) {
                console.log("You're logged in!");
                console.log(serverRes[0].id);
                localStorage.setItem("UserID",serverRes[0].id);
                window.location.assign("/addEvent");

            }
        }))
    }
});