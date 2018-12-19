import firebase from 'firebase/app'
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBgMBf9qmhSx4ato1rd3tOLk8J36f1xYzA",
    authDomain: "brite-core-data-table.firebaseapp.com",
    databaseURL: "https://brite-core-data-table.firebaseio.com",
    projectId: "brite-core-data-table",
    storageBucket: "",
    messagingSenderId: "659019629335"
}

firebase.initializeApp(config)

// Initialize Cloud Firestore through Firebase
let db = firebase.firestore();

// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
});

console.log('db',db)

export default { db }