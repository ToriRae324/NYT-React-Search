import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => (
    
    <header className="jumbotron header text-center shadow">
    
        <h1>NYT Article Scrubber</h1>
        <h3> Search for and Save Articles</h3>
        <br />
        <br />

       <Link to="/search"> <button type="button" class="btn btn-light">Search</button>
        </Link>
        <Link to="/saved">
        <button type="button" class="btn btn-dark">Saved</button>
        </Link>
        
    </header>

);

export default Header;