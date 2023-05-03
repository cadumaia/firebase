import React, { useEffect, useState } from "react";
import  { auth } from "../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser (user);
            } else {
                setAuthUser(null);
            }
        });

        return () => {
            listen();
        }
    }, []);

    const userSignOut = () => {
        signOut(auth).then (() => {
            console.log('Voce deslogou')
            
        }).catch(error => console.log(error))
    }
  return (
  <div> {authUser ? <><p> {`Logado como ${authUser.email}`} </p><button onClick={userSignOut
  }> Sair </button></> : <p> Deslogado </p> } 
  </div>
  ); 
};

export default AuthDetails;