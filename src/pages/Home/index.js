import React, { useContext, useEffect, useState } from "react";
import { Button, Stack } from "@mui/material";
import { FormCandidate } from "../../components/FormCandidate";
import { TokenContext } from "../../contexts/tokenContext";
import useGetCandidates from "../../hooks/api/getCandidates";
import { CandidatesList } from "./Candidates";
import Page from "../../components/Page/Page";
import { FormJob } from "./FormJob";

function Home() {
  const { jobs, jobError, getJobs, loadingJobs } = useGetCandidates();
  const { header, token, setIsOpen } = useContext(TokenContext);
  const [createJob, setJobCreate] = useState(false);

  useEffect(() => {
    if (token) {
      getJobs(header);
    }
    if (jobError) {
      alert("Error por favor relogue");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <Page>
      <CandidatesList loadingJobs={loadingJobs} jobs={jobs?.candidates} />
      <Stack direction="row" spacing={2}>
        <Button variant="contained" onClick={() => setIsOpen(true)}>
          Enviar Curriculo
        </Button>
        <Button variant="contained" onClick={() => setJobCreate(true)}>Enviar Vaga</Button>
      </Stack>
      <FormCandidate header={header} tags={jobs?.tags} />
      {createJob&&<FormJob header={header} tags={jobs?.tags} exps={jobs?.exps} setJobCreate={setJobCreate}/>}
    </Page>
  );
}

export default Home;
