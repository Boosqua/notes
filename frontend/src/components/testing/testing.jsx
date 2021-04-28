import React, { useEffect, useState } from "react"
import ReactQuill, {Quill} from "react-quill"
import 'react-quill/dist/quill.snow.css'
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
const CustomBold = () => <span className="bold">BOLDBB</span>
/*
 * Event handler to be attached using Quill toolbar module (see line 73)
 * https://quilljs.com/docs/modules/toolbar/
 */
function insertStar() {
  const cursorPosition = this.quill.getSelection().index;
  this.quill.insertText(cursorPosition, "★");
  this.quill.setSelection(cursorPosition + 1);
}
function insertBold() {
   let bold = this.quill.getFormat().bold
   this.quill.format('bold', !Boolean(bold));
}
const CustomToolbar = () => (
  <div id="toolbar">
    <select className="ql-header" defaultValue={""} onChange={e => e.persist()}>
      <option value="1" />
      <option value="2" />
      <option selected />
    </select>
    <button className="ql-bold" />
    <button className="ql-italic" />
    <select className="ql-color">
      <option value="red" />
      <option value="green" />
      <option value="blue" />
      <option value="orange" />
      <option value="violet" />
      <option value="#d0d1d2" />
      <option selected />
    </select>
    <button className="ql-insertStar">
      <CustomButton />
    </button>
    <button className="ql-customBold"> 
      <CustomBold />
    </button>
  </div>
);

function QuillTest(props){
   const [text, setText] = useState("")
   const modules = {
   toolbar: {
      container: "#toolbar",
      handlers: {
         insertStar: insertStar,
         customBold: insertBold
      }
   },
   clipboard: {
      matchVisual: false,
   }
   };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]
   const handleChange = (value) => {
      setText(value)
   }
   return <ReactQuill modules={modules}
                     value={text} 
                     formats={formats}
                     onChange={handleChange}
                     theme={"snow"}/>
}
export default function Testing(props){
   
   return(
      <div>
         <CustomToolbar />
         <div>Bukaki</div>
         <QuillTest />
      </div>
   )
}

