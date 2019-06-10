import React, { Component } from 'react';

class Featured extends Component {
    render() {
        return (
            <div>
                <Link to={"/Showpage/" + stay.name}>
                <div className="featured-icons">
                    <p>Price</p>
                    <img src={stay.image} alt="accomodation image" className="featured-image"/>
                    <h5 className="featured-location">Location</h5>
                </div>
                </Link>
            </div>
        );
    }
}

export default Featured;