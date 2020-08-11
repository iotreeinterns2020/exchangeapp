import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyB3ZPxBCfQ1slJbdoWODpWGdwRHAIh-KnI",
  authDomain: "iotreeinterns2020-7a089.firebaseapp.com",
  databaseURL: "https://iotreeinterns2020-7a089.firebaseio.com",
  projectId: "iotreeinterns2020-7a089",
  storageBucket: "iotreeinterns2020-7a089.appspot.com",
  messagingSenderId: "62606525898",
  appId: "1:62606525898:web:7b489e1ecf7ce75207fb33",
  measurementId: "G-CKVMY19R6W"
};
  

  const fire = firebase.initializeApp(firebaseConfig)

  export default fire;