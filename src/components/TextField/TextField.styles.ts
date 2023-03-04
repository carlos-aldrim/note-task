import { TextField } from "@mui/material";
import { styled } from "@mui/system";

export const TextInput = styled(TextField)({
  cursor: "text",
  margin: "0.25em",
  width: "calc(100% - 0.5em)",
  "& .MuiOutlinedInput-root": {
    color: "#696969",
    "& fieldset": {
      backgroundColor: "#F5F5F5",
      borderRadius: "4px",
      borderColor: "transparent",
      "&.MuiOutlinedInput-notchedOutline": {
        borderColor: "transparent",
      },
    },
    "&:hover fieldset": {
      borderColor: "transparent",
    },
    "&.Mui-focused fieldset": {
      borderColor: "transparent",
    },
  },
  "& input": {
    cursor: "text",
    zIndex: 10,
    padding: 0,
    "&:focus": {
      color: "#463497",
    },
  },
  "textarea": {
    cursor: "text",
    zIndex: 10,
    "&:focus": {
      color: "#463497",
    },
  },
  "& svg": {
    color: "#AEAEAE",
    zIndex: 10,
    width: "0.5em",
    height: "0.5em",
  },
  "& div": {
    width: "100%",
    height: "auto",
    fontSize: "calc(0.5rem + 0.5vw)",
    padding: "20px 32px 14px 18px",
  },
  "& label": {
    fontSize: "calc(0.5rem + 0.5vw)",
    color: "#AEAEAE",
    padding: "15px 0px 0px 5px",
    "&.Mui-focused": {
      color: "#463497",
    },
  },
});