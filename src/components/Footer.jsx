import React from 'react'
import ReactDOM from 'react-dom'

function Footer(){
    let currYear = new Date().getFullYear();
    return(
        <p className='footer'>Copyright {currYear}</p>
    )
}

export default Footer;