import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged 
} from "firebase/auth";
import { getFirestore, doc, setDoc, Timestamp, collection } from "firebase/firestore";
import { defineStore } from "pinia";
import {auth} from '../js/firebase'
import { ref } from "vue";
import { useRouter } from "vue-router";

export const useAuthStore = defineStore('AuthStore', () => {

    const user = ref({});
    const router = useRouter();
    const isLoggedIn = ref(true);

    const init = () => {
        onAuthStateChanged(auth, (userDetails) => {
            console.log("Auth state changed");
            // console.log(userDetails);
            if (userDetails) {
              const uid = userDetails.uid;
              user.value = {email: userDetails.email, uid };
              isLoggedIn.value = false;
            } else {
                user.value = {};
                isLoggedIn.value = true;
                router.push({name: 'auth'});
            }
          });        
    }


    const registerUser = async (credentials) => {
        // const auth = getAuth();
        const firestore = getFirestore();

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, credentials.email, credentials.password);
            const user = userCredential.user;

            // Create a user document in Firestore (exclude password)
            const userDocRef = doc(collection(firestore, "users"), user.uid);
            await setDoc(userDocRef, {
                firstName: credentials.firstName,
                lastName: credentials.lastName,
                email: credentials.email,
                createdAt: Timestamp.now(),
            });

            console.log("User registered successfully!", user);
        } catch (error) {
            console.error("Registration failed:", error);
            // Handle errors appropriately, e.g., display error messages to the user
        }
    };



    const loginUser = async (credentials) => {
        const auth = getAuth();

        try {
            const userCredential = await signInWithEmailAndPassword(auth, credentials.email, credentials.password);
            const user = userCredential.user;

            console.log("User logged in successfully!", user);
            // Handle successful login as needed
        } catch (error) {
            console.error("Login failed:", error);

            // Handle specific error messages
            if (error.code === 'auth/invalid-email') {
                alert('Invalid email address');
            } else if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password-check') {
                alert('Incorrect email or password');
            } else {
                // Handle other errors
                alert('Login failed. Please try again.');
            }

            // Handle errors appropriately, e.g., display error messages to the user
        }
    };



    const logoutUser = async () => {
        try {
            await signOut(auth);
            console.log('User logged out successfully!');
            // Handle successful logout as needed
        } catch (error) {
            console.error('Logout failed:', error);
            // Handle errors appropriately, e.g., display error messages to the user
        }
    };    




    return {
        isLoggedIn,
        user,
        init,
        registerUser,
        loginUser,
        logoutUser,
    };
});
