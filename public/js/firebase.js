let firebaseConfig = {
  apiKey: "AIzaSyCl9RFlGnFJGQbR49AZ-NfH46mif924K6M",
  authDomain: "blogging-web-7d8d6.firebaseapp.com",
  projectId: "blogging-web-7d8d6",
  storageBucket: "blogging-web-7d8d6.appspot.com",
  messagingSenderId: "1080777279409",
  appId: "1:1080777279409:web:4c7724fba692b7f81a1f90",
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let auth = firebase.auth();
