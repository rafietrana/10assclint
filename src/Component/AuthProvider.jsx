import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase";



 

 
 export  const AuthContext = createContext(null);

 

const googleProvider = new GoogleAuthProvider();
const githhubProvider = new   GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const [loading,  setLoading] = useState(true)




    const createUser = (email, password) =>{
        loading(true)
           return   createUserWithEmailAndPassword(auth, email, password);
    }


    const loginUser =(email, password)=>{
        setLoading(true);
       return signInWithEmailAndPassword(auth, email, password)
    }

const addMoreInfo =(name, photo)=>{
    setLoading(true)
    updateProfile(auth.currentUser, {
         displayName: name,
         photoURL: photo
    })
}



 

const googleLogin = () =>{
    setLoading(true)
    return  signInWithPopup(auth, googleProvider)
    }
const githubLogin = () =>{
    setLoading(true)
    return  signInWithPopup(auth,  githhubProvider)
    }


    const userLogout =()=>{
       setLoading(true)
       return signOut(auth);
      }


    useEffect(() => {

        const unSubscribe = onAuthStateChanged(auth, currentUser => {
   
  
            setUser(currentUser);
            setLoading(false);
        });
      
        return () => {
          unSubscribe();
        };
      },  []);
      



    const userInfo = {
        user,
         createUser,
         loginUser,
         addMoreInfo,
         googleLogin,
         githubLogin,
         userLogout,
         loading
    }
    return (
     <AuthContext.Provider value={userInfo}>
      {children}
     </AuthContext.Provider>
    );
};

 export default AuthProvider;