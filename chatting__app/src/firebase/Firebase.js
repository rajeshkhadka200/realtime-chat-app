import firebase from 'firebase' 

var ChatApp = firebase.initializeApp({
	apiKey: "AIzaSyAjmNonotaMOJAHmo0uky4rSCVpOCU1tMs",
    	authDomain: "chat-app-6594b.firebaseapp.com",
    	databaseURL: " https://chat-app-6594b.firebaseio.com ",
    	projectId: "chat-app-6594b",
    	storageBucket: "chat-app-6594b.appspot.com",
    	messagingSenderId: "261391510226",
    	appId: "1:261391510226:web:3dfc2de17c3b74284a1b0b"
});
var db = ChatApp.firestore(); 

export {db} ;