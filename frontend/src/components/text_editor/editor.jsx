import React, { useState } from "react"
import ReactQuill from "react-quill"
import { modules, formats } from "./custom_toolbar"
import CustomToolbar from "./custom_toolbar"
import { createUseStyles } from "react-jss"
export default function Editor(props){
   const [text, setText] = useState("Testing text")
   const handleChange = (value) => {
      setText(value)
   }
   const classes = useStyles({})
   return <div className={classes.container}>
      <CustomToolbar/>
      <div className={classes.boxShadow}>
         <ReactQuill modules={modules}
                        value={text} 
                        formats={formats}
                        onChange={handleChange}
                        />
      </div>
      </div>
}

const useStyles = createUseStyles({
   container: {
      height: "100%",
      width: "100%",
      display:"flex",
      flexDirection: "column"
   },
   boxShadow: {
      boxShadow: "inset 8px 8px 15px 0px #41b3a1",
      height: "100%"
   }
})