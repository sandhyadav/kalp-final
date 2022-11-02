const firebaseConfig = {
    apiKey: "AIzaSyArdZFSOyYnGHGAWxkRxZIqXQBgWcArIx4",
    authDomain: "chat-website-da68d.firebaseapp.com",
    databaseURL: "https://chat-website-da68d-default-rtdb.firebaseio.com",
    projectId: "chat-website-da68d",
    storageBucket: "chat-website-da68d.appspot.com",
    messagingSenderId: "391037116454",
    appId: "1:391037116454:web:0e47c5f9c241d935fbc6e7"
  };
firebase.initializeApp(firebaseConfig) 

debugger;
  user_name = localStorage.getItem("user_name");
	room_name = localStorage.getItem("room_name");
  function load(){
    
    document.getElementById("displyRoomName").innerHTML=room_name;
  }
function sendmessage()
{
  msg = document.getElementById("text-message").value;
  debugger;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,

   });

  document.getElementById("text-message").value = "";
} 
function getData() {
   firebase.database().ref("/"+room_name).on('value', function(snapshot) {
     document.getElementById("output").innerHTML = ""; 
     snapshot.forEach(function(childSnapshot) { 
      childKey  = childSnapshot.key; childData = childSnapshot.val(); 
      if(childKey != "purpose") {
      firebase_message_id = childKey;
     message_data = childData;

  

     
} });  }); }
getData();


function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");
  }
  

