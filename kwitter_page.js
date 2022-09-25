const firebaseConfig = {
    apiKey: "AIzaSyCfJrA_Amdi80DW2dz05YfdvJrMT_RIkQk",
    authDomain: "kwitter-project-f131d.firebaseapp.com",
    databaseURL: "https://kwitter-project-f131d-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-f131d",
    storageBucket: "kwitter-project-f131d.appspot.com",
    messagingSenderId: "99190509559",
    appId: "1:99190509559:web:d1f5c72e39e56086a028f2",
    measurementId: "G-6R30S742WT"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        likes: 0
    })

    document.getElementById("msg").value ="";
  }