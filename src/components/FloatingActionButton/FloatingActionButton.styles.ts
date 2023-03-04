import { styled } from "@mui/system";
import { Fab } from "@mui/material";

export const Button = styled(Fab)({
  minWidth: "calc(0.5rem + 0.5vw)",
  minHeight: "calc(0.5rem + 0.5vw)",
  backgroundColor: "#463497",
  "&:hover": {
    backgroundColor: "#463497",
    opacity: 0.9,
  },
  "& svg": {
    color: "#EBEBEB",
  },
});