import React, { Component } from 'react';
import './Home.css';
import { Link} from 'react-router-dom';
// import Featured from '../Featured/Featured.js';


class Home extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <div>
                <div className="home-image">
                    <div className="home-container">
                        <div className="home-main-blurb">
                            {/* <h1 className="home-title">Gaydar</h1> */}
                            <h1 className="home-title">Qu[H]eer</h1>
                            {/* <hr className="home-hr"></hr> */}
                            <p className="home-catch-phrase">Find travel accomodations that cater to the LGBT community all in one spot!</p>
                            {/* <br/> */}
                            {/* <p>Add listings you find in your travels to help others </p> */}
                            <Link to="/listings"><button className="places-to-stay-redirect">Accommodations</button></Link>
                        </div>
                    </div>
                </div>

                <div className="home-featured">
                    <h1 className="featured-title">Featured Stays</h1>

                    {/* let featured = [];
                    for (let i=0; i < 3; i++) {
                        featured.push(<Featured />)
                    } */}
                    {/* return <div className="featured-icons">{featured}</div> */}
                </div>
                
            </div>
        );
    }
}

export default Home;