// Import FirebaseAuth and firebase.
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Configure Firebase.
const config = {
    apiKey: "AIzaSyA1nPX86IH9TV2DtPnGBUJVXuE2ssV5FvE",
    authDomain: "sastreriamintic.firebaseapp.com",
    projectId: "sastreriamintic",
    storageBucket: "sastreriamintic.appspot.com",
    messagingSenderId: "73141112732",
    appId: "1:73141112732:web:8b4c8437d66b8b377c0259",
    measurementId: "G-RQBP592H2G"
};
firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],

    callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
          const user_admin = {
            uid: authResult.user.uid,
            name: authResult.user.displayName,
            email: authResult.user.email,
            flagNewUser: authResult.additionalUserInfo.isNewUser,
          };
    
          localStorage.setItem("user_admin", JSON.stringify(user_admin));
          return true;
        },
      },
    

};

function BotonInicioSeccion() {
    return (
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    );
}

export default BotonInicioSeccion;