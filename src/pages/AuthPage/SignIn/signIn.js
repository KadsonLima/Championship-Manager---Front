import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "../style";
import {ThreeDots} from 'react-loader-spinner'
import useLoginUser from "../../../hooks/api/loginUser";
import {useLocalstorage} from '../../../hooks/useLocalStorage'

export const SignIn = ({setSign}) => {
  const {tokenUser, loadingLoginUser, loginUser, loginUserError} = useLoginUser()
  const [token, setToken] = useState("");
  const { token: userToken } = useLocalstorage({ key: 'token', value: token }) 
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if(loginUserError){
      alert("Erro ao efetuar o Login", loginUserError)
    }
    if(tokenUser !== null && !loadingLoginUser) {
      setToken(tokenUser)
    }
    if(userToken){
      navigate("/home")
    }
  
    
  }, [ loadingLoginUser])

  function atribuirDados(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function submitForm(event) {
    event.preventDefault(); 

    loginUser(form).then(
      navigate("/home")
    )

  }

  return (
    <Form
      onSubmit={(e) => {
        submitForm(e);
      }}
    ><h3>Championship Manager</h3>
      <input
        name="email"
        placeholder="E-mail"
        type="email"
        onChange={(e) => {
          atribuirDados(e);
        }}
      ></input>
      <input
        name="password"
        placeholder="Senha"
        type="password"
        onChange={(e) => {
          atribuirDados(e);
        }}
      ></input>
       <button onClick={(e)=>{submitForm(e)}}>{loadingLoginUser?<ThreeDots color="red"/>:'Logar-se' }</button>
        <p onClick={()=>{setSign(false)}}>Primeira vez? Cadastre-se!</p>
      
    </Form>
  );
};

