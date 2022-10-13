import styled from "styled-components";



export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  max-width: 600px;
  width: 100%;
  padding: 18px;
  button{
    height: 40px;
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  input{
    height: 40px;
    width: 100%;
    text-align: center;
    
  }
  textarea{
    width: 100%;
    padding: 5px;
    height: 80px;
  }
  h3{
    font-weight: 700;
    font-size: xx-large;
  }
  p{
    text-align:center;
    font-weight: 700;
    cursor: pointer;    
  }

  p:hover{
        filter: opacity(0.6);
    }

  @media (max-width: 800px) {
    width: 100%;


  }
`;
