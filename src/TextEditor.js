import React , {  useCallback }from 'react'
import "quill/dist/quill.snow.css"
import Quill from "quill"



function TextEditor() {


    


    const wrapperRef = useCallback((wrapper) => {   // Upon page load, text editor appears

        if (wrapper == null) return 

    wrapper.innerHTML =   "" 
    const editor = document.createElement('div')
    wrapper.append(editor);
     new Quill(editor, { theme: "snow" })

      
    }, [])                                         
    





    return (
        <div className = "container" ref = {wrapperRef}> 
            
        </div>
    )
}

export default TextEditor
