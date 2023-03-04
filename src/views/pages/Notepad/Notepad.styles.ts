import { styled } from "@mui/system";

export const Main = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  height: "auto",
  minHeight: "100vh",
  backgroundColor: "#EBEBEB",
  padding: "70px calc(1.5em + 7vw) 0px calc(1.5em + 7vw)",
});

export const DateSumary = styled("div")({
  display: "flex",
  flexDirection: "row",
});

export const DataSumary = styled("div")({
  display: "flex",
  flexDirection: "row",
});

export const SelectSumary = styled("div")({
  display: "flex",
  flexDirection: "row",
});

export const Title = styled("div")({
  maxHeight: "63.02px",
});

export const SaveButton = styled("div")({
  zIndex: 100,
  position: "fixed",
  bottom: 40,
  right: 70,
});