import styled from "styled-components";
import {BsFillPeopleFill, BsGem} from 'react-icons/bs';
import {TbHammer, TbMessages, TbHome, TbBriefcase} from 'react-icons/tb';
import {AiOutlineTrophy} from 'react-icons/ai';
import {Link} from 'react-router-dom';


const options = [
    {option:<TbHome/>, tipo:'Inicio', a:'/home'},
    {option:<TbBriefcase/>, tipo:'Vagas', a:'/jobs'},
    {option:<TbMessages/>, tipo:'Notícias', a:'/news'},
    {option:<TbHammer/>, tipo:'War', a:'/war'}
]

function Options() {

    const allOptions = options.map((option, index)=>{
        return (
            <Option key={index}>
            <Link to={option.a}>
                {option.option}
                <p>{option.tipo}</p>
            </Link>
            </Option>
        )
    })

  return (
    <>
      {allOptions}
    </>
  );
}


export default Options;

export const Option = styled.div`
    

    a{  
        width: 230px;
        height: 44px;
        display: flex;
        align-items: center;
        padding:0 25px;
        background-color: #1e282c;
        font-weight: 400;
        gap: 3px;
        cursor: pointer;
        text-decoration: none;
        display: flex;
        color: #fff;

        &:hover{
        color: #4ea8de;
        }

    }

    
`