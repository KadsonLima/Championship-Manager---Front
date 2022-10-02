import styled from "styled-components";
import Aside from "../Aside/index";
import Header from "../Header/index";
import React, { useContext, useEffect } from "react";
import Footer from "../Footer";
import { TokenContext } from "../../contexts/tokenContext";
import { useNavigate } from "react-router-dom";

function Page({children}) {
    
  const navigate = useNavigate();

  const {token, header} = useContext(TokenContext);
  
  useEffect(()=>{
    if(!token){
      navigate("/")
    }
  })

  return (
    <React.Fragment>
      <Aside />
      <Header token={token}/>
      <Footer/>
      <Container>
          {children}
      </Container>
    </React.Fragment>
  );
}

export default Page;


const Container = styled.div`
  margin: 0 0 0 230px;
  padding: 60px 20px 20px 20px;
  background-color: #FFFFFF;
  width: calc(100% - 230px);
  height: 100%;
  display: flex;
  flex-direction: column;
  color: #000000;
  @media (max-width: 900px) {
    margin: 0;
    width: 100%;
  } ;
`;
