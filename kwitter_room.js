var firebaseConfig = {
    apiKey: "AIzaSyDJNLCKKlk8dbrhKhNNbylfp7ipeqCdemo",
    authDomain: "kwitter-37e11.firebaseapp.com",
    databaseURL: "https://kwitter-37e11-default-rtdb.firebaseio.com",
    projectId: "kwitter-37e11",
    storageBucket: "kwitter-37e11.appspot.com",
    messagingSenderId: "386217871182",
    appId: "1:386217871182:web:96fce7bf159e1675ab001f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function redirectToRoomName() {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}


function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code
            console.log("room name-" + Room_names);
            row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'> #" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;


            //End code
        });
    });
}
getData();