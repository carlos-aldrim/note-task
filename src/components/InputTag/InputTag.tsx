import React from "react";
import { Container, TagSumary, Partion, Icon } from "./InputTag.styles";
import { TextField } from "../TextField";
import AddIcon from "@mui/icons-material/Add";

interface InputTagProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  onKeyDown?: (event: any) => void;
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
};

export const InputTag: React.FC<InputTagProps> = ({
  onChange,
  value,
  onKeyDown,
  children,
  disabled,
  onClick
}) => {

  return (
    <Container>
      <TagSumary>
        {children}
      </TagSumary>
      <Partion/>
      <TextField endAdornment={<Icon onClick={onClick}><AddIcon/></Icon>} disabled={disabled} onKeyDown={onKeyDown} value={value} onChange={onChange} label="Tag(s)"/>
    </Container>
  );
};