import React from "react";
import { TextInput } from "./TextField.styles";

interface TextFieldProps {
  name?: string;
  label?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  onKeyDown?: (event: any) => void;
  multiline?: boolean;
  rows?: number;
  minRows?: number;
  maxRows?: number;
  disabled?: boolean;
  endAdornment?: React.ReactNode;
};

export const TextField: React.FC<TextFieldProps> = ({
  name,
  label,
  value,
  onChange,
  required,
  onKeyDown,
  multiline,
  rows,
  minRows,
  maxRows,
  disabled,
  endAdornment,
}) => {

  return (
    <TextInput
      id="text-field"
      name={name}
      label= {label}
      type="text"
      value={value}
      onChange={onChange}
      required={required}
      InputLabelProps={{
        shrink: true,
      }}
      onKeyDown={onKeyDown}
      multiline={multiline}
      rows={rows}
      minRows={minRows}
      maxRows={maxRows}
      disabled={disabled}
      InputProps={{
        endAdornment,
      }}
    />
  );
};