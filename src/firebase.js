import firebase from "firebase/app";

const config = {
  apiKey: "AIzaSyCMpUiVNnS0IyRbLLqRDuU79_emVTfhNFo",
  authDomain: "csgo-auction.firebaseapp.com",
  databaseURL: "https://csgo-auction.firebaseio.com",
  projectId: "csgo-auction",
  storageBucket: "",
  messagingSenderId: "209467909390",
  appId: "1:209467909390:web:db0e1d3f915fea28"
};

const app = firebase.initializeApp(config);

export default app;
