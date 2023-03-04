import React from "react";
import { TagItem } from "./Tag.styles";

interface TagProps {
  label?: string;
  onDelete?: (tag: string) => void;
};

export const Tag: React.FC<TagProps> = ({
  label,
  onDelete,
}) => {

  return (
    <TagItem size="small" onDelete={onDelete} label={label}/>
  );
};