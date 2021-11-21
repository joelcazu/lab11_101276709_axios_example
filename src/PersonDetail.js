import React from 'react'
import axios from 'axios'

const getPersonDetailsByID = (id) =>{
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => {
        console.log(response)
    }) 
    .catch(err => console.log(err))
} 
export default function PersonDetail(props) {
    return (
        <div>
            <h4 key={props.person.id}>{props.person.name} - {props.person.username}</h4>
            <button onClick={ (event) => getPersonDetailsByID(props.person.id)}> Details</button>
        </div>
    )
}
