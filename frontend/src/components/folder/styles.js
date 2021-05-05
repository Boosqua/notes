import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  rrFlex: {
    display: "flex",
    flexDirection: "column-reverse",
  },
  rrFlex2: {
    display: "flex",
    flexDirection: "row-reverse",
    position: "relative",
    top: 0,
    right: "-1em",
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

    fontWeight: "bold",
    width: "100%",
    padding: "10px 10px 10px 0px",
    marginLeft: 10,
   //  borderBottom: '1px solid '
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
    animationTimingFunction: "linear",
    padding: 10,
    maxWidth: "300px",
    height: "100%",
    background: "rgb(77 217 195)",
  },
  folderLink: {
    fontSize: 20,
    padding: 10,
    borderRadius: 15,
    fontWeight: "bolder",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    textOverflow: "ellipsis",
    overflow: "hidden",
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
   overflow: "hidden",
   textOverflow: "clip",
   whiteSpace: "nowrap",
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
    padding: "5px 30px 30px 30px",
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
    background: "hsl(171deg 47% 48%)",
    boxShadow: "1px 1px 4px #808080",
    "&:hover": {
      cursor: "pointer",
    },
  },
  tags: {
    fontSize: 12,
    background: "#c48c9d",
    padding: ".5em",
    borderRadius: ".25em",
    maxWidth: "5em",
    width: "fit-content",
    margin: "0 .25em .75em .25em",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  closeIcon: {
     marginLeft: "1em",
    "&:hover": {
      cursor: "pointer",
      color: "black",
      transition: "500ms",
    },
  },
  tagContent: {
      maxWidth: "3em",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
  },
  tagGrid: {
    width: "100%",
    display: "flex",
  },
  "@keyframes slideOut": {
    to: {
      maxWidth: "0",
      padding: 0
    },
  },
  "@keyframes slideIn": {
    from: {
      maxWidth: "0",
      padding: 0
    },
  },
  "@keyframes slideUp": {
    from: {
      transform: "translateY(-80vh)",
      opacity: 0,
    },
  },
  manageText: {
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
    width: "10em",
    margin: "0 1em ",
  },
   folderShowC: {
      height: "100%",
      width: "100%",
      overflow: "scroll",
      boxShadow: "inset 8px 8px 15px 0px #41b3a1",
      background: "#85cdc9",
      padding: "2em 2em 0 2em"
   },
   showHM: {
      fontSize: 30,
      fontWeight: "bold",
      color: "#e27d5e",
      borderBottom: "3px solid"
   },
   folderContainerH: {
      padding: "10px 10px 10px 0",

      borderBottom: "1px solid #e27d5e",
      display: "flex",
      flexDirection: "row",
      fontSize: 40,
      "&:hover": {
         cursor: "pointer",
         color: "#e27d5e"
      }
   },
   folderName: {
      marginLeft: "1em",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
   },
   folderContainer: {
      paddingLeft: 10
   },
   folderInfoC: {
      background: "#e8a97c",
      borderRadius: 5,
      boxShadow: "inset 4px 4px 20px 0px #e27d5e",
      padding: "1em"
   },
   folderDate: {
      display: (options) => options.data ? "block" : "none",
      fontSize: 14,
      padding: "0 10px 10px 10px",
      overflow: "hidden",
      maxHeight: '100%',
      animation: '$moveDown 1s',
      transition: "height 1s"
   },
   folderDocuments: {},
   folderInfoH: {
      width: "fit-content",
   },
   folderRow: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      fontSize: 20,
      color: "#388276",
     
      "&:hover": {
         cursor: "pointer"
      }
   },
   arrow: {
      animation: (options) => {
         if(!options || !options.animate) return;
         return options.data? 
            "$spinDown 500ms"
            : 
            "$spinRight 500ms"
      }
   },
   menuAni: {
      // animation: "$moveDown 1s",
      // transition: "height 1s"
   },
   arrowDoc: {
      animation: (options) => {
         if(!options || !options.animateDoc) return;
         return options.doc? 
            "$spinDown 500ms"
            : 
            "$spinRight 500ms"
      }
   },
   "@keyframes spinDown": {
      from: {
         transform: "rotate(-90deg)"
      }
   },
   "@keyframes spinRight": {
      from: {
         transform: "rotate(90deg)"
      }
   },
   "@keyframes moveDown": {
      from: {
         height: 0,
         padding: 0
      },
      to: {
         height: '5em'
      }
   },
   buttonMargin: {
      margin: "1em"
   },
   deleteC: {
      padding: 20,
      backgroundColor: 'white',
      color: 'black'
   },
   deleteHeader: {
      fontSize: 30,
      fontWeight: "bold"
   },
   deleteWarning: {
      margin: '10px 10px 10px 10px'
   }
});

export default useStyles;
