import styled from "styled-components";


export const Container = styled.div`
    width:100%;
    height: 50px;
    background-color: #4361ee;
    display: flex;
    color: white;
    position: fixed;
    left: 0;
    top: 0;
    box-shadow: 0px 2px 2px -2px #fff; 



   
`

export const Title = styled.div`
    width:230px;
    display: flex;
    background-color: #3a0ca3;
    align-items: center;
    justify-content: center;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    font-weight: 700;

    @media (max-width:900px){
        display: none;
    };
`   

export const Head = styled.div`
    width: calc(100% - 230px);
    display: flex;
    align-items: center;
    justify-content: end;
    padding: 0 10px;
    position: relative;
    svg{
        
    }
    div{
        
        height: 15px;
        img{
            width: 30px;
            height: 30px;
        }
    }

    @media (max-width:900px){
        width: 100%;
    };
`
