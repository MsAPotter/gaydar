import React, { Component } from 'react';
import './NotFound.css';
import { Link} from 'react-router-dom';

class NotFound extends Component {
    render() {
        return (
            <div>
                <div className="home-image">
                    <div className="home-container">
                        <div className="home-main-blurb">
                            <h1 className="home-title">404</h1>
                            <p className="home-catch-phrase">Page Not Found</p>
                            <Link to="/home"><button className="places-to-stay-redirect">Return Home</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NotFound;