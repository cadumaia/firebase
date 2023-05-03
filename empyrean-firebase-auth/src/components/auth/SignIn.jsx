import React, { useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword} from "firebase/auth";


const SignIn = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const signIn = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, senha)
      .then ((userCredential) => {
      console.log(userCredential)
    }).catch((error) => {
      console.log(error);
    })

  }




  return (
    <div className='sign-in-container'>
    <form onSubmit ={signIn}>
        <h1> Login </h1>
      <input
        type="email" 
        placeholder="Insira seu email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>

      <input 
        type="senha" 
        placeholder="Insira sua senha" 
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      ></input>
      <button type="submit"> Login </button>
  </form>
</div>
  );
};

export default SignIn

