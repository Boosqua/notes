import React, { useState } from "react"
import useStyles from "./styles"

export default function HomeHeader({setCollapse, header, collapse}) {
   const [style, setStyle] = useState(collapse)
   const classes = useStyles({collapse: !style});
   return (
      <div className={classes.homeHC}>
         <div className={classes.menuIcon} onClick={() => {
            setCollapse()
            setStyle(!style)
            }}> 
            <i class="fas fa-bars"></i> 
            </div>
         <div className={classes.homeHeader}>{header}</div>
         <div className={classes.rightFlex}>
         <div className={classes.infoIcon}><i class="fas fa-user"></i></div>
         {/* <div className={classes.infoIcon}><i class="fas fa-info"></i></div> */}
         </div>
      </div>
   )
}
