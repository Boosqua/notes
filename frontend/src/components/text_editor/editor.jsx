import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import ReactQuill from "react-quill"
import { createUseStyles } from "react-jss"

import CustomToolbar, { modules, formats } from "./custom_toolbar"

import { receiveNote } from "../../actions/note_actions"
import { updateNote } from "../../util/note_util"
import { Delta } from "quill"

export default function Editor({note, autoSave, handleSave, id}){
   const dispatch = useDispatch()
   const classes = useStyles({})
   console.log(typeof note.body)
   const [text, setText] = useState()
   const delta = new Delta()

   
   const handleChange = (value) => {
      setText(value)

   }

   return <div className={classes.container}>
      <CustomToolbar/>
      <div className={classes.boxShadow}>
         <ReactQuill modules={modules}
                        value={text} 
                        initialValue={""}
                        formats={formats}
                        onChange={(value, delta, source, editor) => {
                           debugger
                           setText(editor.getHTML())

                        }}
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

