import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Not_found.css'

function Not_found() {
    const navigate = useNavigate()
    return (
        <div className="not_found">
            <h2>NOT FOUND</h2>
            <p>Missing something here! the page you are looking for is not found!</p>

            <button onClick={()=> navigate ('/')}>GO BACK HOME</button>
        </div>
    )
}

export default Not_found
