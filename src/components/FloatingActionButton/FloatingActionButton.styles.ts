import { styled } from "@mui/system";
import { Fab } from "@mui/material";

export const Button = styled(Fab)({
  minWidth: "2.5em",
  minHeight: "2.5em",
  maxWidth: "3em",
  maxHeight: "3em",
  backgroundColor: "#463497",
  "&:hover": {
    backgroundColor: "#463497",
    opacity: 0.9,
  },
  "& svg": {
    width: "1em",
    height: "1em",
    color: "#EBEBEB",
  },
});