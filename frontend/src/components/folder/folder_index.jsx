import React from "react"
import {useSelector} from "react-redux"

export default function FolderIndex(props) {
   const folders = useSelector( state => state.folder)
   return (
      <div>
         folderIndex
      </div>
   )
}