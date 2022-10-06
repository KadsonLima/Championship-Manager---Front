import { useEffect, useState , useContext } from "react";
import Page from "../../components/Page/Page";
import styled from "styled-components";
import { Button } from "../../components/Button";
import { RotatingLines } from "react-loader-spinner";
import { Link, useParams } from "react-router-dom";
import useGetChampionshipById from "../../hooks/api/getChampionshipById";
import { TokenContext } from "../../contexts/tokenContext";

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
  }, []);

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
      {championship&&camps}
      <p>Link de inscrição:</p>
      <LinkSubscribe to={`/register/${championship?.link}`}>{championship?.link}</LinkSubscribe>
    </Container>
    </Page>
  );
};


const TeamData = (team, index) =>{

  const [open, setOpen] = useState(false);
  const teamRegister = team.team

  const teamO = (!open)?(
  <Team key={index} onClick={()=>setOpen(!open)}>
    {teamRegister.name} 
  </Team>
  ):(
    <Team onClick={()=>setOpen(!open)}>
      <span>{teamRegister.lider}</span>
      <span>{teamRegister.membro1}</span>
      <span>{teamRegister.membro2}</span>
      <span>{teamRegister.membro3}</span>
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
    text-align: center;
  }
`;
const LinkSubscribe = styled(Link)`
  width: 100%;
  height: 40px;
  max-width: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
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
