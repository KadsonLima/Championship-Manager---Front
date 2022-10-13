import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import useGetJobs from "../../hooks/api/getJobs";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { TokenContext } from "../../contexts/tokenContext";
import Page from "../../components/Page/Page";
import { ChipTags } from "../../components/setTags";

function Jobs() {
  const { jobs, jobError, getJobs, loadingJobs } = useGetJobs();
  const { header , token} = useContext(TokenContext);

  useEffect(() => {
    if(token) getJobs(header);

    if (jobError) {
      alert("Error por favor relogue");
    }
  }, [token]);

  return <JobsList loadingJobs={loadingJobs} jobs={jobs} />;
}

const JobsList = ({ loadingJobs, jobs }) => {
  const [camp, setCamp] = useState(false);
  const navigate = useNavigate();
  if (loadingJobs) {
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

  const camps = (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Candidatura</th>
        </tr>
      </thead>
      <tbody>
      {jobs?.map((job, index) => {

        return (
          <tr key={index}>
            <td className="job" onClick={()=>{navigate(`/job/${job.id}`)}}>{job.name}</td>
            <td>{job.active?<ChipTags size="small" color="success" label="Aberto"/>:<ChipTags size="small" color="error"  label="Fechado"/>}</td>
          </tr>
        );
      })}
      </tbody>
    </table>
  );

  return (
    <Page>
      <Container>
        <BoxTable>
        <h3>Lista de Vagas</h3>
          {camps}
          </BoxTable>
      </Container>
    </Page>
  );
};

export default Jobs;

export const BoxTable = styled.div`
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



export const Loading = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  table{
    display:flex;
    flex-direction:column;
    align-items: space-around;
    padding: 0 20px;

    button{
      height: 25px;
      width: 100px;
      font-weight: 900;
      font-size: xx-small;
    }
    button:nth-child(1){
      margin-right: 5px;
    }

    .job{
      cursor: pointer;

    }
    .job:hover{
      filter: contrast(0.2);

     }
     tr{
        display:flex;
        justify-content: space-between;
    }

    tr{
      display: flex;
      height:30px;
      gap:10px;
    }
    td:first-child, th:first-child{
      text-align: left;
      width:250px;
      overflow-x: auto;
      white-space: nowrap;
      table-layout: fixed;
  
    }
    td:last-child{
      display: flex;
      justify-content: center;
    }
    thead tr:first-child{
      background-color: #ffffff ;
    }

    tr:nth-of-type(2n+1) {
      background-color: #f9f9f9;
    }
    td, th{
      width: 100px;
      display:flex;
      align-items:center;
      text-align: center;
    }

    thead{
      font-weight: 900;
    }
  }
`;

