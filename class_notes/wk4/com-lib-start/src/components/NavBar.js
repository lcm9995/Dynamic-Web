import React from 'react';
const NavBar = (props)=>{
    return (
        <nav className="navbar">
            <ul>
                {props.map((item, index)=> {
                    <li key={index}>
                        <a href = {item.href}>{item.text}</a>
                    </li>
                })}
            </ul>
        </nav>
    )
}
export default NavBar;