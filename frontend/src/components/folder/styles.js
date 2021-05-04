import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  rrFlex: {
    display: "flex",
    flexDirection: "column-reverse",
    height: "50%",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
  },
  borderColor: {
    borderBottom: "1px solid rgba(1,1,1,.1)",
    paddingBottom: 5,
    marginBottom: 10,
  },
  folderIndexC: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  folderHeader: {
    gridArea: "header",
    fontSize: 20,
    color: "grey",
    fontWeight: "bold",
    width: "fit-content",
    padding: 10,
    margin: "0 0 10px 0",
  },
  folderHC: {
    height: "fit-content",
    padding: "10px 40px 10px 40px",
  },
  folderOU: {
    display: (options) => {
      return options && options.collapse && !options.animate ? "none" : "block";
    },
    animation: (options) => {
      if (options && !options.animate) {
        return "";
      }
      return options && options.collapse ? "$slideIn 750ms" : "$slideOut 750ms";
    },
    overflow: "hidden",
    animationTimingFunction: "ease-in-out",
    padding: 10,
    width: "fit-content",
    height: "100%",
    background: "hsl(171deg 47% 48%)",
  },
  folderLink: {
    fontSize: 20,
    padding: 10,
    borderRadius: 15,
    fontWeight: "bolder",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#e27d5e",
      background: "rgba(1,1,1,.1)",
      transition: " 500ms",
      animationTimingFunction: "ease-in-out",
    },
  },
  folderIC: {
    height: "100%",
    padding: "10px",
    overflow: "scroll",
  },
  formButton: {
    width: "fit-content",
    padding: "5px 1em",
    backgroundColor: "#e27d5e",
    borderRadius: 5,
    boxShadow: "1px 1px 4px #808080",
    "&:hover": {
      padding: "5px 2em",
      transition: "500ms",
      cursor: "pointer",
    },
  },
  formButtonC: {
    marginTop: 10,
    display: "flex",
    justifyContent: "center",
  },
  folderCC: {
    height: "fit-content",
    animation: "$slideUp 1s",
    padding: 30,
    background: "#e27d5e",
    border: "1px solid #e8a97c",
    borderRadius: 10,
  },
  formCH: {
    fontSize: 25,
    borderBottom: "1px solid white",
  },
  formCIH: {
    fontSize: 20,
    borderBottom: "1px solid white",
    width: "fit-content",
    margin: "10px 0",
  },
  formCI: {
    fontSize: 20,
    width: "95%",
    borderRadius: 5,
    color: "white",
    padding: 5,
    width: "100%",
    margin: "10px 0",
    background: "#e8a97c",
  },
  folderIconButton: {
    margin: "0 5px",
    padding: ".5em",
    borderRadius: "10%",
    border: "none",
    "&:hover": {
      cursor: "pointer",
      background: "hsl(171deg 47% 48%)",
      transition: "300ms",
    },
  },
  folderIconButtonS: {
    margin: "0 5px",
    padding: ".5em",
    borderRadius: "10%",
    border: "none",
    background: "hsl(171deg 47% 48%)",
    "&:hover": {
      cursor: "pointer",
    },
  },
  folderIconBlack: {
    color: "black",

    fontSize: 20,
  },
  folderIconBlue: {
    color: "blue",

    fontSize: 20,
  },
  folderIconGreen: {
    color: "Green",

    fontSize: 20,
  },
  folderIconYellow: {
    color: "Yellow",

    fontSize: 20,
  },
  folderIconWhite: {
    color: "White",

    fontSize: 20,
  },
  tagButton: {
    width: "fit-content",
    padding: "5px 1em",

    borderRadius: 5,
    boxShadow: "1px 1px 4px #808080",
    width: "fit-content",
    background: "hsl(171deg 47% 48%)",
    boxShadow: "1px 1px 4px #808080",
    "&:hover": {
      cursor: "pointer",
    },
  },
  "@keyframes slideOut": {
    to: {
      transform: "translatex(-100%)",
    },
  },
  "@keyframes slideIn": {
    from: {
      transform: "translatex(-100%)",
    },
  },
  "@keyframes slideUp": {
    from: {
      transform: "translateY(-80vh)",
      opacity: 0,
    },
  },
});

export default useStyles;
