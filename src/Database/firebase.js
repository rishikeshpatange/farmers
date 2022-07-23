import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth'

  const firebaseConfig = {
    apiKey: "AIzaSyDrDVgS3LIAk_JYwPY6fRHHw2wvKv2TPwQ",
    authDomain: "farmer-2215b.firebaseapp.com",
    databaseURL: "https://farmer-2215b-default-rtdb.firebaseio.com",
    projectId: "farmer-2215b",
    storageBucket: "farmer-2215b.appspot.com",
    messagingSenderId: "949984425343",
    appId: "1:949984425343:web:d3be1525b6de755f80164a",
    measurementId: "G-ZV6VBY7HK9"
  };

  const app = initializeApp(firebaseConfig);
  
  export const auth = getAuth(app);
 