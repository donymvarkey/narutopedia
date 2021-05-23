import React, { Component } from 'react'
import axios from 'axios'
import Character from '../Character/Character'

export default class SearchBar extends Component {
    constructor() {
        super()
        this.state = {
            keyword: "",
            character: "",
            isLoaded: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange = (e) => {
        this.setState({
            keyword: e.target.value
        })
    } 

    handleSubmit = (e) => {
        e.preventDefault();
        this.getCharacter(this.state.keyword)
    }

    getCharacter = async (character) => {
        const res = await axios.get(`http://localhost:5000/api/characters/search/${character}`);
        // console.log(res.data.data.name);
        this.setState({
            character: res.data.data,
            isLoaded: true
        })
    }

    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h4>Search for your <b>Favourite</b> character from Naruto Universe</h4>
                    </div>
                </div>
                <form className="row  align-items-center" onSubmit={this.handleSubmit}>
                    <div className="col-18">
                        <div className="input-group">
                            <input type="text" className="form-control form-control-lg" id="keyword" placeholder="Search" value={this.state.keyword} onChange={this.handleChange} />
                        </div>
                    </div>

                    <div className="col-12 mt-2 text-center">
                        <button type="submit" className="btn btn-outline-primary btn-lg">Search</button>
                    </div>
                </form>
                {
                    this.state.isLoaded ? (
                        <div className="row mt-5">
                            <div className="col">
                                <Character character={this.state.character} />
                            </div>
                        </div>
                    ) : (
                        <div></div>
                    )
                }
                
            </div>
        )
    }
}
