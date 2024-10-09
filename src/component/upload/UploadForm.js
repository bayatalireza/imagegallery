import { useState } from "react";

export default function UploadForm() {
    const[file, setFile] = useState(null)
    const[error, setError] = useState(null)

    const handleChange = (e) => {
        const types = ["image/jpeg", "image/png"]

        let selected = e.target.files[0]
        if(selected && types.includes(selected.type)){
            setFile(selected)
            setError('')
        }else{
            setFile(null)
            setError("please select an image file(jpeg or png)")
        }
        
        
    }
  return (
    <form >
        <input type="file" onChange={handleChange} />
        <div className="output">
            {error && <div className="error">{error}</div>}
            {file && <div className="error">{file.name}</div>}
        </div>
    </form>
  )
}
