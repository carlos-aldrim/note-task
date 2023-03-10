import React from "react";
import { AddProject, Menu, Icon, MiddleDivider, ProjectSumary, AddButton } from "./Aside.styles";
import { TextField } from "../TextField";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForward from "@mui/icons-material/ArrowForward";

interface AsideProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  onKeyDown?: (event: any) => void;
  onClickRemove?: () => void;
  onClickAdd?: () => void;
  children?: React.ReactNode;
  label?: string;
  disabled?: boolean;
};

export const Aside: React.FC<AsideProps> = ({
  onChange,
  value,
  onKeyDown,
  onClickRemove,
  children,
  label,
  onClickAdd,
  disabled
}) => {

  return (
    <Menu>
      <AddProject>
        <TextField
          label={label}
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={value}
          endAdornment={<Icon onClick={onClickRemove}><CloseIcon/></Icon>}
        />
        <AddButton onClick={onClickAdd} disabled={disabled}>
          <ArrowForward/>
        </AddButton>
      </AddProject>
      <ProjectSumary>
        <MiddleDivider/>
        {children}
      </ProjectSumary>
    </Menu>
  );
};