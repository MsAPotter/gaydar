import React, { Component } from 'react';
import axios from 'axios';
import './UserReview.css';

class UserReview extends Component {
    constructor(props) {
        super(props)

        this.state = {
            accomodation_name: '',
            review:'',
            user_name:'',
            date:'',
            rating:'',
            nights_stayed:'',
            accomodationData: {}
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

        let lodgingData = [];
        const URL1 = 'http://localhost:4000/api/accomodations/';
        axios.get(URL1)
            .then((res) => {
                // console.log(res.data)
                lodgingData = res.data
                // console.log(lodgingData)
                // console.log(lodgingData[0])
                // console.log(lodgingData[0].name)
                // console.log(this.state.accomodation_name)
                // console.log(lodgingData.length)

                for (var i=0; i < lodgingData.length; i++) {

                if (lodgingData[i].name === this.state.accomodation_name) {
                    // console.log("the true part is running")
                    let grabId = lodgingData[i]._id
                    const URL2 = `http://localhost:4000/api/accomodations/:${grabId}/reviews/`;
                    // console.log(URL2)

                    axios
                    .post(URL2, {
                        accomodation_name: this.state.accomodation_name,
                        review: this.state.review,
                        user_name: this.state.user_name,
                        date: this.state.date,
                        rating: this.state.rating,
                        nights_stayed: this.state.nights_stayed
                    })
                } else {
                    // return (<div>Click Add a Listing, to add a new lodging first</div>)
                    console.log("this iteration thru the dataset does not match the lodging name entered")
                }
            }
            })

    }

    render() {
        return (
            <div>
                <p className="review-blurb">Add a review to help others! </p> 

                <form className="form">
                    <div className="each-input-container">
                    <label className="label">Name</label>
                    <input 
                    className="input-field"
                    type="text"
                    placeholder="Disneyworld Polynesian Village"
                    name="accomodation_name"
                    onChange={this.handleInput}></input>
                    </div>

                    <div className="each-input-container">
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
                    </div>

                    <div className="each-input-container">
                    <input 
                    className="new-review-submit-button"
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

export default UserReview;