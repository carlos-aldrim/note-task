import { FormControl } from "@mui/material";
import { styled } from "@mui/system";

export const Form = styled(FormControl)({
  cursor: "text",
  margin: "0.25em",
  width: "100%",
  "& .MuiOutlinedInput-root": {
    color: "#696969",
    "& fieldset": {
      backgroundColor: "#F5F5F5",
      borderRadius: "4px",
      borderColor: "transparent",
    },
    "&:hover fieldset": {
      borderColor: "transparent",
    },
    "&.Mui-focused fieldset": {
      borderColor: "transparent",
    },
    "& div": {
      padding: "20px 32px 14px 18px",
      "&:active": {
        color: "#463497",
      },
    },
  },
  "& div": {
    cursor: "pointer",
    width: "100%",
    height: "auto",
    color: "#696969",
    fontSize: "calc(0.5rem + 0.5vw)",
    zIndex: 10,
  },
  "& svg": {
    zIndex: 10,
    color: "#AEAEAE",
  },
  "& label": {
    zIndex: 20,
    fontSize: "calc(0.5rem + 0.5vw)",
    color: "#AEAEAE",
    padding: "15px 0px 0px 2px",
    "&.Mui-focused": {
      color: "#463497",
    },
  },
  "&.MuiPaper-root": {

  },
});