import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  wrapper: {},
  table: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  tRow: {
    display: "grid",
    gridTemplateColumns: "10px 3rem 1fr",
    alignItems: "center",
    gap: "1rem",
    cursor: "pointer",
    "@media (max-width: 720px)": {
      justifyContent: "start",
    },
  },
  recordData: {},
  img: {
    width: "3rem",
    height: "3rem",
  },
  speedColor: {
    color: "#75abe8",
  },
  timeColor: {
    color: "#a19cec",
  },
  fineTimeColor: {
    color: "#bec1c4",
  },
  name: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: 200,
  },
  goldColor: {
    color: "#fdc28e",
  },
  imgBorder: {
    margin: 0,
    border: "2px solid #a19cec",
    borderRadius: "2rem",
  },
  loader: {
    width: "48px",
    height: "48px",
    border: "5px solid #FFF",
    borderBottomColor: "#FF3D00",
    borderRadius: "50%",
    display: "inline-block",
    boxSizing: "border-box",
    animation: "$rotation 1s linear infinite",
  },
  "@keyframes rotation": {
    "0%": {
      transform: "rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },
});
