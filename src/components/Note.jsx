import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import Fab from '@mui/material/Fab';

function Note(props){

    function click(){
        props.onDelete(props.id)
    }

    return(
        <div className='note'>
            <h1 className='title'>{props.title}</h1>
            <p className='content'>{props.content}</p>
            <button className='delete' onClick={click}>
            <DeleteIcon fontSize='large' />
            </button>
        </div>
    )
}

export default Note;