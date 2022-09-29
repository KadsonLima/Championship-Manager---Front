import { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "../../components/Button";

function AllCamp() {

  const [camp, setCamp] = useState(false)


  return (
    <Container>
      <Title>Todos os Campeonatos</Title>
      <Camp>CAMP 4x4 | TIMES INSCRITOS : 34</Camp>
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
const Camp = styled.div`
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
