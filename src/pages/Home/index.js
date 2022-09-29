import styled from "styled-components";
import { News } from "../../components/News";
import Page from "../../components/Page/Page";



function Home() {
    return (
      <Page>
        <Container>
          <News/>
        </Container>
      </Page>
    );
  }
  
export default Home;



const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;

`