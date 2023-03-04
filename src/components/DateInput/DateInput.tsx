import React from "react";
import { Input } from "./DateInput.styles";

interface DateInputProps {
  name?: string;
  label?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
};

export const DateInput: React.FC<DateInputProps> = ({
  name,
  label,
  value,
  onChange,
  required,
  disabled,
}) => {

  return (
    <Input
      type="date"
      name={name}
      label={label}
      onChange={onChange}
      value={value}
      required={required}
      InputLabelProps={{
        shrink: true,
      }}
      disabled={disabled}
    />
  );
};