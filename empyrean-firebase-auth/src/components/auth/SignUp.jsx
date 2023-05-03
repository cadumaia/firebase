import React, { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword} from "firebase/auth";


const SignUp = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const signUp = (e) => {
      e.preventDefault();
      createUserWithEmailAndPassword(auth, email, senha)
      .then ((userCredential) => {
      console.log(userCredential)
    }).catch((error) => {
      console.log(error);
    })

  }




  return (
    <div className='sign-in-container'>
    <form onSubmit ={signUp}>
        <h1> Faça seu Cadastro </h1>
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
      <button type="submit"> Cadastre-se </button>
  </form>
</div>
  );
};

export default SignUp;

