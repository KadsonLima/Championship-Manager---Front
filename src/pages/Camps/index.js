import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "../../components/Button";
import useGetChampionship from "../../hooks/api/getChampionship";
import {RotatingLines} from 'react-loader-spinner';
import { Form } from "../../components/Form";
import {Link} from 'react-router-dom';
import { TokenContext } from "../../contexts/tokenContext";
import Page from "../../components/Page/Page";
import useCreateChampionship from "../../hooks/api/postChampionship";
import {ThreeDots} from 'react-loader-spinner';


function AllCamp() {
  const {championship, championshipError, getChampionship, loadingChampionship} = useGetChampionship();
  const {header} = useContext(TokenContext)
  
  useEffect(()=>{
    getChampionship(header);

    if(championshipError){
      alert('Error por favor relogue')
    }


  }, [])

  


  return <Campeonato loadingChampionship={loadingChampionship} championship={championship}/>
}

const Campeonato = ({loadingChampionship, championship}) =>{
  const [camp, setCamp] = useState(false);


  if(loadingChampionship){
    return <Loading><RotatingLines
    strokeColor="steelblue"
    strokeWidth="5"
    width="96"
    visible={true}
  /></Loading>
  }

  const camps = championship?.map((camp, index)=>{
    return (
      
      <Camp to={`/camps/${camp.id}`} key={index}>{camp.name} | TIMES INSCRITOS : {camp._count.subscribes}</Camp>
    )
  })

  return  (
    <Page>
    <Container>
      <Title>Todos os Campeonatos</Title>
        {camps}
      <CampForm camp={camp} setCamp={setCamp}>Criar Campeonato</CampForm>
    </Container>
    </Page>
  );
}

const CampForm = ({camp, setCamp}) =>{
  const { championshipError, createChampionship, loadingChampionship} = useCreateChampionship();
  const [form, setForm] = useState({})
  const {header} = useContext(TokenContext)
  
  useEffect(()=>{
    if(championshipError){
      alert(championshipError.response.data)
    }
  }, [championshipError])

  function atribuirDados(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function SubmitForm(event) {
    event.preventDefault(); 
    createChampionship(form, header)

  }

  return (

    <FormCamp>
      <input  placeholder="Nome do Campeonato" name="name" disabled={loadingChampionship} required onChange={(e) => {
          atribuirDados(e);
        }}/>
      <ButtonCreate color="green"onClick={(e)=>{SubmitForm(e)}}>{loadingChampionship?<ThreeDots color="white"/>:'Criar' }</ButtonCreate> 
    </FormCamp>

  )

}


export default AllCamp;

const Title = styled.h3`
  font-weight: 900;
  font-size: x-large;
  margin-bottom: 30px;
`;

const Loading = styled.div`
  width:100%;
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;

`

const Camp = styled(Link)`
  width: 100%;
  max-width: 600px;
  height: 40px;
  border-radius: 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.71);
  border: 2px solid rgba(0, 0, 0, 0.71);
  margin-bottom: 20px;
  font-weight: 900;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor:pointer;
  text-decoration: none;
  color: black;

  &:hover{
    color: #3a0ca3;
  }
`;
const ButtonCreate = styled(Button)`
  width: 20% !important;
  max-height: 30px;
  background-color: ${props => props.color};
  &&:hover{
    filter: contrast(0.4);
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const FormCamp = styled(Form)`
  max-width: 600px;
  flex-direction:row;
  input{
    max-height: 30px;
    width: 80%;
  }


`