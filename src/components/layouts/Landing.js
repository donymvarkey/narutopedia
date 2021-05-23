import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar'
import SearchBar from '../SearchBar/SearchBar'


export default class Landing extends Component {
    
    render() {
        return (
            <div>
                <NavBar />
                <SearchBar />
            </div>
        )
    }
}
