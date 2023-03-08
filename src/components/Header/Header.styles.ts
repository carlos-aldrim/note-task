import { styled } from "@mui/system";
import { Typography } from "@mui/material";

export const Container = styled("div")({
  position: "fixed",
  zIndex: 100,
  top: 0,
  left: 0,
  width: "100%",
  height: "56px",
  backgroundColor: "#463497",
  padding: "0px 1.5em",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  "& svg": {
    color: "#FFFFFF",
    width: "auto",
    height: "75%",
  },
});

export const LabelText = styled(Typography)({
  marginLeft: "10px",
  fontSize: "calc(1rem + 0.5vw)",
  color: "#FFFFFF",
  fontWeight: 700,
});