import { Divider, IconButton, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";

export const Menu = styled("div")({
  position: "sticky",
  zIndex: 1,
  top: "70px",
  width: "20%",
  minWidth: "100px",
  height: "100%",
  minHeight: "100vh",
  padding: "0px 1.5em 0px 1.5em",
  marginTop: "10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const ProjectSumary = styled(Typography)({
  height: "auto",
  width: "calc(100% - (0.5em + 8px))",
  margin: "0.25em",
});

export const MiddleDivider = styled(Divider)({
  margin: "0.5em 0px 0.5em 0px",
});

export const AddProject = styled("div")({
  width: "100%",
  fontFamily: "Roboto",
  fontSize: "calc(0.5rem + 0.75vw)",
  fontWeight: 400,
  lineHeight: "130%",
  color: "#AEAEAE",
  cursor: "pointer",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

export const Icon = styled(IconButton)({
  padding: 0,
  margin: "0px -25px 0px 5px",
});

export const AddButton = styled(Button)({
  backgroundColor: "#463497",
  borderRadius: "100%",
  width: "1.5em",
  minWidth: "1.5em",
  height: "1.5em",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "& svg": {
    color: "#FFFFFF",
    width: "0.5em",
    height: "0.5em",
  },
  "&:action": {
    opacity: 0.75,
  },
});