import React, { useContext, useEffect } from "react";
import { Button, Stack } from "@mui/material";
import styled from "styled-components";
import { FormJob } from "../../components/FormJob";
import { TokenContext } from "../../contexts/tokenContext";
import useGetCandidates from "../../hooks/api/getCandidates";
import { CandidatesList } from "./Candidates";
import Page from "../../components/Page/Page";

function Home() {
  const { jobs, jobError, getJobs, loadingJobs } = useGetCandidates();
  const { header, token , modalIsOpen, setIsOpen } = useContext(TokenContext);
  useEffect(() => {
  
    if (token){
       getJobs(header);
      }

    if (jobError) {
      alert("Error por favor relogue");
    }
  }, [token]);


  return (
    <Page>
      <CandidatesList loadingJobs={loadingJobs} jobs={jobs} />
      <Stack direction="row" spacing={2}>
      <Button variant="contained"  onClick={()=>setIsOpen(true)}>Enviar Curriculo</Button>
      <Button variant="contained">Enviar Vaga</Button>

      </Stack>
      <FormJob header={header}/>
    </Page>
  );
}

export default Home;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
