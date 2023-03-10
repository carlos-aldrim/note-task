import { styled } from "@mui/system";
import { Typography, IconButton } from "@mui/material";

export const Main = styled("div")({
  display: "flex",
  backgroundColor: "#EBEBEB",
  paddingTop: "70px",
});

export const Selection = styled("div")({
  flex: "1 1 auto",
});

export const ItemSumary = styled("div")({
  height: "auto",
  width: "auto",
  display: "grid",
  marginRight: 30,
  gridTemplateColumns: "repeat(auto-fit, minmax(100%, 1fr));",
  gap: "10px",
});

export const ProjectLabel = styled(Typography)({
  fontFamily: "Roboto",
  fontSize: "calc(0.5rem + 0.75vw)",
  fontWeight: 400,
  lineHeight: "130%",
  color: "#AEAEAE",
  cursor: "pointer",
  "&:active": {
    opacity: .4,
  },
});

export const SelectedProject = styled(Typography)({
  fontFamily: "Roboto",
  fontSize: "calc(0.5rem + 0.75vw)",
  fontWeight: 400,
  lineHeight: "130%",
  color: "#696969",
  cursor: "pointer",
  "&:active": {
    opacity: .4,
  },
});

export const ButtonsProject = styled("div")({
  cursor: "pointer",
  fontFamily: "Roboto",
  fontSize: "calc(0.5rem + 0.75vw)",
  fontWeight: 400,
  lineHeight: "130%",
  color: "#AEAEAE",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "2.5em",
  height: "0.5em",
  "& svg": {
    width: "0.5em",
    height: "0.5em",
  },
});

export const ProjectItem = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "10px",
});

export const AddButton = styled("div")({
  zIndex: 100,
  position: "fixed",
  bottom: "12%",
  right: "5vw",
});

export const Icon = styled(IconButton)({
  padding: 0,
  margin: "0px -25px 0px 5px",
});

export const UpdateProject = styled("div")({
  "& div": {
    margin: 0,
    width: "100%",
  },
});