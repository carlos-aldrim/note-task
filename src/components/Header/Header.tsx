import React from "react";
import { Container, LabelText } from "./Header.styles";
import NoteIcon from "@mui/icons-material/StickyNote2";
import { useNavigate } from "react-router-dom";

export const Header: React.FC = () => {
  const navigate = useNavigate();

  const onClickHomeButton = () => {
    navigate("/");
  };

  return (
    <Container onClick={onClickHomeButton}>
      <NoteIcon/>
      <LabelText>Bloco de Notas</LabelText>
    </Container>
  );
};