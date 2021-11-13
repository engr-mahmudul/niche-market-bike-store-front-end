import { useEffect, useState } from "react";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, getIdToken, signOut } from "firebase/auth";
import initilizeFirebase from "../Pages/Login/Login/firebase.init";



initilizeFirebase()
const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');

    // ---------------------------------------User Registration---------------------------

    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                setAuthError('');
                const newUser = { email, displayName: name };

                // Send data to the database
                saveUser(email, name, 'POST');


                //Update user name to the firebae 
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });
                history.replace('/');

            })
            .catch((error) => {
                const errorCode = error.code;
                setAuthError(error.message);
                // ..
            })
            .finally(() => setIsLoading(false));
    }
    //----------------------------------------Login User-------------------------------------
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const destination = location?.state?.from || '/';
                history.replace(destination);

                setAuthError('');
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }
    //------------------------------------ User State observer----------------------------
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {

                const uid = user.uid;
                setUser(user);

                // JWT Token related code 

                // getIdToken(user)
                //     .then(idToken => {
                //         setToken(idToken);
                //     })

            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [])

    // -------------------------------------Admin check----------------------------------------- 

    useEffect(() => {
        const url = `http://localhost:5000/users/${user?.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (data === 'admin') {
                    setAdmin(true);
                }
                console.log(data);
            })
    }, [user?.email])

    // -------------------------------------Log Out User----------------------------------------- 
    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
            setAdmin(false);
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));

    }
    //---------------------------------------Save User Data to Database------------------------
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)

        })
            .then()


    }

    return {
        user, admin, token, registerUser, loginUser, logOut, isLoading, authError
    }
}
export default useFirebase;