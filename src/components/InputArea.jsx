import React,{useState} from 'react'
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

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
        <div className="input-area-main">
            <form className="input-area">
                <input 
                    name="title"
                    value={note.title}
                    onChange={update}
                    type="text" 
                    placeholder='Title'
                    spellCheck="false"
                ></input>
                <textarea 
                    name="content"
                    value={note.content}
                    onChange={update}
                    type="text" 
                    placeholder='Content'
                    rows="3"
                    spellCheck="false"
                ></textarea>
                <Zoom in='true' >
                    <Fab className='add'
                        onClick={submitNote}
                    > <AddIcon fontSize='large' />
                    </Fab>
                </Zoom>
            </form>
        </div>
    )
}

export default InputArea;