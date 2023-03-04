import { styled } from "@mui/system";
import { Chip, Divider } from "@mui/material";

export const Container = styled("div")({
  backgroundColor: "#F5F5F5",
  borderRadius: "4px",
  margin: "0.25em",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const TagSumary = styled("div")({
  padding: "20px 32px 14px 18px",
  width: "calc(100% - 50px)",
  display: "flex",
  flexWrap: "wrap",
  alignItems: "left",
});

export const Partion = styled(Divider)({
  width: "90%",
  backgroundColor: "#AEAEAE",
  opacity: 0.1,
});

export const TagItem = styled(Chip)({
  margin: 5,
});