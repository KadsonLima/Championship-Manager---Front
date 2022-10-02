import { useContext } from "react";
import styled from "styled-components";
import { TokenContext } from "../contexts/tokenContext";

export default function User(){
    const {token} = useContext(TokenContext)
    return (
        <Container>
        <img alt="foto" src="https://png.pngtree.com/png-vector/20220616/ourmid/pngtree-champion-medal-icon-flat-vector-png-image_5091054.png"></img>
        <div>
          <span>{token?.name}</span>
          <span><img alt="clan" src="https://theclassicpw.com/assets/img/528_cla.png"/>Staff</span>
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
            align-items: end;
            font-size: 10px;
            gap: 4px;
            img{
                width: 14px;
                height: 14px;
            }
        }
    }
`