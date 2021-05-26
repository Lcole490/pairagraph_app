import React , { useEffect }from 'react'
import "quill/dist/quill.snow.css"
import Quill from "quill"



function TextEditor() {

    useEffect(() => {
        new Quill("#container", { theme: "snow" })
    }, [])
    return (
        <div id = "container">
            
        </div>
    )
}

export default TextEditor
