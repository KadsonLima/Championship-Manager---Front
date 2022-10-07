import { Form } from "../Form";
import { useState , useContext} from "react";
import styled from "styled-components";
import {Button} from '../Button'
import { TokenContext } from "../../contexts/tokenContext";
import useCreateNew from "../../hooks/api/createNew";
import {RotatingLines} from 'react-loader-spinner';

export function AddNew() {
  const [form, setForm] = useState({});
  const [add, setAdd] = useState(false);
  const {token, header} = useContext(TokenContext)
  const {creatingNewError, loadingCreatingNew, createNew} = useCreateNew();

  function submitForm(event) {
    event.preventDefault(); 
    const body = {
      userId:token.id,
      text:form,
    }
    
    createNew(body, header)
  }

  const create = loadingCreatingNew?<FormNew><RotatingLines
  strokeColor="grey"
  strokeWidth="5"
  animationDuration="0.75"
  width="96"
  visible={true}
/></FormNew>:<FormNew>
                    <h3>Criar Aviso</h3>
                    <textarea placeholder="texto" onChange={(e) => {setForm(e.target.value)}}></textarea>
                    <div>
                        <button onClick={()=>{setAdd(!add)}}>Cancelar</button>
                        <button onClick={(e)=>{submitForm(e)}}>Enviar</button>
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
