import React, {useState} from 'react'
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import InputArea from './InputArea';

function App(){
    const[notes,setNotes] = useState([])

    function addNote(newNote){
        setNotes(prevnotes =>{
            return [...prevnotes,newNote]
        })
    }

    function deleteNote(id){
        setNotes(prevnotes =>{
            return prevnotes.filter((noteItem,index)=>{
                return index!==id
            })
        })
    }

    return(
        <div className='main'>
            <Header />
            <InputArea onAdd={addNote}/>
            <div className="notes-list">

            {
                notes.map((noteItem,index) =>{
                    return <Note 
                    key={index}
                    id={index}
                    title={noteItem.title}
                    content={noteItem.content}
                    onDelete={deleteNote}
                    />
                })
            }
            </div>
            <Footer/>
        </div>
    )
}

export default App;