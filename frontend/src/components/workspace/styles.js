import { createUseStyles } from "react-jss"


const useStyles = createUseStyles({
   columnFlex: {
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      width: "100%"
   },
   rowFlex: {
      display: "flex",
      flexDirection: "row",
      width: "100vw",
      height: "100%"
   },
   columnFlexInner: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: "100%",
      boxShadow: "inset 8px 8px 15px 0px #41b3a1",
      padding: "2em",
   },
   wSSidebar: {
      width: 300,
      padding: 10,
      height: "100vh",
      overflowY: "scroll",
      border: "1px solid rgba(0,0,0,.1) "
   },
   wSHeader: {
      fontSize: 40,
      fontWeight: "bold",
      display: 'flex',
      flexDirection: "row",
      justifyContent: 'center',
      marginBottom: 20,
   },
   folderItem: {
      display: "flex",
      flexDirection: "row",
      fontSize: 22,
      padding: ".5em",
      margin: "0 .5em",
      borderRadius: 10,
      "&:hover": {
         background: options => options.hover ? "#e37d5e" : "inherit",
         cursor: options => options.hover ? "pointer" : "inherit"
      }
   },
   noteItem: {
      display: "flex",
      flexDirection: "row",
      fontSize: 20,
      padding: ".5em",
      margin: "0 1.25em",
      borderRadius: 10,
      background: options => options.show ? "#e37d5e" : "inherit",
      "&:hover": {
         background: options => options.hover ? "#e37d5e" : "inherit",
         cursor: options => options.hover ? "pointer" : "inherit"
      }
   },
   itemIcon: {
      marginRight: ".5em"
   },
   itemTitle: {
      width: "20em",
      overflow: "hidden",
      textOverflow: 'ellipsis',
      whiteSpace: "nowrap",
   },
   folderItemAdd: {
      display: 'flex',
      flexDirection: 'row-reverse',
      width: "100%",
      alignItems: 'center'
   },
   folderItemAddIcon: {
      padding: ".2em",
      "&:hover": {
         color: 'black',
         cursor: 'pointer'
      }
   },
   noteDataHeader: {
      borderBottom: "3px solid rgb(226 125 94)",
      fontSize: 30,
      padding: "1em 1em .25em 1em"
   },
   emptyMessage: {
      fontSize: 20,
      padding: "1em 2em .25em 2em"
   },
   emptyMessageButton: {
      padding: ".5em",
      fontSize: 16
   },
   noteDataColumn: {
      padding: "1em 0em .25em 1em"
   }
})

export default useStyles