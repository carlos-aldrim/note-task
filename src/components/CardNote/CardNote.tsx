import React from "react";
import { DeleteButton, Note, NoteDetails, TextLabel } from "./CardNote.styles";
import CloseIcon from "@mui/icons-material/Close";

interface CardNoteProps {
  title?: string;
  startDate?: string;
  dueDate?: string;
  onClick?: () => void;
};

export const CardNote: React.FC<CardNoteProps> = ({
  title,
  startDate,
  dueDate,
  onClick,
}) => {
  const newStartDate = startDate?.split("-").reverse().join("/");
  const newDueDate = dueDate?.split("-").reverse().join("/");

  return (
    <Note>
      <NoteDetails>
        <TextLabel>{title}</TextLabel>
        <TextLabel>{newStartDate}{newDueDate === "" ? newDueDate : " - " + newDueDate}</TextLabel>
      </NoteDetails>
      <DeleteButton onClick={onClick}>
        <CloseIcon/>
      </DeleteButton>
    </Note>
  );
};