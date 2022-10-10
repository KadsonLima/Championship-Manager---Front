import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { BoxTable, Container, Loading } from ".";
import Page from "../../components/Page/Page";
import { TokenContext } from "../../contexts/tokenContext";
import useGetJobById from "../../hooks/api/getJobById";
import { RotatingLines } from "react-loader-spinner";
import api from '../../services/api'

export const JobId = () => {
  const { id } = useParams();
  const { job, jobError, loadingJobs, getJob } = useGetJobById();
  const { header , token} = useContext(TokenContext);
  const {refresh, setRefresh} = useState(0);

  useEffect(() => {
    if(token)getJob(id, header);
    

    if (jobError) {
      alert("Error por favor relogue");
    }
  }, [token]);

  return (
    <Page>
      <Container>
          <JobDetail loadingJobs={loadingJobs} jobs={job} header={header} setRefresh={setRefresh}/>
      </Container>
    </Page>
  );
};

const JobDetail = ({ loadingJobs, jobs , header, setRefresh}) => {
 
  if (loadingJobs || !jobs) {
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
  const {job, candidates} = jobs
  
  function  closeCandidature(job){

      api.put(`/jobs/${job.id}`, {}, header).then((e)=>{
        setRefresh(e.data.id)
      })
    
  }

  const jobData = job && (
    <JobData>
      <h3>{job.name}</h3>
      <p>{job.description}</p>
      <Tags>{job.tags.map((tag, index)=>{return <p key={index}>{tag.tags.name}</p>})}</Tags>
      <Tags>{job.experience.map((exp, index)=>{return <p key={index}>{exp.experience.name}</p>})}</Tags>
      <p>Candidatura : {job.active?"Aberto": "Fechado"}</p>
      <button onClick={()=>{closeCandidature(job)}}>{!job.active?"Abrir Candidatura": "Fechar Candidatura"}</button>
        <LinkSubscribe to={`/register/${job.link}`}>{`jobManager.com/${job.link}`}</LinkSubscribe>

    </JobData>
  );


  const camps = (<>
    {jobData}
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Curriculo</th>
        </tr>
      </thead>
      <tbody>
        {candidates?.map((candidate, index) => {
          return (
            <tr key={index}>
              <td>{candidate.candidate.name}</td>
              <td><a href={candidate.candidate.curriculum}>Curriculo</a></td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </>
  );

  return (

        <BoxTabled>
          {camps}
        </BoxTabled>
  );
};

const JobData = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  button{
    width:200px
  }
  h3 {
    margin: 0;
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

  }
`;

const BoxTabled = styled(BoxTable)`

    tr{
        display:flex;
        justify-content: space-between;
    }
    td:nth-of-type(3),th:nth-of-type(3) {
      width: 200px;
      font-size: xx-small;
    }
    
    td:nth-of-type(2),th:nth-of-type(2) {
      width: 120px;
    }

`

const LinkSubscribe = styled(Link)`
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  color: MidnightBlue;
`;
