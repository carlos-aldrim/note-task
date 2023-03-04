import { InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React from "react";
import { Form } from "./SelectionMenu.styles";

interface optionInfo {
  name: string;
  value: string;
};

interface SelectionMenuProps {
  name: string;
  value: string;
  label: string;
  onChange: (event: SelectChangeEvent) => void;
  options: optionInfo[];
  required: boolean;
};

export const SelectionMenu: React.FC<SelectionMenuProps> = ({
  name,
  value,
  label,
  onChange,
  options,
  required,
}) => {

  return (
    <Form>
      <InputLabel shrink={true}>{label}</InputLabel>
      <Select
        value={value}
        label={label}
        placeholder="Prioridade"
        onChange={onChange}
        name={name}
        required={required}
      >
        {options.map((item) => (
          <MenuItem value={item.value}>{item.name}</MenuItem>
        ))}
      </Select>
    </Form>
  );
};