import React from 'react'
import ReactDOM from 'react-dom'

function Note(props){
    return(
        <div className='note'>
            <h1 className='title'>{props.title}</h1>
            <p className='content'>{props.ds}</p>
        </div>
    )
}

export default Note;