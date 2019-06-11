import React, { Component } from 'react';
import './Listing.css';
import {Link} from 'react-router-dom';
// import axios from 'axios';

class Listing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listings: []
        }
    }

    // componentDidMount() {
    //     axios.get('//localhost:4000/api/accomodations/')

    //     .then((res) => {
    //         console.log(res)
    //         this.setState({
    //             listings: res.data
    //         })
    //         console.log(res.data)
    //     })
    // }

    render() {

        let allListings = [];

        for (let i=0; i<this.state.listings.length; i++) {
            allListings.push(this.props.listings[i])
        }

        let allListingsCards = allListings.map((listing, index) => {
            return (
                <div>
                    {/* <Link to={accomodation.url}>
                        <div className="listing-icons">
                            <img src={accomodation.image} alt="accomodation image" className="listing-image"/>
                            <h5 className="listing-location">Test</h5>
                        </div>
                    </Link> */}

                </div>

            )
        })
            // return <div className="listing-icons">{allListingsCards}</div>
           return(<div></div>)
    }
}

export default Listing;