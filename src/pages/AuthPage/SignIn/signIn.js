import { useState } from "react";
import { useNavigate , Link} from "react-router-dom";
import axios from "axios";
import { Form } from "../style";

export const SignIn = ({setSign}) => {
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
      <input type="submit" value="Entrar"></input>
        <p onClick={()=>{setSign(false)}}>Primeira vez? Cadastre-se!</p>
      
    </Form>
  );
};

