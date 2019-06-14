import React, { Component } from 'react';
import axios from 'axios';
import { FaHeart, FaMoon } from 'react-icons/fa';

let allReviews = [];

class Reviews extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            allReviews: []
        }
    }

    // within each accomodation,

    // fetch request to get all reviews of that one accomodation
    //     need accomodation ID
    //     send get request using accomodation ID

    // display first review of one accomodation

    componentDidMount() {

        // axios.get(`http://localhost:4000/api/reviews/:5d010030b78b872bee45ec97/reviews/`)
        axios.get('https://gaydar-api.herokuapp.com/api/reviews/:5d010030b78b872bee45ec97/reviews/')
        .then((res) => {
            allReviews = res.data;
            console.log(allReviews)
            this.setState = {allReviews}
    })
}
    render() {

        let allReviewsForSingleListing = allReviews.map((review, index) => {
            console.log(review.review)
            return (
                <div>
                    <div className="single-review-card">
                        <div className="each-review">
                            {this.props.EachReview}
                        </div>

                        <div className="review-aside">
                        <FaHeart /> 
                        <p className="review-rating-title">Your Rating</p>
                        <p className="review-rating">{this.state.rating}</p>
                        <hr></hr>
                        <FaMoon /> 
                        <p className="review-rating-title">Nights Stayed</p>
                        <p className="review-nights">{this.state.nights_stayed}</p>
                        </div>
                    
                    </div>
                </div>
            )})

            return (
                <div>
                        {allReviewsForSingleListing}                    
                </div>
            );
        }
}

export default Reviews;