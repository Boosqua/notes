import {createUseStyles} from "react-jss"

const useStyles = createUseStyles({
   homeHC: {
      display: "grid",
      gridTemplateColumns: "[leftH] 10fr [header] auto [rightH] 10fr",
      width: "100vw",
      height: "fit-content",
      boxShadow: "0 5px 10px rgba(8, 159, 154, .25)",
      zIndex: 1,
      padding: 10
   },
   menuIcon: {
      margin: "0 .1em",
      padding: ".2em .5em",
      borderRadius: ".5em",
      height: "fit-content",
      width: 'fit-content',
      gridArea: "leftH",
      fontSize: 20,
      '&:hover': {
         cursor: "pointer",
         color: "#e27d5e",
         background: "hsl(171deg 47% 48%)",
         transition: " 500ms",
         animationTimingFunction: "ease-in-out"
      }
   },
   testMenu: {
      display: (options) => options && options.collapse ? "block" : "none",
      height: "100vh"
   },
   div: {
      width: 0,
      height: "2em",
      border: "1px solid #089f9a",
   },
   TestContainer: {
      display: "flex",
      flexDirection: "row"
   },
   homeHeader: {
      gridArea: "header",
      fontSize: 30,
      fontWeight: "bold"
   },
   rightFlex: {
      gridArea: "rightH",
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "row-reverse",
   },
   infoIcon: {
      margin: "0",
      padding: ".2em .5em",
      borderRadius: ".5em",
      height: "fit-content",
      width: 'fit-content',
      fontSize: 20,
      '&:hover': {
         cursor: "pointer",
         color: "#e27d5e",
         background: "hsl(171deg 47% 48%)",
         transition: " 500ms",
         animationTimingFunction: "ease-in-out"
      }
   }
})

export default useStyles;