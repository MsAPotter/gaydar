import React, { Component } from 'react';
import axios from 'axios';
import '../Form/Form.css';

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            location:'',
            url:'',
            review:'',
            user_name:'',
            date:'',
            rating:'',
            nights_stayed:''
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
        const URL = 'http://localhost:4000/api/accomodations/';
        axios
        .post(URL, {
            name: this.state.name,
            location:this.state.location,
            url: this.state.url,
            review: this.state.review,
            user_name: this.state.user_name,
            date: this.state.date,
            rating: this.state.rating,
            nights_stayed: this.state.nights_stayed
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
                    name="url"
                    onChange={this.handleInput}></input>
                    </div>

                    <div className="each-input-container">
                    <label className="label">Pets Allowed?</label>
                    <input  
                    className="input-field"
                    type="text"
                    placeholder="Yes or No"
                    name="url"
                    onChange={this.handleInput}></input>
                    </div>

                    {/* <div className="each-input-container">
                    <label className="label">Review</label>
                    <textarea 
                    className="lodging-review-input-field"
                    type="textarea"
                    placeholder="This place was amazing!"
                    name="review"
                    onChange={this.handleInput}></textarea>
                    </div>

                    <div className="each-input-container">
                    <label className="label">Username</label>
                    <input  
                    className="input-field"
                    type="text"
                    placeholder="Mickey Mouse"
                    name="user_name"
                    onChange={this.handleInput}></input>
                    </div>

                    <div className="each-input-container">
                    <label className="label">Date of trip</label>
                    <input  
                    className="input-field"
                    type="text"
                    placeholder="4/1/2020"
                    name="date"
                    onChange={this.handleInput}></input>
                    </div>

                    <div className="each-input-container">
                    <label className="label">Rating</label>
                    <input  
                    className="input-field"
                    type="text"
                    placeholder="1-5 out of 5 stars"
                    name="rating"
                    onChange={this.handleInput}></input>
                    </div>

                    <div className="each-input-container">
                    <label className="label">Nights Stayed</label>
                    <input  
                    className="input-field"
                    type="text"
                    placeholder="enter number of nights"
                    name="nights_stayed"
                    onChange={this.handleInput}></input>
                    </div> */}

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

export default Form;