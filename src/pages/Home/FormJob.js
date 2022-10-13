import { useState } from "react";
import styled from "styled-components";
import { Form } from "../../components/Form";
import { SetTags } from "../../components/setTags";
import { Button } from '@mui/material'
import useAsync from "../../hooks/useAsync";
import { postJob } from "../../services/jobs";
import { RotatingLines } from "react-loader-spinner";

export const FormJob = ({ tags, exps , setJobCreate, header}) => {
  const [exp, setExp] = useState([]);
  const [tag, setTag] = useState([]);
  const [form, setForm] = useState({});
  const {
    data: response,
    loading,
    error,
    act:sendJob,
  } = useAsync(postJob, false);

  function atribuirDados(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function createJob(e){
    const body = {
        name:form.name,
        description:form.description,
        tags:tag,
        exps:exp
    }

    console.log(body)
    sendJob(body, header)
  }

  const loadingTime = loading ? (
    <RotatingLines
      strokeColor="white"
      strokeWidth="5"
      width="20"
      visible={true}
    />
  ) : (
    "Enviar"
  );

  return (
    <Container>
        <FormTeam>
          <span>Criar Vaga</span>
          <input
            name="name"
            placeholder="Nome da Vaga"
            onChange={(e) => {
              atribuirDados(e);
            }}
          />
          <textarea
            name="description"
            placeholder="Descrição da Vaga"
            onChange={(e) => {
              atribuirDados(e);
            }}
          />
          <Option>
            <span>Tecnologias</span>
            <SetTags tags={tags} setTag={setTag} />
          </Option>
          <Option>
            <span>Experiencia</span>
            <SetTags tags={exps} setTag={setExp} />

          </Option>
          <Button
            variant="contained"
            onClick={(e) => {
              createJob(e);
            }}
          >
            {loadingTime}
          </Button>
          <Button
            className="delete"
            variant="contained"
            color="error"
            onClick={() => {
                setJobCreate(false);
            }}
          >
            X
          </Button>
        </FormTeam>

    </Container>
  );
};

const Option = styled.div`
    flex-direction: column;
    display: flex;
    width: 100%;
    gap: 4px;
    padding: 10px;
    border-top: 1px solid #8f8f9d;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.75);
`;

const FormTeam = styled(Form)`
  border: 1px solid rgb(204, 204, 204);
  background-color: white;

  border-radius: 4px;
  color: black;
  div {
    display: flex;
  }
  position: relative;
  .delete{
    width: 30px;
    height: 8px;
    min-height: 30px;
    position:absolute;
    padding: 0;
    right: 5px;
    top:5px; 
  }
  
  @media (max-width:750px){
        width: 100%;
        height:100%;
    };
`;
