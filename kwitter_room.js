
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBqoQ5tpNHPwtjufZRGYnwJyePmONY94-w",
      authDomain: "kwitter-158fb.firebaseapp.com",
      databaseURL: "https://kwitter-158fb-default-rtdb.firebaseio.com",
      projectId: "kwitter-158fb",
      storageBucket: "kwitter-158fb.appspot.com",
      messagingSenderId: "6841375873",
      appId: "1:6841375873:web:a53a079d151ce849178180"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
