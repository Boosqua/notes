import React, { useEffect, useState } from "react"
import ReactQuill from "react-quill"
import { createUseStyles } from "react-jss"
import Delta from "quill-delta"

import { modules, formats } from "./custom_toolbar"

export default function Editor({body, id, handleSave, setRand, readOnly=false }){

   const classes = useStyles({});

   const noteDelta = new Delta(body)
   const [text, setText] = useState(noteDelta)
   useEffect(() => {
      setText(new Delta(body))
      return() => {
         setRand()
      }
   }, [id])

   const handleChange = () => {
      return (content, delta, source, editor) => {
      const updated = new Delta(editor.getContents())
      setText(updated)
      handleSave(updated)
   }
}
   return <div className={classes.container}>
            <div className={classes.boxShadow}>
               <ReactQuill modules={modules}
                              value={text} 
                              formats={formats}
                              onChange={handleChange()}
                              readOnly={readOnly}
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


