import React from 'react'
import { useParams } from 'react-router-dom'

function MenuDetails() {
const params = useParams();
const id = params.detailsId
    

    return (
       <h1>{id}</h1>
    )
}

export default MenuDetails
