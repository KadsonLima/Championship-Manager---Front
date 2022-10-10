import styled from "styled-components";
import {BsFillPeopleFill, BsGem} from 'react-icons/bs';
import {TbHammer, TbMessages, TbHome, TbBriefcase} from 'react-icons/tb';
import {AiOutlineTrophy} from 'react-icons/ai';
import { Link } from "react-router-dom";

function Footer() {
    

    return(
        
        <Container>
            <Link to="/home"><TbHome/></Link>
            <Link to="/jobs"><TbBriefcase/></Link>
            <Link to="/news"><TbMessages/></Link>
        </Container>
    )

}

export default Footer;


const Container = styled.div`
    width:100%;
    height: 50px;
    background-color: #4361ee;
    display: none;
    align-items: center;
    color: white;
    position: fixed;
    z-index: 1;
    left: 0;
    bottom: 0;
    box-shadow: 0px 2px 2px -2px #fff; 
    justify-content: space-around;
    @media (max-width: 900px) {
    margin: 0;
    width: 100%;
    display: flex;
  }

  a{
    text-decoration: none;
    font-size: x-large;
    color: white;
  }


   
`
