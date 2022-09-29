import { Form } from "../../pages/AuthPage/style";
import { useEffect, useState } from "react";
import styled from "styled-components";
import {Button} from '../Button'

export function AddNew() {
  const [add, setAdd] = useState(false);

  const create = <FormNew>
                    <h3>Criar Aviso</h3>
                    <input placeholder="Titulo"></input>
                    <textarea placeholder="texto"></textarea>
                    <div>
                        <button onClick={()=>{setAdd(!add)}}>Cancelar</button>
                        <button>Enviar</button>
                    </div>
                </FormNew>


  const addOn = add ? create : <Button onClick={()=>{setAdd(!add)}}>Criar Aviso</Button>

  return (
    addOn
  );
}



const FormNew = styled(Form)`
  margin-top: 30px;
  width: 100%;
  padding: 10px;
  background-color: #d4d4d4;
  border: 1px solid black;
  border-radius: 10px;
  input {
    width: 95%;
    height: 30px;
  }

  textarea {
    width: 95%;
    height: 70px;
  }

  h3 {
    font-size:larger;
    color: #000;
  }

  button {
    width: 90px;
    height: 30px;
    font-weight: 900;
    border: none;
    border-radius: 5px;
    color: white;
    cursor:pointer;
  }
  button:first-child {
    background-color: rgb(217, 38, 38);
  }
  button:nth-child(2) {
    background-color: green;
  }
  button:hover{
    filter: brightness(0.8);
  }
  div {
    display: flex;
    gap: 10px;
  }
`;
