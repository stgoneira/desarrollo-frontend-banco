// ############################################################
// FIREBASE
// ############################################################
const { initializeApp } = require("firebase/app");
// config 
const firebaseConfig = {
  apiKey: "AIzaSyAwQ1z-0soRoHmxw-JlDC-3eYEhdP-Luc8",
  authDomain: "frontend-banco-2023.firebaseapp.com",
  projectId: "frontend-banco-2023",
  storageBucket: "frontend-banco-2023.appspot.com",
  messagingSenderId: "164570943132",
  appId: "1:164570943132:web:3e73a00b4dd68b592e6759",
  measurementId: "G-94TBDX14ZB"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ############################################################
// FIREBASE-ADMIN
// ############################################################
var admin = require("firebase-admin");
var serviceAccount = require("./serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "frontend-banco-2023.appspot.com"
});
// ############################################################
// EXPORT
// ############################################################
module.exports = {
    app,
    admin
}; 
