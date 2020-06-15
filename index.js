const express = require('express');
const firebase = require('firebase');
const auth = require("firebase/auth");
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const app = express();

var firebaseConfig = {
  apiKey: "AIzaSyBnw5Zo93CLzQPYxHGgK2_Is0ZQtpaLlP8",
  authDomain: "heroesapp-b2cee.firebaseapp.com",
  databaseURL: "https://heroesapp-b2cee.firebaseio.com",
  projectId: "heroesapp-b2cee",
  storageBucket: "heroesapp-b2cee.appspot.com",
  messagingSenderId: "35978519853",
  appId: "1:35978519853:web:0944aae9da0d8f33b51fa4",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

app.listen(3000, () => {

    console.log('Server on port 3000');

    let database = firebase.database();

    const heroes = database.ref("heroes");

    // Sin auth, deniega el permiso
    // heroes.once("value").then((snapshot) => {
    //     console.log(snapshot.val());
    // }).catch((err) => {
    //     console.log(err);
    // });

    // Con auth, devuelve los datos
    firebase.auth().signInWithEmailAndPassword(
        "Omar.Salgado@saint-gobain.com",
        "TasterChoice1"
    ).then((user) => {
        // console.log(user);
        const heroes = database.ref("heroes");

        heroes.once('value').then((snapshot) => {
            console.log(snapshot.val());
        }).catch((err) => {
            console.log(err);
        })
    })
    .catch((err) => {
        console.log(err);
    });
    

})