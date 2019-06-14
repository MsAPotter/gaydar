import React, { Component } from 'react';
import { FaHeart, FaMoon } from 'react-icons/fa';


class SingleReview extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
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
        );
    }
}

export default SingleReview;