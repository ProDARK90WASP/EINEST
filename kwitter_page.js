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
      user_name=localStorage.getItem("user_name");
      room_name=localStorage.getItem("room_name");
      function SEND(){
            msg=document.getElementById("input_message").value;
            firebase.database().ref(room_name).push({
                  name:user_name,
                  message:msg,
                  like:0
            });
            document.getElementById("input_message").value="";
      }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         console.log(firebase_message_id);
         console.log(message_data);
         username=message_data["name"];
         likes=message_data["like"];
         messages=message_data["message"];
         USERNAME_tag="<h4>"+username+"<img src='tick.png' class='user_tick'> </h4>";
         MESSAGE_tag="<h4>"+messages+"</h4>";
         LIKE_tag="<button class='btn btn-warning' id='"+firebase_message_id+"' value='"+likes+"' onclick='update_like(this.id)'>";
         span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>likes: "+likes+"</span></button><hr>";
         row=USERNAME_tag+MESSAGE_tag+LIKE_tag+span_with_tag;
         document.getElementById("output").innerHTML+=row;
      } });  }); }
getData();
function Logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";
}
function update_like(message_id){
button_id=message_id;
likes=document.getElementById(button_id).value;
updated_likes=Number(likes)+1;
firebase.database().ref(room_name).child(message_id).update({
      like:updated_likes
});
}