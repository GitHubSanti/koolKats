$("#new-account-btn").on("click", function(event) {
    event.preventDefault();
    if (!($("#inputPassword").val().trim() === $("#confirmInputPassword").val().trim())) {

        alert("Passwords don't match!");

    } else if ($("#inputPassword").val().trim() == "" || $("#confirmInputPassword").val().trim() == "" || $("#inputUserName").val().trim() == "") {

        alert("Please fill in all the fields.")

    } else if ($("#inputPassword").val().trim() === $("#confirmInputPassword").val().trim() && !$("#inputPassword").val().trim() == "" && !$("#inputUserName").val().trim() == "") {
        // Create User object to send to server
        let createUser = {};
        createUser.usernameInput = $("#inputUserName").val().trim();
        createUser.passwordInput = $("#inputPassword").val().trim();

        $.post("/api/createUser", createUser, (serverRes => {
            console.log(serverRes);
            // Determine what prevented user from being created
            if ('errors' in serverRes) {
                // Unique username req not met
                if (serverRes.name == "SequelizeUniqueConstraintError") {
                    alert("Please use a different username. That one has been taken!")
                }
            }
            if ('id' in serverRes) {
                // Store User ID
                localStorage.setItem("UserID",serverRes.id);
                console.log("local Storage user ID:" + localStorage.getItem("UserID"));
                alert("New account created!");
                window.location.assign("/addEvent");
            }
        }))
    }
});