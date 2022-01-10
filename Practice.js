const firebaseConfig = {
    apiKey: "AIzaSyCMx3yYpAMyLtSQddhUhCTNwC6ynO7KLUo",
    authDomain: "kwitter-c88cc.firebaseapp.com",
    projectId: "kwitter-c88cc",
    storageBucket: "kwitter-c88cc.appspot.com",
    messagingSenderId: "891289055166",
    appId: "1:891289055166:web:23a8aeb3dd5fd4db2fd3ef",
    measurementId: "G-WM3HQ9CKFM"
  };
  
  function addUser(){
      user_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({ 
          purpose : "adding user" 
        });
  }