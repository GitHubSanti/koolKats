
$("#login-btn").on("click", function(event) {
    event.preventDefault();
    let userCredentials = {};
    userCredentials.usernameInput = $("#inputUserName").val().trim();
    userCredentials.passwordInput = $("#inputPassword").val().trim();

    $.post("/api/login", userCredentials, (serverRes => {
          console.log("message from server:");
          console.log(serverRes);
      }))
  });