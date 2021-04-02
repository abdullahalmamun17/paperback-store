import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";


export const firebaseIntialize = () => {
    !firebase.apps.length && firebase.initializeApp(firebaseConfig);
}

export const handleGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    return firebase.auth()
        .signInWithPopup(googleProvider)
        .then(result => {
            const credential = result.credential;
            const token = credential.accessToken;
            const user = result.user;
            return user;
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = error.credential;
            console.log(errorCode, errorMessage, email, credential)
        });
}

const handleLogOut = () => {
    return firebase.auth().signOut()
    .then(() => {
        //successful
    })
    .catch((error) => {
        // An error happened.
    });
}