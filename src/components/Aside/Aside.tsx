import React from "react";
import { AddProject, Menu, Icon, MiddleDivider, ProjectSumary } from "./Aside.styles";
import { TextField } from "../TextField";
import CloseIcon from "@mui/icons-material/Close";

interface AsideProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  onKeyDown?: (event: any) => void;
  onClickRemove?: () => void;
  children?: React.ReactNode;
  label?: string;
};

export const Aside: React.FC<AsideProps> = ({
  onChange,
  value,
  onKeyDown,
  onClickRemove,
  children,
  label,
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
      </AddProject>
      <ProjectSumary>
        <MiddleDivider/>
        {children}
      </ProjectSumary>
    </Menu>
  );
};