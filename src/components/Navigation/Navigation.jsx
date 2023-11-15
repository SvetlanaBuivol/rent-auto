import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/catalog">Catalog</NavLink>
            </li>
            <li>
                <NavLink to="/favorites">Favorites</NavLink>
            </li>
        </ul>
    )
}

export default Navigation; 