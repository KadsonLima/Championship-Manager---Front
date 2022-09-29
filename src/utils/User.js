import styled from "styled-components";

export default function User(){

    return (
        <Container>
        <img alt="foto" src="https://media.alvanista.com/uploads/timeline_image/2017/09/14/medium_473531_2545907250.jpg"></img>
        <div>
          <span>Jose Leal</span>
          <span><img alt="clan" src="https://theclassicpw.com/assets/img/528_cla.png"/>General</span>
        </div>
      </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    height: 65px;
    gap: 15px;

    img{
        width: 45px;
        height: 45px;
        border-radius: 50%;
    }

    div{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        span:first-child{
            font-weight: 600;
        }

        span:last-child{
            display: flex;
            align-items: center;
            font-size: 10px;
            gap: 4px;
            img{
                width: 14px;
                height: 14px;
            }
        }
    }
`