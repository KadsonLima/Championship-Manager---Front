import { useContext , useEffect} from "react";
import styled from "styled-components";
import { TokenContext } from "../../contexts/tokenContext";
import useGetCandidates from "../../hooks/api/getCandidates";
import { CandidatesList } from "./Candidates";



function Home() {
  const { jobs, jobError, getJobs, loadingJobs } = useGetCandidates();
  const { header, token } = useContext(TokenContext);

  useEffect(() => {
    if(token) getJobs(header);

    if (jobError) {
      alert("Error por favor relogue");
    }
  }, [token]);

  return <CandidatesList loadingJobs={loadingJobs} jobs={jobs} />;
  }
  
export default Home;



const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;

`