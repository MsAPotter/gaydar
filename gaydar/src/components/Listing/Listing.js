import React, { Component } from 'react';
import './Listing.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Reviews from '../Listing/Reviews/Reviews.js';

class Listing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listings: [],
            open: false
        }
		this.togglePanel = this.togglePanel.bind(this);
    }

    togglePanel(evt) {
		console.log('togglePanel');
		this.setState({ open: !this.state.open });
	}

    componentDidMount() {
        console.log("component did mount is running")
        // axios.get('//localhost:4000/api/accomodations/')
        axios.get('https://gaydar-api.herokuapp.com/api/accomodations/')
        .then((res) => {
            console.log(res)
            this.setState({
                listings: res.data
            })
            console.log(res.data)
        })
    }

    render() {
        console.log("render is running")
        let allListings = [];
        let allListingIds = [];
        let allReviews;
        let eachReview;

        for (let i=0; i<this.state.listings.length; i++) {
            allListings.push(this.state.listings[i])

            // HOW TO GRAB ALL REVIEWS FOR EACH LISTING:
            // for all listings, grab accomodationId of each
            // insert accomodationId into axios get request for one
            // /api/reviews/:accomodationId/reviews/

            let grabId = this.state.listings[i]._id

            // axios.get(`http://localhost:4000/api/reviews/:${grabId}/reviews/`)
            axios.get('https://gaydar-api.herokuapp.com/api/reviews/:${grabId}/reviews/')
            .then((res) => {
                allReviews = res.data;
                console.log(allReviews)
                // console.log(allReviews[0].review)
                for (let i=0; i < allReviews.length; i++) {
                    eachReview.push(<Reviews 
                        key={i} 
                        review={this.state.allReviews[i]} 
                        {...this.props}
                        />)
                }
                
            })
            // display all reviews for that lodging
            // insert accomodationId into axios get request for second
            // display all review for THAT lodging

            allListingIds.push(this.state.listings[i].user_review._id)
        }
        console.log(allListings)
        // console.log(allListings[0].user_review)
        console.log(allListingIds)
        console.log(allReviews)
        console.log(eachReview)


        // MAP THROUGH ALL LISTINGS IN DATABASE AND CREATE CARDS

        let allListingsCards = allListings.map((listing, index) => {
            console.log(listing.url)
            return (
                <div>
                    
                        <div className="single-listing-container">
                            <img src={listing.image}
                            className="listing-image"/>
                            <div className="listing-data">
                                <ul>
                                <a href={listing.url} target="_blank"><li className="listing-name">{listing.name}</li></a>
                                    <li className="listing-location"><FaMapMarkerAlt/> {listing.location}</li>

                                    {/* <li className="listing-review">{eachReview}</li> */}
                                    {/* <li className="listing-review"><Reviews /></li> */}
                                    <li className="review-card">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. 
                                    Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum 
                                    imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. 
                                    Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
                                    per inceptos himenaeos. </li>

                                </ul>
                                <Link to="/reviews"><button 
                                className="read-more-reviews-button"
                                onClick={(e) => this.togglePanel()}>Read More Reviews</button>
                                </Link> <Link to="/addreview"><button className="add-a-review-button">Add a Review</button></Link>

                                {this.state.open ? <div className="">{eachReview}</div> : null}
                            </div>
                        </div>
                </div>
            )
        })

        // DISPLAY CARDS
            return <div className="listings-container">{allListingsCards}</div>
        
    }
}

export default Listing;