import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import notes from '../notes';

function App(){
    return(
        <div>
            <Header />
            <div className="notes-main">
                {notes.map(obj => (
                    <Note 
                    key={obj.id}
                    title={obj.title}
                    ds={obj.ds}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    )
}

export default App;