import { styled } from "@mui/system";
import { Typography } from "@mui/material";

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
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr));",
  gap: "10px",
});

export const ItemLabel = styled("div")({
  width: "95%",
  height: "55px",
  borderRadius: "0.5em",
  marginTop: "5px",
  backgroundColor: "#F4F4F4",
  trasition: .35,
  cursor: "pointer",
  "&:hover": {
    opacity: 0.75,
  },
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

export const Remove = styled(Typography)({
  cursor: "pointer",
  fontFamily: "Roboto",
  fontSize: "calc(0.5rem + 0.75vw)",
  fontWeight: 400,
  lineHeight: "130%",
  color: "#AEAEAE",
  "& svg": {
    width: "0.75em",
    height: "0.75em",
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
  bottom: 40,
  right: 70,
});