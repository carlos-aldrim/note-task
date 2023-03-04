import { Typography } from "@mui/material";
import { styled } from "@mui/system";

export const Note = styled("div")({
  margin: "0.25em",
  width: "auto",
  height: "auto",
  padding: "calc(0.5rem + 0.75vw)",
  borderRadius: "0.5em",
  marginTop: "5px",
  backgroundColor: "#F4F4F4",
  trasition: .35,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  cursor: "pointer",
  "&:active": {
    opacity: 0.75,
  },
});

export const TextLabel = styled(Typography)({
  fontFamily: "Roboto",
  fontSize: "calc(0.5rem + 0.75vw)",
  fontWeight: 400,
  lineHeight: "130%",
  color: "#AEAEAE",
  cursor: "text",
});

export const NoteDetails = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
});

export const DeleteButton = styled("div")({
  display: "flex",
  alignItems: "center",
  "& svg": {
    cursor: "pointer",
    color: "#AEAEAE",
    "&:active": {
      opacity: 0.75,
    },
  },
});