import {createUseStyles} from "react-jss"

const useStyles = createUseStyles({
  homeHC: {
    display: "grid",
    gridTemplateColumns: "[leftH] 10fr [header] auto [rightH] 10fr",
    width: "100%",
    height: "fit-content",
    background: "#85cdc9",
    alignItems: "center",
    zIndex: 0,
    padding: 10,
  },
  menuIcon: {
    margin: "0 .1em",
    padding: ".2em .5em",
    color: (options) => (!options.collapse ? "white" : "#e27d5e"),
    borderRadius: ".5em",
    height: "fit-content",
    width: "fit-content",
    gridArea: "leftH",
    fontSize: 25,
    "&:hover": {
      cursor: "pointer",
      color: "#e27d5e",
      transition: " 500ms",
      animationTimingFunction: "ease-in-out",
    },
  },
  folderMenu: {
    display: "flex",
    height: "100vh",
    flexDirection: "column",
      width: "100%"
  },
  div: {
    width: 0,
    height: "2em",
    border: "1px solid #089f9a",
  },
  homeContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100vw",
  },
  homeHeader: {
    gridArea: "header",
    fontSize: 50,
    fontWeight: "bold",
  },
  rightFlex: {
    gridArea: "rightH",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "center",
  },
  infoIcon: {
    margin: "0",
    padding: ".2em .5em",
    borderRadius: ".5em",
    height: "fit-content",
    width: "fit-content",
    fontSize: 25,
    "&:hover": {
      cursor: "pointer",
      // background: "#e27d5e",
      color: "#e27d5e",
      transition: " 500ms",
      animationTimingFunction: "ease-in-out",
    },
  },
});

export default useStyles;