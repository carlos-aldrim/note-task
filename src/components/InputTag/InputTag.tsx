import React from "react";
import { Container, TagSumary, Partion } from "./InputTag.styles";
import { TextField } from "../TextField";

interface InputTagProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  onKeyDown?: (event: any) => void;
  children?: React.ReactNode;
  disabled?: boolean;
};

export const InputTag: React.FC<InputTagProps> = ({
  onChange,
  value,
  onKeyDown,
  children,
  disabled,
}) => {

  return (
    <Container>
      <TagSumary>
        {children}
      </TagSumary>
      <Partion/>
      <TextField disabled={disabled} onKeyDown={onKeyDown} value={value} onChange={onChange} label="Tag(s)"/>
    </Container>
  );
};