function getUsername(){
    username = document.getElementById("username").value;
    debugger;
    console.log(username);
    window.location.href = "rooms.html";
    document.getElementById("showUsername").innerText = username;
    localStorage.setItem("username", username);
}