import React from "react"
import { createUseStyles } from "react-jss"

export default function Sidebar({animate, collapse, children }) {
   const classes = useStyles({collapse, animate})

   return <div className={classes.sidebar}>
      {children}
   </div>
}
const useStyles = createUseStyles({
   sidebar: {
    marginLeft: (options) => {
      return options && options.collapse && !options.animate ? -300 : 0;
    },
    animation: (options) => {
      if (options && !options.animate) {
        return "";
      }
      return options && options.collapse ? "$slideIn 300ms" : "$slideOut 300ms";
    },
    transition: "linear"
   },
  "@keyframes slideIn": {
    from: {
      marginLeft: -300,
      opacity: 0
    },
  },
  "@keyframes slideOut": {
    to: {
      marginLeft: -300,
      opacity: 0,
    },
  },
})