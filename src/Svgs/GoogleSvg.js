import React from 'react'
import googleicon from '../images/google-play-png-logo-3799.png'

function GoogleSvg() {
    return (
        <div
            style={
                {
                    width: '150px'
                }
            }
        >

            <a href='#'>
                <img src={googleicon} style={{width:'100%'}}/>
            </a>
        </div>
    )
}

export default GoogleSvg
