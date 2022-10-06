import { useState , useEffect} from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Form } from "../../components/Form";
import {ThreeDots} from 'react-loader-spinner'
import useRegisterTeam from "../../hooks/api/registerTeam";




function Register() {
  const { loadingRegisterTeam, registerTeam, registerTeamError } = useRegisterTeam();
  const {camp} = useParams()
  const [form, setForm] = useState({});
  useEffect(()=>{
    if(registerTeamError){
      alert(registerTeamError.response.data)
    }
  }, [registerTeamError])
  function atribuirDados(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log(form)
  }

  function submitForm(event) {
    event.preventDefault();
    registerTeam(form, camp)
    
  }

    return (
      <Container>
        <FormTeam>
        <h3>CAMPEONATO</h3>
        <span>Registrar Time</span>
          <input name="nameTeam" placeholder="Nome do Time" onChange={(e) => {
          atribuirDados(e);
        }}/>
          <input name="numberContact"  placeholder="Numero de Contato" onChange={(e) => {
          atribuirDados(e);
        }}/>
          <input name="nameLeader" placeholder="Nome do Lider" onChange={(e) => {
          atribuirDados(e);
        }}/>
          <ChoiceClass membro={'leader'} atribuirDados={atribuirDados}/>
          <input name="nameMember1" placeholder="Nome do Membro 1" onChange={(e) => {
          atribuirDados(e);
        }}/>
          <ChoiceClass membro={'member1'} atribuirDados={atribuirDados}/>
          <input name="nameMember2" placeholder="Nome do Membro 2" onChange={(e) => {
          atribuirDados(e);
        }}/>
          <ChoiceClass membro={'member2'} atribuirDados={atribuirDados}/>
          <input name="nameMember3" placeholder="Nome do Membro 3" onChange={(e) => {
          atribuirDados(e);
        }}/>
          <ChoiceClass membro={'member3'} atribuirDados={atribuirDados}/>
          <button onClick={(e)=>{submitForm(e)}}>{loadingRegisterTeam?<ThreeDots color="steelblue"/>:'Enviar' }</button>
        </FormTeam>
      </Container>
    );
  }
  
export default Register;


function ChoiceClass({membro, atribuirDados}){
  const classes = [
    { 
      class:'WR',
      img:'https://cdn.streamelements.com/uploads/99238d91-e417-43cc-94d9-ac0019df8e9b.png', 
      mvp:'https://cdn.streamelements.com/uploads/29fa8ec8-4893-49d8-8636-a605e993de83.png'
    },{ 
      class:'MG',
      img:'https://cdn.streamelements.com/uploads/cf46a848-59b0-4874-9c8f-3f54d5fa4869.png', 
      mvp:'https://cdn.streamelements.com/uploads/307d5b36-a5cb-441b-a7cd-4533e43bd943.png'
    
    },{ 
      class:'WB',
      img:'https://cdn.streamelements.com/uploads/b71925f6-331b-407d-a189-100cde62690c.png',
      mvp:'https://cdn.streamelements.com/uploads/bd2d2b4c-a262-473d-9490-76c22ae029b6.png'
    
    },{ 
      class:'WF',
      img:'https://cdn.streamelements.com/uploads/50a2548d-1a28-4fff-8283-5c303dab29a6.png', 
      mvp: 'https://cdn.streamelements.com/uploads/ec3ef2a3-0214-440b-91fb-e312f9242f9f.png'
  
    },{ 
      class:'EA',
      img:'https://cdn.streamelements.com/uploads/694f39a6-a4d0-4620-bc24-1086df594d55.png', 
    mvp: 'https://cdn.streamelements.com/uploads/e710a111-b450-4e35-a1bf-9f80d6fbcb58.png'
  
    },{ 
      class:'EP',
      img:'https://cdn.streamelements.com/uploads/22ba17e8-2f61-41cc-b7b0-53b4197021df.png',
    mvp:'https://cdn.streamelements.com/uploads/3c3d42b9-f08a-45b1-aae3-26113df64bc9.png'
    
    },
    ]
  
  const choice = <ClassContainer>{classes.map((classe, index) =>{

    return <ClasseBox>
        <img src={classe.img} alt={classe.class} />
        <input name={membro} type="radio" value={classe.class} onChange={(e) => {
          atribuirDados(e);
        }}/>
      </ClasseBox>

  })}</ClassContainer>


  return choice

}

const ClassContainer = styled.div`
  width: 100%;
  justify-content: space-between;
`

const ClasseBox = styled.div`
    position:relative;

  img{
    border-radius: 50%;
    border: 2px solid rgb(255,179,0);
  }

  input{
    opacity:0;
    position:absolute;
    z-index:1;
    cursor:pointer;

  }

  input:checked {
    display:grid;
    opacity: 0.4;
    color:blue;
    fill: rgb(239, 42, 16);
  }

`

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    background-color:steelblue;

`

const FormTeam = styled(Form)`
  background-color: rgba(255, 255, 255, 0.5);
  div{
    display:flex
  }
  h3{
    color:white;
  }

  button{
    background-color: rgb(0, 135, 255);
    border:none;
    cursor: pointer;
    color: #fff;
    font-weight:900;
    font-size: larger;
    
  }
  button:hover{
      filter:brightness(1.4);
  }


`