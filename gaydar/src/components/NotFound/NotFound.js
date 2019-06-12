import React, { Component } from 'react';
import './NotFound.css';
import { Link} from 'react-router-dom';

class NotFound extends Component {
    render() {
        return (
            <div>
                <div className="nf-image">
                    <div className="overlay">

                    
                    <div className="nf-container">
                        <div className="nf-main-blurb">
                            <h1 className="nf-title">404</h1>
                            <p className="nf-catch-phrase">Page Not Found</p>
                            <Link to="/home"><button className="places-to-stay-redirect">Return Home</button></Link>
                        </div>
                    </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default NotFound;