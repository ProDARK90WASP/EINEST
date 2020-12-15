var firebaseConfig = {
      apiKey: "AIzaSyBZKz3BpFO3AAbJtQqJszOeq8zs1EzTl-M",
      authDomain: "kwitter-cd9d5.firebaseapp.com",
      databaseURL: "https://kwitter-cd9d5.firebaseio.com",
      projectId: "kwitter-cd9d5",
      storageBucket: "kwitter-cd9d5.appspot.com",
      messagingSenderId: "605746429110",
      appId: "1:605746429110:web:c37034dacf5e1e8704ba17"
    };
    firebase.initializeApp(firebaseConfig);
    var localStorage_username =localStorage.getItem("user_name");
    document.getElementById("welcome_user_name").innerHTML="WELCOME "+localStorage_username;
    function add_room(){
          roomname=document.getElementById("room_name").value;
          firebase.database().ref("/").child(roomname).update({
            purpose:"add_roomname"
      });
          localStorage.setItem("room_name",roomname);

          window.location="einest_page.html";
    }
function getData(){
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log(Room_names);
      row="<div class='roomname' id='"+Room_names+"' onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>"
document.getElementById("output").innerHTML+=row;
      });});}
getData();
function redirecttoroomname(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="einest_page.html";
}
function Logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="einest.html";
}