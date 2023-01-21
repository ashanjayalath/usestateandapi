import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDEagXorzu2p4DFE4Ixb7X7vkdV_XTswNY",
    authDomain: "bkcity-auth.firebaseapp.com",
    projectId: "bkcity-auth",
    storageBucket: "bkcity-auth.appspot.com",
    messagingSenderId: "348112774590",
    appId: "1:348112774590:web:b27b459d192404db0605ef"
};


const app = firebase.initializeApp(firebaseConfig);
const dataBase = getFirestore(app);
const auth = firebase.auth();
export const FCRUD={
    auth,
    dataBase,
};

















//
// // const app = initializeApp(firebaseConfig);
// // const auth = getAuth(app);
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// export async function logout(db:any){
//
//     // Get a list of cities from your database
//
//         const citiesCol = collection(db, 'cities');
//         const citySnapshot = await getDocs(citiesCol);
//         const cityList = citySnapshot.docs.map(doc => doc.data());
//         console.log(cityList)
//         return cityList;
//
//
//     // signOut(auth).then(() => {
//     //     // Sign-out successful.
//     //     message.success("SignOut Successfully")
//     //     console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkk")
//     // }).catch((error) => {
//     //     // An error happened.
//     //     message.warning("SignOut UnSuccessfully")
//     // });
// }