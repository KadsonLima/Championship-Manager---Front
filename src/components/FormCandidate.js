import { useState, useEffect, useRef, useContext } from "react";
import { Button } from "@mui/material";
import useAsync from "../hooks/useAsync";
import { RotatingLines } from "react-loader-spinner";
import { postCandidate } from "../services/jobs";
import styled from "styled-components";
import { Form } from "./Form";
import Modal from "react-modal";
import { TokenContext } from "../contexts/tokenContext";

export const FormCandidate = ({ header }) => {
  const { modalIsOpen, setIsOpen } = useContext(TokenContext);
  const [form, setForm] = useState({});
  const files = useRef(null);
  const {
    data: response,
    loading,
    error,
    act,
  } = useAsync(postCandidate, false);

  useEffect(() => {
    if (error) {
      alert(error.response.data);
    }
  }, [error]);

  function atribuirDados(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  const sendFile = async (event) => {
    event.preventDefault();
    const dataForm = new FormData();
    for (const file of files.current.files) {
      dataForm.append("curriculum", file);
    }
    dataForm.append("name", form.name);
    dataForm.append("email", form.email);

    act(dataForm, header).then((e) => {
      setIsOpen(false);
    });
  };

  const loadingTime = loading ? (
    <RotatingLines
      strokeColor="white"
      strokeWidth="5"
      width="20"
      visible={true}
    />
  ) : (
    "Enviar"
  );

  return (
    <Modal
      isOpen={modalIsOpen}
      // onRequestClose={closeModal}
      ariaHideApp={false}
      style={customStyles}
    >
      <Container>
        <FormTeam>
          <span>Cadastrar Curriculo</span>
          <input
            name="name"
            placeholder="Nome Completo"
            onChange={(e) => {
              atribuirDados(e);
            }}
          />

          <input
            name="email"
            placeholder="Email"
            onChange={(e) => {
              atribuirDados(e);
            }}
          />
          <input type="file" accept="application/pdf" ref={files} />
          <Button
            variant="contained"
            onClick={(e) => {
              sendFile(e);
            }}
          >
            {loadingTime}
          </Button>
          <Button className="delete" variant="contained" color="error" onClick={() =>{
              setIsOpen(false);
            }}>
            X
          </Button>
        </FormTeam>
      </Container>
    </Modal>
  );
};

const FormTeam = styled(Form)`
  background-color: rgba(255, 255, 255, 0.5);
  color: black;
  div {
    display: flex;
  }
  position: relative;
  .delete{
    width: 5px;
    min-width: 15px;
    height: 8px;
    min-height: 32px;
    position:absolute;
    right: 0;
    top:0; 
  }
`;
const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    fontSize: "20px",
    zIndex: "1",
  },
};
