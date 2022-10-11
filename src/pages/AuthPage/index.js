import {useState} from 'react';
import styled from 'styled-components'
import SignIn from './SignIn/signIn';
import SignUp from './SignUp/signUp';

export const AuthPage = () =>{

    const [sign, setSign] = useState(true)

    return (
    
        <Container>
            {sign?<SignIn setSign={setSign} />:<SignUp setSign={setSign}/>}
        </Container>
        
    )


}

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;


`
