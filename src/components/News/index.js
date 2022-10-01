import { useEffect, useState } from "react";
import styled from "styled-components";
import { AddNew } from "./addNew";

const newObjs = [
  {
    data: "Dia 12/05",
    new: "Atualmente, a estilização de barras para o Firefox está disponível com as novas CSS Scrollbars.",
  },
  {
    data: "Dia 12/05",
    new: "Infelizmente, essa especificação foi oficialmente abandonada pela W3C e provavelmente será descontinuada ao longo do tempo.",
  },
  {
    data: "Dia 12/05",
    new: "Atualmente, a estilização de barras de rolagem para o Chrome, Edge e o Safari está disponível com o pseudoelemento do prefixo de fabricante -webkit-scrollbar.",
  },
  {
    data: "Dia 12/05",
    new: "Neste tutorial, você irá aprender a como usar o CSS para personalizar barras de rolagem para dar suporte a navegadores modernos.",
  },
  {
    data: "Dia 12/05",
    new: "Desde 2020, 96% dos usuários da internet já estão utilizando navegadores que suportam a estilização da barra de rolagem do CSS. No entanto, você precisará escrever dois conjuntos de regras CSS para cobrir o Blink e WebKit, bem como os navegadores Firefox.",
  },
  {
    data: "Dia 12/05",
    new: "Want to learn more? Join the DigitalOcean Community!Join our DigitalOcean community of over a million developers for free! Get help and share knowledge in our Questions & Answers section, find tutorials and tools that will help you grow as a developer and scale your project or business, and subscribe to topics of interest.",
  },
];

function News() {
  useEffect(() => {}, []);

  const news = newObjs.map((noticia, index) => {
    return (
      <New key={index}>
        <h2>{noticia.data}</h2>
        <p>{noticia.new}</p>
      </New>
    );
  });

  return (
    <Home>
      <Container>
        <Title>Avisos</Title>
        <BoxWidget>{news}</BoxWidget>
      </Container>
      <AddNew/>
    </Home>
  );
}

export { News };

const Home = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const BoxWidget = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color:#00000045;
  overflow-y: scroll;
  border: 8px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.71);


`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  gap: 5px;
  width: 100%;
  height: 50%;
`;

const Title = styled.h3`
  font-size: large;
  font-weight: 900;
`;

const New = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 30%;
  margin-bottom: 2px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  padding: 3px 5px;
  background-color: #FFFFFF;
  h2 {
    font-size: medium;
    font-weight: 700;
    margin-top: 3px;
  }
  p {
    overflow-y: hidden;
    text-overflow: ellipsis;
    font-size: small;
    padding: 0 10px;
  }
`;
