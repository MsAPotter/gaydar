import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FaAlignRight } from 'react-icons/fa';

class Navbar extends Component {
    constructor(props){
        super(props)

        this.state = {
            isOpen: false
        }
    }
    handleToggle = () => {
        this.setState({isOpen: !this.state.isOpen})
    }
    
    render() {
        return (
            <div>
                <NavLink className='active-link' to='/home'>
                    <h1 className="home-title">Qu[H]eer</h1>
                </NavLink>

                <button><FaAlignRight 
                className="nav-icon"
                onClick={this.handleToggle}/></button>
            </div>
            // <div>
            //     <div className="App-nav">
            //     <nav className='nav-left'>
            //         <NavLink className='active-link' to='/home'>
            //         Home
            //         </NavLink>
            //         <NavLink className='active-link' to='/listings'>
            //         Accommodations
            //         </NavLink>
            //         </nav>

            //         <nav className='nav-right'>
            //         <NavLink className='active-link' to='/newlisting'>
            //         Add a Place
            //         </NavLink>
            //         <NavLink className='active-link' to='/addreview'>
            //         Add a Review
            //         </NavLink>
            //     </nav>
            //     <div className="fix"></div>
            //     </div>
            // </div>
        );
    }
}

export default Navbar;