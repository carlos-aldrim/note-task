import React from "react";
import { Container, Copyright, LabelText } from "./Footer.styles";
import CopyrightIcon from "@mui/icons-material/Copyright";

export const Footer: React.FC = () => {
  return (
    <Container>
      <Copyright>
        <CopyrightIcon/>
        <LabelText>Carlos Aldrim | Todos os Direitos Reservados</LabelText>
      </Copyright>
    </Container>
  );
};