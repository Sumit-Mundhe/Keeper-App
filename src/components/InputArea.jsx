import React,{useState} from 'react'

function InputArea(props){
    const[note,setNote] = useState({
        title:"",
        content:""
    })
    const [notesList,setNotesList] = useState([])

    function update(event){
        const {name,value} = event.target

        setNote(prevnote =>{
            return{
                ...prevnote,
                [name]:value
            }
        })
    }

    function submitNote(event){
        props.onAdd(note)
        setNote({
            title:"",
            content:""
        })
        event.preventDefault()
        
    }

    return(
        <div className="input-area">
            <form>
                <input 
                    name="title"
                    value={note.title}
                    onChange={update}
                    type="text" 
                    placeholder='Title'
                ></input>
                <textarea 
                    name="content"
                    value={note.content}
                    onChange={update}
                    type="text" 
                    placeholder='Content'
                    rows="3"
                ></textarea>
                <button
                    onClick={submitNote}
                > Add</button>
            </form>
        </div>
    )
}

export default InputArea;