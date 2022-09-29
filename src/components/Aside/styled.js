import styled from "styled-components";


export const Container = styled.div`
    width:230px;
    height: 100vh;
    background-color: #222d32;
    display: flex;
    flex-direction: column;
    color: white;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 50px;
    box-shadow: 0px 2px 2px -2px #fff; 

    .barra{
        background-color: #1a2226;
        height: 37px;
        width: 100%;
        padding: 10px 25px 10px 15px;
        font-family: 'Source Sans Pro','Helvetica Neue',Helvetica,Arial,sans-serif;
        font-weight: 400;
        font-size: 12px;
        color: #4b646f;
    }


    @media (max-width:900px){
        display: none;
    };
`

export const Option = styled.div`
    width: 230px;
    height: 44px;
    display: flex;
    align-items: center;
    padding:0 25px;
    background-color: #1e282c;
    font-weight: 400;
    gap: 3px;
    cursor: pointer;
    &:hover{
        color: #4ea8de;
    }
`


