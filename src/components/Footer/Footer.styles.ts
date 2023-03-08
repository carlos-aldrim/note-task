import { styled } from "@mui/system";
import { Typography } from "@mui/material";

export const Container = styled("div")({
  height: "70px",
  backgroundColor: "#463497",
  padding: "0px 1.5em",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
});

export const LabelText = styled(Typography)({
  marginLeft: "2px",
  fontSize: "70%",
  color: "#FFFFFF",
  fontWeight: 700,
});

export const Copyright = styled("div")({
  width: "auto",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  height: "30%",
  "& svg": {
    color: "#FFFFFF",
    width: "auto",
    height: "100%",
  },
});