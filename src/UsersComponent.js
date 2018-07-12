import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UsersComponent extends Component {
    render() {
        return (
            <div>
                <h1>This is the UsersComponents</h1>
                <Link to="/feed">take me back to the feed plz</Link>
            </div>
        )
    }
}

export default UsersComponent;