import { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "../../components/Button";
import useGetChampionship from "../../hooks/api/getChampionship";
import {RotatingLines} from 'react-loader-spinner';
import {Link} from 'react-router-dom';

function AllCamp() {
  const {championship, championshipError, getChampionship, loadingChampionship} = useGetChampionship();
  const [camp, setCamp] = useState(false)
  useEffect(()=>{
    getChampionship();

    if(championshipError){
      alert('Error por favor relogue')
    }


  }, [])

  


  return <Campeonato loadingChampionship={loadingChampionship} championship={championship}/>
}

const Campeonato = ({loadingChampionship, championship}) =>{
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
    <Container>
      <Title>Todos os Campeonatos</Title>
        {camps}
      <ButtonCreate>Criar Campeonato</ButtonCreate>
    </Container>
  );
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
  width: 200px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
