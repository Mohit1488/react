import React from 'react';
import "./Header.css"

function Header(props)
{
	return(
	<header className="Header__header">
            <h2>{props.heading}</h2>
    </header>
	);
}

export default Header;