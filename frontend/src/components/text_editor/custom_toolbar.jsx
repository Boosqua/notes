import React, { useRef } from "react"
import { createUseStyles } from "react-jss";
import {Quill} from "react-quill"
// tool bar component
export default function CustomToolbar({children}){
   const classes = useStyles()
   const keyRef = useRef(null)

   return(
   <div id="toolbar" className={classes.toolbar}>

      <button className="ql-customHeader"> 
         <div className={classes.fontButton}>
            <div className={classes.header}>
               <i class="fas fa-heading"></i>
            </div>
         </div>
      </button>
   <div className={classes.tbDiv}></div>
    <button className="ql-customBold"> 
      <div className={classes.fontButton}>
         <div className={classes.bold}>
            <i class="fas fa-bold"></i>
         </div>
      </div>
    </button>
    <button className="ql-customItalic"> 
      <div className={classes.fontButton}>
         <div className={classes.italic}>
            <i class="fas fa-italic"></i>
         </div>
      </div>
    </button>
    <button className="ql-customUnderline"> 
      <div className={classes.fontButton}>
         <div className={classes.underline}>
            <i class="fas fa-underline"></i>
         </div>
      </div>
    </button>
   <button className="ql-customStrike"> 
      <div className={classes.fontButton}>
         <div className={classes.strike}>
            <i class="fas fa-strikethrough"></i>
         </div>
      </div>
   </button>
    <div className={classes.tbDiv}></div>
    <button className="ql-customCB"> 
      <div className={classes.fontButton}>
         <div className={classes.cb}>
            <i class="fas fa-code"></i>
         </div>
      </div>
   </button>
   <div className={classes.tbDiv}></div>
    <button className="ql-customOL"> 
      <div className={classes.fontButton}>
         <div className={""}>
            <i class="fas fa-list-ol"></i>
         </div>
      </div>
    </button>
    <button className="ql-customUL"> 
      <div className={classes.fontButton}>
         <div className={classes.header}>
            <i class="fas fa-list"></i>
         </div>
      </div>
    </button>
  </div>
  )
}
//custom button functions
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
//modules
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

// formats
export const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', "code-block", 'list',
    {list : "ordered"}, {list: "bullet"}, 'bullet', 'indent',
    'link', 'image'
  ]

// styling
const useStyles = createUseStyles({
   toolbar: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      padding: "12px 15px",
      background: "#85cdc9",
      border: "1px solid rgba(0,0,0,.1) "
   },
   bold: {
      textTransform: "uppercase",
      fontWeight: 800
   },
   tbDiv: {
      borderLeft: "2px solid rgba(0,0,0,.1) ",
      margin: "0 5px",
      height: '100%',
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

   },
   header: {

   },
   hidden: {
      display: "none"
   },
   fontButton: {
      // padding: "2px 5px",
      width: "fit-content",
      // margin: "0 .1em",
      // fontSize: 20,
      color: "white",
      // background: "blue",
      "&:hover": {
         cursor: "pointer"
      }
   }
})

// add custom header node
let Block = Quill.import('blots/block');
class HeaderBlot extends Block {
  static formats(node) {
    return HeaderBlot.tagName.indexOf(node.tagName) + 1;
  }
}

HeaderBlot.blotName = 'header';
HeaderBlot.tagName = ['H1', 'H2'];
Quill.register(HeaderBlot)
