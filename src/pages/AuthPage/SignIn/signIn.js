import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "../style";
import {ThreeDots} from 'react-loader-spinner'
import useLoginUser from "../../../hooks/api/loginUser";
import {useLocalstorage} from '../../../hooks/useLocalStorage'
import {TokenContext} from '../../../contexts/tokenContext'

export const SignIn = ({setSign}) => {
  const {tokenUser, loadingLoginUser, loginUser, loginUserError} = useLoginUser()
  const [refresh, setRefresh] = useState(0);
  const [form, setForm] = useState({});
  const navigate = useNavigate();
  const {setToken, token} = useContext(TokenContext)

  useEffect(() => {
    if(loginUserError){
      alert("Erro ao efetuar o Login")
    }

    if(tokenUser) {
      setToken(tokenUser)

        navigate("/home")

      

    }

  }, [ loadingLoginUser, loginUserError, refresh])

  function atribuirDados(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function submitForm(event) {
    event.preventDefault(); 

    loginUser(form)
    setToken(tokenUser)

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
       <button onClick={(e)=>{submitForm(e)}}>{loadingLoginUser?<ThreeDots color="steelblue"/>:'Logar-se' }</button>
        <p onClick={()=>{setSign(false)}}>Primeira vez? Cadastre-se!</p>
      
    </Form>
  );
};

