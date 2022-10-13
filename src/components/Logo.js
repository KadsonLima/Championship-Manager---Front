import styled from "styled-components";
import Gray from "../assets/img/gearGray.svg";
import Yellow from "../assets/img/gearYellow.svg";
import SuitCase from "../assets/img/suitCase2.svg";

export const LogoJobManager = (size = 10) => {
  return (
    <Container>
      <img src={SuitCase} />
      <Gears>
        <img src={Yellow} />
        <img src={Gray} />
      </Gears>
      <h3 className="fix-stroke">JobManager</h3>
    </Container>
  );
};

const Gears = styled.div`
    position:relative;
    width: 132px;

    img{
      width:100px;

    }
      img:nth-child(1){
        animation: antiRotation 10s infinite linear;
        filter: drop-shadow(3px 5px 3px rgb(0 0 0 / 1));
        width: 40px;
        z-index: 1;

      }
      img:nth-child(2){
        margin-left: -29px;
        animation: rotationHorario 10s infinite linear;
      filter: drop-shadow(3px 5px 3px rgb(0 0 0 / 1));

        width: 100px;
        z-index: 0;
      }

      @keyframes rotationHorario {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(359deg);
      }
    }


    @keyframes antiRotation {
      from {
        transform: rotate(359deg);
      }
      to {
        transform: rotate(0deg);
      }
    }
`;

const Container = styled.div`
    
    font-family: 'Saira Stencil One';
    display: flex;
    align-items: center;
    position: relative;
    img{
      width: 100px;
    }

    div{
      position: absolute;
      left: 60px;
      top: -30px;
    }
    h3{
      margin-left: 57px;
      font-size: 30px;
      color: #ffd700;
      -webkit-text-stroke: 5px black;
      filter: drop-shadow(3px 3px 3px rgb(0 0 0 / 1));

    }

    .fix-stroke {
   paint-order: stroke fill;
    }


`;
