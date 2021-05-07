import React,{useState} from 'react'

function InputNote() {
    const [title, settitle] = useState("");
    const [description, setdescription] = useState("");

    const OnSubmitNote = async(e) => {
        e.preventDefault();
        try {
            const body = {title,description};
            const response = await fetch("http://localhost:3001/notes",{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            window.location = "/";
        } catch (err) {
            console.error(err.message)
        }
    }
    return (
        <div>
            <h1 className="text-center mt-5">PernDocs</h1>
            <form className="d-flex mt-5" onSubmit={OnSubmitNote}>
                <input type="text" className="form-control" placeholder="Title" value={title} onChange={e => settitle(e.target.value)} />
                <input type="text" className="form-control" placeholder="Description" value={description} onChange={e => setdescription(e.target.value)}/>
                <button className="btn btn-success">Add</button>
            </form>
        </div>
    )
}

export default InputNote
