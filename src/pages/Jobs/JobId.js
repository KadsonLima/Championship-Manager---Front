import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { BoxTable, Container, Loading } from ".";
import Page from "../../components/Page/Page";
import { TokenContext } from "../../contexts/tokenContext";
import useGetJobById from "../../hooks/api/getJobById";
import { RotatingLines } from "react-loader-spinner";
import api from "../../services/api";
import { Chip, Button } from "@mui/material";

export const JobId = () => {
  const { id } = useParams();
  const { job, jobError, loadingJobs, getJob } = useGetJobById();
  const { header, token } = useContext(TokenContext);
  const [refresh, setRefresh] = useState(null);

  useEffect(() => {
    if (token) getJob(id, header);

    if (jobError) {
      alert("Error por favor relogue");
    }

  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, refresh]);

  return (
    <Page>
      <Container>
        <JobDetail
          loadingJobs={loadingJobs}
          jobs={job}
          header={header}
          setRefresh={setRefresh}
          refresh={refresh}
        />
      </Container>
    </Page>
  );
};

const JobDetail = ({ loadingJobs, jobs, header, setRefresh, refresh }) => {
  const [loading, setLoading] = useState(false);
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
  const { job, candidates } = jobs;

  setRefresh(job.active);
  function closeCandidature(job) {
    setLoading(true);
    api.put(`/jobs/${job.id}`, {}, header).then((e) => {
      setRefresh(!refresh);
      setLoading(false);
    });
  }

  const jobData = job && (
    <JobData>
      <h3>{job.name}</h3>
      <p>{job.description}</p>
      <Tags>
        {job.tags.map((tag, index) => {
          return <Chip index={index} size="small" label={tag.tags.name} />
        })}
      </Tags>
      <Tags>
        {job.experience.map((exp, index) => {
          return <Chip index={index} size="small" label={exp.experience.name} />
        })}
      </Tags>
      <CandidateStatus>
        <div>
          Candidatura :{" "}
          {job.active ? (
            <Chip label="Aberta" size="small" color="success" />
          ) : (
            <Chip size="small" label="Fechada" color="error" />
          )}
        </div>
        {!job.active ? (
          <Button
            variant="contained"
            size="small"
            onClick={() => {
              closeCandidature(job);
            }}
          >
            {loading ? (
              <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                width="10"
                visible={true}
              />
            ) : (
              "Abrir"
            )}
          </Button>
        ) : (
          <Button
            variant="contained"
            size="small"
            color="error"
            onClick={() => {
              closeCandidature(job);
            }}
          >
            {loading ? (
              <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                width="10"
                visible={true}
              />
            ) : (
              "Fechar"
            )}
          </Button>
        )}
      </CandidateStatus>
      <LinkSubscribe
        to={`/register/${job.link}`}
      >{`jobManager.com/${job.link}`}</LinkSubscribe>
    </JobData>
  );

  const camps = (
    <>
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
                <td>
                  <a href={candidate.candidate.curriculum}>Curriculo</a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );

  return <BoxTabled>{camps}</BoxTabled>;
};
const CandidateStatus = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    overflow:visible;
  }
  button {
    padding: 3px;
  }
`;

const JobData = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;

  h3 {
    margin: 0;
  }
  p{
    width:100%;
    background-color: #ebebeb;
    padding: 5px;
    border-radius: 5px;
    font-weight: 500;
    font-size: smaller;
  }
`;

const Tags = styled.div`

  display: flex;
  gap: 5px;
  margin-bottom: 3px;

  span {
    overflow:visible;
  }
`;

const BoxTabled = styled(BoxTable)`
  tr {
    display: flex;
    justify-content: space-between;
  }
  td:nth-of-type(3),
  th:nth-of-type(3) {
    width: 200px;
    font-size: xx-small;
  }

  td:nth-of-type(2),
  th:nth-of-type(2) {
    width: 120px;
  }
`;

const LinkSubscribe = styled(Link)`
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  color: MidnightBlue;
`;
