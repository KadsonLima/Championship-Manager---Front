import React from 'react';
import {Container, Title, Head} from './styled';
import User from '../../utils/User'
import styled from 'styled-components';


function Header() {
    

    return(
        
        <Container>
            <Titulo><h3 className='fix-stroke'>JobManager</h3></Titulo>
            <Head>
                <User/>
            </Head>
        </Container>
    )

}

export default Header;


const Titulo = styled(Title)`
    background-color:#5a189a;
    
    h3{
        color: #ffd700;
        font-family: 'Saira Stencil One';
      -webkit-text-stroke: 2px black;
      filter: drop-shadow(3px 3px 3px rgb(0 0 0 / 1));
      font-size: x-large;

    }

    .fix-stroke {
   paint-order: stroke fill;
    }

`
