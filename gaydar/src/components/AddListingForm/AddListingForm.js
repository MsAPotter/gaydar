import React, { Component } from 'react';
import axios from 'axios';
import './AddListingForm.css';

class AddListingForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            location:'',
            url:'',
            breakfast: Boolean,
            pets: Boolean
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(event) {
        console.log("handleInput function running")
        let target = event.target;
        let value = target.value;
        let name = target.name;
        this.setState({
            [name]: value
        })
    }

    handleSubmit() {
        // const URL = 'http://localhost:4000/api/accomodations/';
        const URL = 'https://gaydar-api.herokuapp.com/api/accomodations/'

        // if (this.state.breakfast == "yes" || "Yes" || null) {
        //     this.state.breakfast = True
        // } else {
        //     this.state.breakfast = False
        // }
        // if (this.state.pets == "yes" || "Yes" || null) {
        //     this.state.pets == True
        // } else {
        //     this.state.pets = False
        // }
        // console.log(this.state.breakfast)
        // console.log(this.state.pets)

        axios
        .post(URL, {
            name: this.state.name,
            location:this.state.location,
            url: this.state.url,
            breakfast: this.state.breakfast,
            pets: this.state.pets
        })
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        })
    }

    render() {
        return (
            <div>
                <p className="add-blurb">Add listings you find in your travels to help others! </p> 


                <form className="form">
                    <div className="each-input-container">
                    <label className="label">Name</label>
                    <input 
                    className="input-field"
                    type="text"
                    placeholder="Disneyworld Polynesian Village"
                    name="name"
                    onChange={this.handleInput}></input>
                    </div>

                    <div className="each-input-container">
                    <label className="label">Location</label>
                    <input  
                    className="input-field"
                    type="text"
                    placeholder="Orlando, FL"
                    name="location"
                    onChange={this.handleInput}></input>
                    </div>

                    <div className="each-input-container">
                    <label className="label">Url</label>
                    <input  
                    className="input-field"
                    type="text"
                    placeholder="htttp://www.greatescape.com"
                    name="url"
                    onChange={this.handleInput}></input>
                    </div>

                    <div className="each-input-container">
                    <label className="label">Breakfast Included?</label>
                    <input  
                    className="input-field"
                    type="text"
                    placeholder="Yes or No"
                    name="breakfast"
                    onChange={this.handleInput}></input>
                    </div>

                    <div className="each-input-container">
                    <label className="label">Pets Allowed?</label>
                    <input  
                    className="input-field"
                    type="text"
                    placeholder="Yes or No"
                    name="pets"
                    onChange={this.handleInput}></input>
                    </div>
                    
                    <div className="each-input-container">
                    <input 
                    className="new-lodging-submit-button"
                    // className="toggleButton" 
                    type="submit" 
                    value="Submit" 
                    onClick={this.handleSubmit} ></input>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddListingForm;