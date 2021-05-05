import {createUseStyles} from "react-jss"

const useStyles = createUseStyles({
  homeHC: {
    display: "grid",
    gridTemplateColumns: "[leftH] 10fr [header] auto [rightH] 10fr",
    width: "100vw",
    height: "fit-content",
    //  boxShadow: "3px 5px 5px 0 rgba(8, 159, 154, .25)",
    background: "rgb(77 217 195)",
   alignItems: "center",
    zIndex: 0,
    padding: 10,
  },
  menuIcon: {
    margin: "0 .1em",
    padding: ".2em .5em",
    color: (options) => (!options.collapse ? "white" : "#e27d5e"),
    //  background: (options) => (!options.collapse ? "" : "#e27d5e"),
    borderRadius: ".5em",
    height: "fit-content",
    width: "fit-content",
    gridArea: "leftH",
    fontSize: 20,
    "&:hover": {
      cursor: "pointer",
      color: "#e27d5e",
      // background: "hsl(171deg 47% 48%)",
      transition: " 500ms",
      animationTimingFunction: "ease-in-out",
    },
  },
  folderMenu: {
    display: "flex",
    height: "100vh",
    flexDirection: "row"
  },
  div: {
    width: 0,
    height: "2em",
    border: "1px solid #089f9a",
  },
  homeContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
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
    alignItems: "center"
  },
  infoIcon: {
    margin: "0",
    padding: ".2em .5em",
    borderRadius: ".5em",
    height: "fit-content",
    width: "fit-content",
    fontSize: 20,
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