import { RotatingLines } from "react-loader-spinner";
import styled from "styled-components";
import Page from "../../components/Page/Page";
import {Loading} from "../Jobs";
import { TbFileText } from "react-icons/tb";

export const CandidatesList = ({ loadingJobs, jobs }) => {

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
            <th>Curriculo</th>
          </tr>
        </thead>
        <tbody>
        {jobs?.map((job, index) => {
          return (
            <tr key={index}>
              <td>{job.name}</td>
              <td><a href={job.curriculum}><TbFileText/></a></td>
            </tr>
          );
        })}
        </tbody>
      </table>
    );

  
    return (
        <Container>
          <BoxTable>
          <h3>Candidaturas Recentes</h3>
            {camps}
            </BoxTable>
        </Container>
    );
  };

  
 const BoxTable = styled.div`
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
  
  
  
  
  export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
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
    
      }td:last-child{
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
  
  
