import axios from 'axios';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from "../style";

export const SignUp = ({setSign}) =>{

    const [form, setForm] = useState({});
    const navigate = useNavigate();
  
    function atribuirDados(event) {
      setForm({ ...form, [event.target.name]: event.target.value });
    }
  
    function submitForm(event) {
      event.preventDefault();
      axios
        .post("http://localhost:5000/", form)
        .then((e) => {
          //  setToken(e.data)
          navigate("/home");
          localStorage.setItem("token", JSON.stringify(e.data));
        })
        .catch((e) => {
          console.log(e);
        });
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
          onChange={(e) => {
            atribuirDados(e);
          }}
        ></input>
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
        <input
          name="confirm_password"
          placeholder="Confirmar Senha"
          type="password"
          onChange={(e) => {
            atribuirDados(e);
          }}
        ></input>
        <input type="submit" value="Entrar"></input>
          <p onClick={()=>{setSign(true)}}>Já Cadastrado? Logar-se!</p>
        
      </Form>
)}