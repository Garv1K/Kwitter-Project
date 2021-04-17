  var firebaseConfig = {
    apiKey: "AIzaSyCk0xqlBhTfjig6ZZn8ImN07BXqdkkVtCk",
    authDomain: "kwitter-project-5c6ab.firebaseapp.com",
    databaseURL: "https://kwitter-project-5c6ab-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-5c6ab",
    storageBucket: "kwitter-project-5c6ab.appspot.com",
    messagingSenderId: "692986137086",
    appId: "1:692986137086:web:f8e1d98e612eb31662d8af"
  };
 
  firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();