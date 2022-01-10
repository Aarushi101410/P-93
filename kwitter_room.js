var firebaseConfig = {
  apiKey: "AIzaSyCMx3yYpAMyLtSQddhUhCTNwC6ynO7KLUo",
  authDomain: "kwitter-c88cc.firebaseapp.com",
  projectId: "kwitter-c88cc",
  storageBucket: "kwitter-c88cc.appspot.com",
  messagingSenderId: "891289055166",
  appId: "1:891289055166:web:23a8aeb3dd5fd4db2fd3ef",
};
firebase.initializeApp(firebaseConfig);
function getData(){
  firebase.database().ref("/"+room_name).on('value', function(snapshot) {

  document.getElementById("output").innerHTML = ""; 
  snapshot.forEach(function(childSnapshot) { 
    childKey = childSnapshot.key; 
    Room_names=childKey;
    console.log("room name -" + Room_names);
    row="<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#"+ Room_names+"</div><hr>";
    document.getElementById("output") .innerHTML+=row;
});
});
}
getData();
 
function addRoom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({ 
      purpose : "adding room name" 
    });

    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html";
  }

    function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
    }
    function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("user_name");
      window.location="index.html";
    }