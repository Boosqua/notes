import React from "react"
import { createUseStyles } from "react-jss";
import {Quill} from "react-quill"
import bullet from "../../img/bullet.png"
export default function CustomToolbar(){
   const classes = useStyles()
   return(
   <div id="toolbar">
    <button className="ql-customBold"> 
    <div className={classes.fontButton}>
      <div className={classes.bold}>
         b
      </div>
    </div>
    </button>
    <button className="ql-customItalic"> 
    <div className={classes.fontButton}>
      <div className={classes.italic}>
         i
      </div>
    </div>
    </button>
    <button className="ql-customUnderline"> 
    <div className={classes.fontButton}>
      <div className={classes.underline}>
         U
      </div>
    </div>
    </button>
    <button className="ql-customStrike"> 
    <div className={classes.fontButton}>
      <div className={classes.strike}>
         S
      </div>
    </div>
    </button>
    <button className="ql-customCB"> 
    <div className={classes.fontButton}>
      <div className={classes.cb}>
         {"</>"}
      </div>
    </div>
    </button>
    <button className="ql-customHeader"> 
    <div className={classes.fontButton}>
      <div className={classes.header}>
         H
      </div>
    </div>
    </button>
    <button className="ql-customOL"> 
    <div className={classes.fontButton}>
      <div className={""}>
         1.
      </div>
    </div>
    </button>
    <button className="ql-customUL"> 
    <div className={classes.fontButton}>
      <div className={classes.header}>
         {/* <img src={bullet} /> */}
         bullet
      </div>
    </div>
    </button>
  </div>
  )
}

function insertBold() {
   if(this.quill.getSelection()){  
      let bold = this.quill.getFormat().bold
      this.quill.format('bold', !Boolean(bold));
   }
}
function insertItalic() {
   if(this.quill.getSelection()){  
      let italic = this.quill.getFormat().italic
      this.quill.format('italic', !Boolean(italic))
   }
}
function insertUnderline() {
   if(this.quill.getSelection()){  
      let underline = this.quill.getFormat().underline
      this.quill.format('underline', !Boolean(underline))
   }
}
function insertST() {
   if(this.quill.getSelection()){  
      let strike = this.quill.getFormat().strike
      this.quill.format('strike', !Boolean(strike))
   }
}
function insertHeader() {
   if(this.quill.getSelection()){
      let header = this.quill.getFormat().header
      this.quill.format('header', !Boolean(header))
   }
}
function insertCB() {
   if(this.quill.getSelection()){  
      let cb = this.quill.getFormat()['code-block']
      this.quill.format('code-block', !Boolean(cb))
   }
}

function insertOL() {
   if(this.quill.getSelection()){  
      let orderedList = this.quill.getFormat().list === "ordered"
      this.quill.format("list" , !Boolean(orderedList) ? "ordered" : false)
   }
}
function insertUL() {
   if(this.quill.getSelection()){  
      let orderedList = this.quill.getFormat().list === "bullet"
      this.quill.format("list" , !Boolean(orderedList) ? "bullet" : false)
   }
}
export const modules = {
      toolbar: {
         container: "#toolbar",
         handlers: {
            customBold: insertBold,
            customItalic: insertItalic,
            customUnderline: insertUnderline,
            customStrike: insertST,
            customCB: insertCB,
            customHeader: insertHeader,
            customOL: insertOL,
            customUL: insertUL,
         }
      },
      clipboard: {
         matchVisual: false,
      }
   };
export const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', "code-block", 'list',
    {list : "ordered"}, {list: "bullet"}, 'bullet', 'indent',
    'link', 'image'
  ]
const toolbarStyles = {
   bold: {

   },
   fontButton: {
      padding: ".1em .4em",
      margin: "0 .25em",
      fontSize: 20,
      color: "black",
      "&:hover": {
         cursor: "pointer"
      }
   }
}

const useStyles = createUseStyles({
   bold: {
      textTransform: "uppercase",
      fontWeight: 800
   },
   italic: {
      textTransform: "uppercase",
      fontStyle: "italic"
   },
   underline: {
      textDecoration: "underline"
   },
   strike:{
      textDecoration: "line-through"
   },
   cb: {
      fontSize: 12
   },
   header: {

   },
   fontButton: {
      padding: "2px 5px",
      width: "fit-content",
      margin: "0 .1em",
      fontSize: 20,
      color: "black",
      fontFamily: "Merriweather",
      // background: "blue",
      "&:hover": {
         cursor: "pointer"
      }
   }
})


let Block = Quill.import('blots/block');


class HeaderBlot extends Block {
  static formats(node) {
    return HeaderBlot.tagName.indexOf(node.tagName) + 1;
  }
}
HeaderBlot.blotName = 'header';
// Medium only supports two header sizes, so we will only demonstrate two,
// but we could easily just add more tags into this array
HeaderBlot.tagName = ['H1', 'H2'];
class OrderedBlot extends Block {}
OrderedBlot.blotName = 'orderedList';
OrderedBlot.tagName = 'ol';
Quill.register(HeaderBlot)
// Quill.register(OrderedBlot)