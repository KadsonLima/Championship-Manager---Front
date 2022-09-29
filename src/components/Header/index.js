import React from 'react';
import {Container, Title, Head} from './styled';
import User from '../../utils/User'
import {AiOutlineMenu} from 'react-icons/ai'


function Header() {
    

    return(
        
        <Container>
            <Title>Championship Manager</Title>
            <Head>
                <User/>
            </Head>
        </Container>
    )

}

export default Header;