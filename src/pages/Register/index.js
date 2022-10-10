import { useState , useEffect, useRef} from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Form } from "../../components/Form";
import useRegisterTeam from "../../hooks/api/registerTeam";
import { Loading } from "../Jobs";
import { RotatingLines } from "react-loader-spinner";
import useGetJobByRegister from "../../hooks/api/getJobRegister";



function Register() {
  const { loadingRegisterTeam, registerTeam, registerTeamError } = useRegisterTeam();
  const {link} = useParams()
  const [form, setForm] = useState({});
  const files = useRef(null)
  const { job, jobError, loadingJobs, getJob } = useGetJobByRegister();
  useEffect(()=>{
    if(registerTeamError){
      alert(registerTeamError.response.data)
    }
    getJob(link)

  }, [registerTeamError])


  function atribuirDados(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  const sendFile = async (event) => {
    event.preventDefault();
    const dataForm = new FormData();
    for (const file of files.current.files) {
      dataForm.append('curriculum', file);
    }
    dataForm.append('name', form.name);
    dataForm.append('email', form.email);
    dataForm.append('numberContact', form.numberContact);

    registerTeam(dataForm, link)

  };

    return (
      <Container>
        <FormTeam>
        <JobDescription job={job} loadingJobs={loadingJobs}/>
        <span>Candidatar-se</span>
          <input name="name" placeholder="Nome Completo" onChange={(e) => {
          atribuirDados(e);
        }}/>
          <input name="numberContact"  placeholder="Numero de Contato" onChange={(e) => {
          atribuirDados(e);
        }}/>
          <input name="email" placeholder="Email" onChange={(e) => {
          atribuirDados(e);
        }}/>
        <input type="file" accept="application/pdf" ref={files}/>
          <button onClick={(e)=>{sendFile(e)}}>{loadingRegisterTeam?<RotatingLines color="steelblue"/>:'Enviar' }</button>
        </FormTeam>
      </Container>
    );
  }

  function JobDescription({job, loadingJobs}){

    if (loadingJobs || !job) {
      return (
        <Loading>
          <RotatingLines
            strokeColor="steelblue"
            strokeWidth="5"
            width="96"
            visible={true}
          />
        </Loading>
      );
    }

    return (
      <BoxTable>
      <JobData>
      <h3>{job.name}</h3>
      <p>{job.description}</p>
      <Tags>{job.tags.map((tag, index)=>{return <p key={index}>{tag.tags.name}</p>})}</Tags>
      <Tags>{job.experience.map((exp, index)=>{return <p key={index}>{exp.experience.name}</p>})}</Tags>
      <p>Candidatura : {job.active?"Aberto": "Fechado"}</p>
    </JobData></BoxTable>
    )
  }
  
export default Register;

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    background-color:steelblue;

`
const BoxTable = styled.div`
max-width: 900px;
width: 100%;
background-color:#ffffff;
padding: 20px 0;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.71);

h3{
  font-weight: 500;
font-size: large;
margin-bottom: 20px;
margin-left:20px;

}
`;

const FormTeam = styled(Form)`
  background-color: rgba(255, 255, 255, 0.5);
  color:black;
  div{
    display:flex
  }

  button{
    background-color: rgb(0, 135, 255);
    border:none;
    cursor: pointer;
    color: #fff;
    font-weight:900;
    font-size: larger;
    
  }
  button:hover{
      filter:brightness(1.4);
  }


`

const JobData = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  button{
    width:200px
  }
  h3 {
    margin: 10px 0;
    color: #0e1012;
    font-size: xx-large;
  }

  p{
    color: #0e1012;
  }
`;

const Tags = styled.div`
  display: flex;
  gap:5px;
  margin-bottom:3px;

  p {
    font-size: smaller;
    box-sizing: content-box;
    padding: 2px 4px;
    border: 1px solid gray;
    display:flex;
    align-items:center;
    color:#0e1012;
  }
`;

