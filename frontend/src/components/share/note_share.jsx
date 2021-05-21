import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router";

import {Header} from "../landing/landing"
import Editor from "../text_editor/editor"
import Toolbar from "../text_editor/custom_toolbar"
import { fetchNote } from "../../actions/note_actions"

export default function NoteShare(){
   const sharedNote = useSelector( state => state.shared )
   const errors = useSelector( state => state.errors.notes)
   const {params} = useRouteMatch()
   const dispatch = useDispatch()
   const [query, setQuery] = useState(false)
   useEffect(() => {
      fetchNote(params.id)(dispatch)
      setQuery(true)
   }, [sharedNote._id, params.id])
   return ( query  ?
      <div style={{height: "100vh"}}>
         <Header 
               collapsing={false} 
               mainText={
                  errors.length ? 
                  errors[0]
                  :
                  sharedNote.name
               }
               />
            <Toolbar hide={true}/>
            <Editor  
                     body={decodeDelta(sharedNote.body)} 
                     id={sharedNote._id}
                     key={sharedNote._id}
                     readOnly={true}
                     setRand={console.log}
                     />
      </div>
      :
      null
   )
}

const decodeDelta = (delta) => delta ? JSON.parse(delta) : null