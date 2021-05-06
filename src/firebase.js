import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDRHRVITJ3wFoR008wuPfAuZnzutI1X0T0",
    authDomain: "clone-8bd6d.firebaseapp.com",
    projectId: "clone-8bd6d",
    storageBucket: "clone-8bd6d.appspot.com",
    messagingSenderId: "106556820849",
    appId: "1:106556820849:web:c02bff488cc864d69d7ad0"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export { db,auth,provider };