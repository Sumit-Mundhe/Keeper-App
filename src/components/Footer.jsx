import React from 'react'

function Footer(){
    let currYear = new Date().getFullYear();
    return(
        <p className='footer'>Copyright {currYear}</p>
    )
}

export default Footer;