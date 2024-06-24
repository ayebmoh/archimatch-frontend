import { openAlert } from "@/components/OpenAlert";
import { auth, db } from "@/firebase";
import { clsx } from "clsx";

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getDocs, limit, query, where } from "firebase/firestore";
import Cookies from "js-cookie";
import { twMerge } from "tailwind-merge";


export async function logoutFireBase() {
  try {
    await signOut(auth); // Assuming you have initialized the auth object
    console.log('User logged out successfully');
  } catch (error) {
    console.error('Error logging out:', error.message);
  }
}

async function checkUserExists(email) {
  // Assuming you have initialized app
  console.log(email)
  // Get a document reference using email (might not be ideal)
  // Create a query to get at most one car with the provided color
  const q = query(collection(db, "users"), where("email", "==", email), limit(1));

  try {
    const querySnapshot = await getDocs(q);

    if (querySnapshot.size > 0) {
      // Return the data of the first car
      
      return {data : querySnapshot.docs[0].data(), exists : true , id :querySnapshot.docs[0].id };
    } else {
      // No car found with the specified color
      return {data: null, exists:false};
    }
  } catch (error) {
    console.error("Error retrieving users:", error);
    return null; // Handle errors or throw if needed
  }
}


async function createCustomUserWithEmailAndPassword(email, password) {
  // const db = getFirestore(); // Assuming you have initialized app

  try {
    // Generate a random user ID
    const randomId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

    // Create a new user document with the random ID
    const userRef = await addDoc(collection(db, "users"), {
      email : email,
      password:password
      
       /* Store password securely (hashing recommended) */, // Placeholder for secure password storage
      // Add other user data fields here (optional)
    });

    console.log('User created successfully with ID:', userRef.id);
    Cookies.set('firebase_id', userRef.id);
    return userRef.id; // Return the generated user ID
  } catch (error) {
    console.error('Error creating user:', error.message);
    return null; // Indicate error by returning null
  }
}



export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function handleErrors(error) {
  console.log(error);
  if (error.originalStatus === 500 || error.status === 500) {
    console.log("Erreur de serveur");
    error.data.message
      ? openAlert(false, error.data.message)
      : openAlert(false, "Erreur de serveur");
  } else if (error.originalStatus === 400 || error.status === 400) {
    console.log("Veuillez verifier tous vos données");
    error.data.message
      ? openAlert(false, error.data.message)
      : openAlert(false, "Veuillez verifier tous vos données");
  } else if (error.originalStatus === 404 || error.status === 404) {
    console.log("Veuillez verifier tous vos données");
    error.data.message
      ? openAlert(false, error.data.message)
      : openAlert(false, "n'existe pas");
  }
}


// export const handleFirebaseAuth = async (email, password) => {
//   try {
//     // Try to log in the user
    
//     console.log(email,password)
//     const userCredential = await signInWithEmailAndPassword(auth,email, password);
    
//     const user = userCredential.user;
//     console.log('User logged in successfully');
    
//     // Save user ID in cookies
//     Cookies.set('firebase_id', user.uid);
//   } catch (error) {
    
    
//     if (error.code === 'auth/user-not-found') {

//       // User does not exist, create a new user
//       try {
//         console.log("aaaaaaaaaaaaaaa",email,password)
//         const userCredential = await createUserWithEmailAndPassword(auth,email, password);
//         const user = userCredential.user;
//         console.log('User created and logged in successfully');
        
//         // Save user ID in cookies
//         Cookies.set('firebase_id', user.uid);
//       } catch (createError) {
//         console.error('Error creating user:', createError.message);
//       }
//     } else {
//       console.error('Error logging in user:', error.message);
//     }
//   }
// };


export const handleFirebaseAuth = async (email, password) => {
  const userExists = await checkUserExists(email);
  if (userExists.exists) {
    console.log("user exists")
    // User potentially exists, try signing in
    try {
  
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log(userCredential.user)
      console.log('User logged in successfully');
      // Save user ID in cookies
      Cookies.set('firebase_id', userExists.id);
    } catch (error) {
      // Handle errors like invalid credentials
    }
  } else {
    const userCredential = await createUserWithEmailAndPassword(auth,email, password);
    const user = userCredential.user;
    console.log('User created and logged in successfully');
    const id = createCustomUserWithEmailAndPassword(email,password)
    // Save user ID in cookies
    
  }
};