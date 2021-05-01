import React, { useState } from "react"
import ReactQuill from "react-quill"
import { modules, formats } from "./custom_toolbar"

export default function Editor(props){
   const [text, setText] = useState("Testing text")
   const handleChange = (value) => {
      setText(value)
   }

   return <ReactQuill modules={modules}
                     value={text} 
                     formats={formats}
                     onChange={handleChange}
                     />
}