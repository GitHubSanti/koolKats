// Validate if visitor has been logged in. If not redirects to login screen
let userCredentials = {};
userCredentials.userID = localStorage.getItem("UserID");
userCredentials.username = localStorage.getItem("UserName");

$.post("/api/loggedIn", userCredentials, (serverRes => {
    if (serverRes.length == 0) {
        console.log("Redirecting to login page");
        window.location.assign("/");
    } else {
        console.log("Already logged in");
    }
}))