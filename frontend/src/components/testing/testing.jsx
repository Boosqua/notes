import React, { useEffect, useState } from "react"
import ReactQuill, {Quill} from "react-quill"
import CustomToolbar, { modules, formats } from "./custom_toolbar"
// import 'react-quill/dist/quill.snow.css'
let Inline = Quill.import('blots/inline');
class BoldBlot extends Inline { }
BoldBlot.blotName = 'bold';
BoldBlot.tagName = 'strong';

class ItalicBlot extends Inline { }
ItalicBlot.blotName = 'italic';
ItalicBlot.tagName = 'em';

Quill.register(BoldBlot);
Quill.register(ItalicBlot);

const CustomButton = () => <span className="octicon octicon-star"> ★ </span>;

function insertStar() {
  const cursorPosition = this.quill.getSelection().index;
  this.quill.insertText(cursorPosition, "★");
  this.quill.setSelection(cursorPosition + 1);
}



function QuillTest(props){
   const [text, setText] = useState("Testing text")
   


   const handleChange = (value) => {
      setText(value)
      console.log(value)
   }
   return <ReactQuill modules={modules}
                     value={text} 
                     formats={formats}
                     onChange={handleChange}
                     />
}
export default function Testing(props){
   
   return(
      <div>
         <CustomToolbar />
         <QuillTest />
      </div>
   )
}

