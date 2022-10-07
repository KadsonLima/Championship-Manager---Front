import { useEffect, useState , useContext } from "react";
import Page from "../../components/Page/Page";
import styled from "styled-components";
import { RotatingLines } from "react-loader-spinner";
import { Link, useParams } from "react-router-dom";
import useGetChampionshipById from "../../hooks/api/getChampionshipById";
import { TokenContext } from "../../contexts/tokenContext";
import {races} from '../../utils/Races'

function CampId() {
  let { id } = useParams();
  const {
    championship,
    championshipError,
    getChampionship,
    loadingChampionship,
  } = useGetChampionshipById();

  const {header} = useContext(TokenContext)

  const [camp, setCamp] = useState(false);

  useEffect(() => {
    getChampionship(id, header);

    if (championshipError) {
      alert("Error por favor relogue");
    }
  }, [championshipError]);

  return (
    <Campeonato
      loadingChampionship={loadingChampionship}
      championship={championship}
    />
  );
}

const Campeonato = ({ loadingChampionship, championship }) => {
  if (loadingChampionship) {
    return (
      <Loading>
        <RotatingLines
          strokeColor="steelblue"
          strokeWidth="5"
          width="96"
          visible={true}
        />
      </Loading>
    );
  }
  
  const camps = championship?.subscribes?.map((sub, index) => {
    const {team} = sub;


    return <TeamData key={index} team={team} index={index}/>
  });


  return (
    <Page>
    <Container>
      <Title>{championship?championship.name:'Campeonato'}</Title>
      <p>Link de inscrição:</p>
      <LinkSubscribe to={`/register/${championship?.link}`}>{championship?.link}</LinkSubscribe>
      {championship&&camps}
 
    </Container>
    </Page>
  );
};


const TeamData = (team, index) =>{

  const [open, setOpen] = useState(false);
  const {nameTeam, composition, nameMember1,nameLeader, nameMember2, nameMember3} = team.team
  const {leader, member1, member2, member3} = composition
  const teamO = (!open)?(
  <Team key={index} onClick={()=>setOpen(!open)}>
    {nameTeam} 
  </Team>
  ):(
    <Team onClick={()=>setOpen(!open)}>
      <span><img src={races[leader]} alt={leader}/>{nameLeader}</span>
      <span><img src={races[member1]} alt={leader}/>{nameMember1}</span>
      <span><img src={races[member2]} alt={leader}/>{nameMember2}</span>
      <span><img src={races[member3]} alt={leader}/>{nameMember3}</span>
    </Team>
  )

  return teamO

}

export default CampId;

const Title = styled.h3`
  font-weight: 900;
  font-size: x-large;
  margin-bottom: 15px;
  margin-top: 15px;
`;

const Loading = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Team = styled.div`
  width: 100%;
  max-width: 800px;
  height: 40px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.71);
  border: 2px solid rgba(0, 0, 0, 0.71);
  text-transform: uppercase;
  margin-bottom: 10px;
  font-weight: 900;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: black;

  &:hover {
    filter: contrast(0.2);
  }

  span{
    width: 25%;
    display: flex;
    align-items: center;
    font-size: 1em;
    gap: 2px;
    img{
      width: 18%;
    }
  }
`;
const LinkSubscribe = styled(Link)`
  width: 100%;
  height: 40px;
  max-width: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  background-color: #407EC9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.71);
  cursor: pointer;
  color:#CED9E5;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
