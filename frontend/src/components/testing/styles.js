import {createUseStyles} from 'react-jss'

const styles =  createUseStyles({
   hGrid: {
      display: 'flex',
      position: 'fixed',
      left: 0,
      top: 0,
      flexDirection: 'row',
      width: "100vw",
      boxShadow: "0 5px 10px rgba(8, 159, 154, .25)",
      zIndex: 1,
   },
   hL: {
      padding: 10
   },
   heSpin: {
      animation: '$spin 500ms linear',
   },
   hR: {
      background: "red",
      padding: 10
   },
   hC: {
      borderRight: "2px solid rgb(8 159 154 / 71%) ",
      borderLeft: "2px solid rgb(8 159 154 / 71%)",
      width: "100%",
      padding: 10,
      display: 'flex',
      flexDirection: 'row'
   },
   heButtons: {
      width: 'fit-content',
      height: 'fit-content',
      '&:hover': {
         cursor: "pointer",
         animation: '$hecolor 2s linear',
         animationIterationCount: 'infinite'
      }
   },
   "@keyframes hecolor": {
      '0%':{

      },
      '50%':{
         color: "#e8a97c"
      },
      '100%': {
         color: 'white'
      }
   },
   "@keyframes spin": {
      '0%': {transform: 'rotate(180deg)'},
      '33%': {transform: 'rotate(360deg)'},
      '66%': {transform: 'rotate(540deg)'},
      '100%': {transform: 'rotate(720deg)'},
   }
})
 /* #e8a97c #e27d5e #c48c9d */
export default styles;