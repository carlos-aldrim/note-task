import { Divider, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const Menu = styled("div")({
  position: "sticky",
  zIndex: 1,
  top: "70px",
  width: "15%",
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
  fontFamily: "Roboto",
  fontSize: "calc(0.5rem + 0.75vw)",
  fontWeight: 400,
  lineHeight: "130%",
  color: "#AEAEAE",
  cursor: "pointer",
});

export const Icon = styled(IconButton)({
  padding: 0,
  margin: "0px -25px 0px 5px",
});