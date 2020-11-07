 
import firebase from 'firebase';  
var firebaseConfig = {
    apiKey: "AIzaSyDYRbo_XtdQZl5dPIJCPlCKfuDj83Kkh6I",
    authDomain: "chatting-app-a79c7.firebaseapp.com",
    databaseURL: "https://chatting-app-a79c7.firebaseio.com",
    projectId: "chatting-app-a79c7",
    storageBucket: "chatting-app-a79c7.appspot.com",
    messagingSenderId: "227548068880",
    appId: "1:227548068880:web:ce82a025bc7bd74c355e95",
    measurementId: "G-2W9EYC7P95"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database().ref("messages");
  
export {db} ; 