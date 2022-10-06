import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "../../../components/Form";
import {ThreeDots} from 'react-loader-spinner';
import useLoginUser from "../../../hooks/api/loginUser";
import {TokenContext} from '../../../contexts/tokenContext'

export const SignIn = ({setSign}) => {
  const {tokenUser, loadingLoginUser, loginUser, loginUserError} = useLoginUser()
  const [form, setForm] = useState({});
  const navigate = useNavigate();
  const {setToken} = useContext(TokenContext)

  useEffect(() => {
    if(loginUserError){
      alert("Erro ao efetuar o Login")
    }

    if(tokenUser) {
      setToken(tokenUser)

      navigate("/home")

      

    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ loadingLoginUser, loginUserError])

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

