import React from "react";
import { DateLabel, ButtonsNote, Note, NoteDetails, TextLabel } from "./CardNote.styles";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";

interface CardNoteProps {
  title?: string;
  startDate?: string;
  dueDate?: string;
  onClickRemove?: () => void;
  onClickEdit?: () => void;
  onClick?: () => void;
};

export const CardNote: React.FC<CardNoteProps> = ({
  title,
  startDate,
  dueDate,
  onClickRemove,
  onClickEdit,
  onClick,
}) => {
  const newStartDate = startDate?.split("-").reverse().join("/");
  const newDueDate = dueDate?.split("-").reverse().join("/");

  return (
    <Note>
      <NoteDetails onClick={onClick}>
        <TextLabel>{title}</TextLabel>
        <DateLabel>{newStartDate}{newDueDate === "" ? newDueDate : " - " + newDueDate}</DateLabel>
      </NoteDetails>
      <ButtonsNote>
        <EditIcon onClick={onClickEdit}/>
        <CloseIcon onClick={onClickRemove}/>
      </ButtonsNote>
    </Note>
  );
};