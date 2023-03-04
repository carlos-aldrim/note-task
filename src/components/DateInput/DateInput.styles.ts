import { TextField } from "@mui/material";
import { styled } from "@mui/system";

export const Input = styled(TextField)({
  cursor: "text",
  margin: "0.25em",
  width: "100%",
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
  "& div": {
    width: "100%",
    height: "auto",
    color: "#696969",
    fontSize: "calc(0.5rem + 0.5vw)",
    zIndex: 10,
  },
  "& input[type=date]": {
    cursor: "text",
    color: "#696969",
    "&:focus": {
      color: "#463497",
    },
  },
  "& input[type=date]::-webkit-calendar-picker-indicator": {
    cursor: "pointer",
    opacity: 0.5,
  },
  "& input": {
    zIndex: 10,
    padding: "20px 32px 14px 18px",
    color: "#463497",
  },
  "& label": {
    zIndex: 15,
    fontSize: "calc(0.5rem + 0.5vw)",
    color: "#AEAEAE",
    padding: "15px 0px 0px 5px",
    "&.Mui-focused": {
      color: "#463497",
    },
  },
});