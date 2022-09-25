const firebaseConfig = {
    apiKey: "AIzaSyCfJrA_Amdi80DW2dz05YfdvJrMT_RIkQk",
    authDomain: "kwitter-project-f131d.firebaseapp.com",
    projectId: "kwitter-project-f131d",
    storageBucket: "kwitter-project-f131d.appspot.com",
    messagingSenderId: "99190509559",
    appId: "1:99190509559:web:d1f5c72e39e56086a028f2",
    measurementId: "G-6R30S742WT"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);


  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome " + user_name;


  function redirectToRoomName(name)
  {
        console.log(name);
        localStorage.setItem("room_name" , name);
        window.location = "kwitter_room.html";
  }
  
function addroom() {
  room_name = document.getElementById("room_name").value;

  firebase.datbase().ref("/").child(room_name).update({
        purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location.replace("kwitter_page.html");
    
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
 console.log("Room Name - " + Room_names);
 row = "<div class ='room_name' id = " + Room_names + " onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
 document.getElementById("output").innerHTML += row ;

 //End code
 });});}
getData();

function logout()
{
  localStorage.removeItem("room_name");
  localStorage.removeItem("user_name");
  window.location.replace("index.html");
}


