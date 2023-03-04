import React from "react";
import { Button } from "./FloatingActionButton.styles";

interface FloatingActionButtonProps {
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  value?: string | number;
};

export const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  children,
  disabled,
  onClick,
  value,
}) => {

  return (
    <Button value={value} aria-label="floating-action-button" variant="circular" disabled={disabled} onClick={onClick}>
        {children}
    </Button>
  );
};