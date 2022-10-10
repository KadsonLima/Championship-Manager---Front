import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { BoxTable, Container, Loading } from ".";
import Page from "../../components/Page/Page";
import { TokenContext } from "../../contexts/tokenContext";
import useGetJobById from "../../hooks/api/getJobById";
import { RotatingLines } from "react-loader-spinner";

export const JobId = () => {
  const { id } = useParams();
  const { header } = useContext(TokenContext);
  const { job, jobError, loadingJobs, getJob } = useGetJobById();

  useEffect(() => {
    getJob(id, header);

    if (jobError) {
      alert("Error por favor relogue");
    }
  }, []);

  return (
    <Page>
      <Container>
          <JobDetail loadingJobs={loadingJobs} jobs={job} />
      </Container>
    </Page>
  );
};

const JobDetail = ({ loadingJobs, jobs }) => {
 
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
  console.log(job)

  const jobData = job && (
    <JobData>
      <h3>{job.name}</h3>
      <p>{job.description}</p>
      <Tags>{job.tags.map((tag)=>{return <p>{tag.tags.name}</p>})}</Tags>
      <Tags>{job.experience.map((exp)=>{return <p>{exp.experience.name}</p>})}</Tags>
        <LinkSubscribe to={`/register/${job.link}`}>{`jobManager.com/${job.link}`}</LinkSubscribe>

    </JobData>
  );


  const camps = (<>
    {jobData}
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Número</th>
          <th>E-Mail</th>
        </tr>
      </thead>
      <tbody>
        {candidates?.map((candidate, index) => {
          return (
            <tr key={index}>
              <td>{candidate.candidate.name}</td>
              <td>{candidate.candidate.numberContact}</td>
              <td>{candidate.candidate.email}</td>
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
