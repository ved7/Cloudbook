import firebase from "firebase/app";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyA18okyX5EWIyuAeFPklju5iRYEab7hz-M",
  authDomain: "cloudbook-ec732.firebaseapp.com",
  projectId: "cloudbook-ec732",
  storageBucket: "cloudbook-ec732.appspot.com",
  messagingSenderId: "853526688926",
  appId: "1:853526688926:web:f628dedeca5d51936e778f",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
export { storage, firebase as default };
