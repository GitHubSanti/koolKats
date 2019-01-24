
$("#login-btn").on("click", function(event) {
    event.preventDefault();
    let userCredentials = {};
    userCredentials.usernameInput = $("#inputUserName").val().trim();
    userCredentials.passwordInput = $("#inputPassword").val().trim();

    $.post("/api/login", userCredentials, (serverRes => {
          console.log(serverRes);
          if (serverRes.length == 0 ) {
            console.log("username and password combination doesn't exist");
          } else if (serverRes.length > 0) {
              console.log("You're logged in!");
          }
      }))
  });