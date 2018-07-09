import React from 'react';
import { Link } from 'react-router-dom';
const Header = ()=>{
    return(
        <div className="nav">
            <ul className="block">
                <Link to="/">Home</Link>
                <Link to="/create">Create</Link>
            </ul>
        </div>
    )
}
export default Header;