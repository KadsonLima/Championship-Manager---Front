import React from "react";
import { Container, Option } from "./styled";
import User from "../../utils/User";
import Options from "./options/option";

function Aside() {
  return (
    <Container>
      <User />
      <div className="barra">MENU</div>
      <Options />
    </Container>
  );
}

export default Aside;
