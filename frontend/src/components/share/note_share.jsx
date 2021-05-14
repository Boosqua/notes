import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router";

import Header from "../home/home_header"
import Editor from "../text_editor/editor"
import Toolbar from "../text_editor/custom_toolbar"
import { fetchNote } from "../../actions/note_actions"

export default function NoteShare(){
   const sharedNote = useSelector( state => state.shared.note )
   const errors = useSelector( state => state.errors.notes)
   const {params} = useRouteMatch()
   const dispatch = useDispatch()
   const [query, setQuery] = useState(false)
   console.log(sharedNote)
   useEffect(() => {
      fetchNote(params.id)(dispatch)
      setQuery(true)
   }, [sharedNote])
   return ( query ?
      <div>
         <Header 
               collapsing={false} 
               mainText={
                  errors.length ? 
                  errors[0]
                  :
                  sharedNote.name
               }
               />
            <Toolbar />
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