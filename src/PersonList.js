import axios from 'axios'
import React, { Component } from 'react'
import PersonDetail from './PersonDetail'

export default class PersonList extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
             persons: []
        }
    }

    componentDidMount = () => {
        this.getPersonList()
    }
    
    getPersonList = () => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            console.log(response)
            this.setState({persons: response.data})
        }) 
        .catch(err => console.log(err))
    }
    // //Define state default values
    // state = {
    //     persons: []
    // }

    //  //Component Lifecycle Callback
    // componentDidMount() {
    //     axios.get('https://randomuser.me/api/?results=10')
    //     .then(res => {
    //         console.log(res.data);
    //         const persons = res.data.results;
    //         this.setState({ persons });
    //     })
    // }


    render() {
        return (
            <div>
                <button onClick={this.getPersonList}>Get Persons</button>
                {
                    this.state.persons.map(person => (
                        <PersonDetail key={person.id} person={person} />
                     ))
                }
            </div>
        )
    }
}
