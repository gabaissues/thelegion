const firebase = require('firebase')

var firebaseConfig = {
    apiKey: "AIzaSyDCMmNYeBNFD391Wp-qKdwWLvP1nYmSVdU",
    authDomain: "thelegion-database.firebaseapp.com",
    projectId: "thelegion-database",
    storageBucket: "thelegion-database.appspot.com",
    messagingSenderId: "188209800900",
    appId: "1:188209800900:web:bf0978f2e93f2e2badcb91"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database()

module.exports = { database }