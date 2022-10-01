import axios from "axios";
import { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "../style";
import {ThreeDots} from 'react-loader-spinner'
import useCreateUser from "../../../hooks/api/createUser";

export const SignUp = ({ setSign }) => {
  const { loadingCreatingUser, createUser, creatingUserError } = useCreateUser();

  useEffect(() => {
    if(creatingUserError){
      alert("Erro ao cadastrar", creatingUserError.data)
    }
  
    
  }, [ creatingUserError])
  

  const [form, setForm] = useState({});
  const navigate = useNavigate();

  function atribuirDados(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function submitForm(event) {
    event.preventDefault();
    createUser(form).then(()=>{
      setSign(true)
    })
    
  }

  return (
    <Form
      onSubmit={(e) => {
        submitForm(e);
      }}
    >
      <input
        name="name"
        placeholder="Nome"
        type="name"
        disabled={loadingCreatingUser}
        onChange={(e) => {
          atribuirDados(e);
        }}
      ></input>
      <input
        name="email"
        placeholder="E-mail"
        disabled={loadingCreatingUser}
        type="email"
        onChange={(e) => {
          atribuirDados(e);
        }}
      ></input>
      <input
        name="password"
        placeholder="Senha"
        disabled={loadingCreatingUser}
        type="password"
        onChange={(e) => {
          atribuirDados(e);
        }}
      ></input>
      <input
        name="confirm_password"
        placeholder="Confirmar Senha"
        disabled={loadingCreatingUser}
        type="password"
        onChange={(e) => {
          atribuirDados(e);
        }}
      ></input>
      <button onClick={(e)=>{submitForm(e)}}>{loadingCreatingUser?<ThreeDots color="steelblue"/>:'Enviar' }</button>
      <p
        onClick={() => {
          setSign(true);
        }}
      >
        Já Cadastrado? Logar-se!
      </p>
    </Form>
  );
};
