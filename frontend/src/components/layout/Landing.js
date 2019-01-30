import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {
    render() {
        return (
            <div className="landing">
                <h1>Char Help</h1>
                <p>Build your DnD Character</p>
                <hr />
                <Link to="/createcharacter">
                    Build
                </Link>
            </div>
        )
    }
}

export default Landing;