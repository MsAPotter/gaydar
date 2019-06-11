import React, { Component } from 'react';

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
                <form>
                    <input 
                    type="text"
                    placeholder="Lodging Name"
                    name="name"
                    onChange={this.handleInput}></input>

                    <input 
                    type="text"
                    placeholder="Lodging Location"
                    name="location"
                    onChange={this.handleInput}></input>

                    <input 
                    type="text"
                    placeholder="htttp://www.greatescape.com"
                    name="url"
                    onChange={this.handleInput}></input>

                    <input 
                    type="text"
                    placeholder="This place was amazing!"
                    name="review"
                    onChange={this.handleInput}></input>

                    <input 
                    type="text"
                    placeholder="Mickey Mouse"
                    name="user_name"
                    onChange={this.handleInput}></input>

                    <input 
                    type="text"
                    placeholder="4/1/2020"
                    name="date"
                    onChange={this.handleInput}></input>

                    <input 
                    type="text"
                    placeholder="1-5 out of 5 stars"
                    name="rating"
                    onChange={this.handleInput}></input>

                    <input 
                    type="text"
                    placeholder="enter number of nights"
                    name="nights_stayed"
                    onChange={this.handleInput}></input>
                </form>
                
                <button 
                    // className="toggleButton" 
                    type="submit" 
                    value="Submit" 
                    onClick={this.handleSubmit} />
            </div>
        );
    }
}

export default Form;