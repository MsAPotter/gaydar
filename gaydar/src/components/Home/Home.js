import React, { Component } from 'react';
import Featured from '../Featured/Featured'

class Home extends Component {
    render() {
        return (
            <div>
                <nav className="navbar">
                    <img className="logo"></img>
                    <ul className="nav-items">
                        <li>Home</li>
                        <li>Places to Stay</li>
                    </ul>
                </nav>

                <div className="home-image">
                    <div className="home-main-blurb">
                        <h1 className="home-title">Gaydar</h1>
                        <hr className="home-hr"></hr>
                        <p className="home-catch-phrase">Find travel accomodations that cater to the LGBT community all in one spot!</p>
                        <br/>
                        <p>Add listings you find in your travels to help others </p>
                        <button className="places-to-stay-redirect">Accomodations</button>
                    </div>
                </div>

                <div className="home-featured">
                    <h1 className="featured-title">Featured Stays</h1>

                    let featured = [];
                    for (let i=0; i<this.props.feature; i++) {
                        featured.push(<Featured />)
                    }
                    return <div className="featured-icons">{featured}</div>
                </div>
                
            </div>
        );
    }
}

export default Home;