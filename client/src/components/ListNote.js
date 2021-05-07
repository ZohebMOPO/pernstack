import React,{Fragment,useState,useEffect} from 'react'

function ListNote() {
    const [docs, setdocs] = useState([]);

    // Delete a Note
    const deleteNote = async(id) => {
        try {
            const deleteNote = await fetch(`http://localhost:3001/notes/${id}`,{
                method: "DELETE"
            })
            console.log(deleteNote)
        } catch (err) {
            console.error(err.message)
        }
    }

    const getNotes = async() => {
        try {
            const response = await fetch("http://localhost:3001/notes");
            const jsonData = await response.json();
            setdocs(jsonData);
        } catch (err) {
            console.error(err.message)
        }
    }
    useEffect(() => {
        getNotes();
    }, [])
    console.log(docs)
    return (
        <div>
            <Fragment>
                <table class="table table-striped">
                   <thead>
                     <tr>
                       <th>Edit</th>
                        <th>Delete</th>
                        <th>Title</th>
                        <th>Description</th>
                     </tr>
                   </thead>
                   {docs.map(note => (
                       <tr key={docs.docs_id}>
                           <td>Edit</td>
                           <td><button className="btn btn-danger" onClick={() => deleteNote(docs.docs_id)}>Delete</button></td>
                           <td>{note.title}</td>
                           <td>{note.description}</td>
                       </tr>
                   ))}
                   </table>
            </Fragment>
        </div>
    )
}

export default ListNote
