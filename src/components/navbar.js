import React from "react";
import './navbar.css';


const Navbar = () => {


    return (
        <div className="navigation w-full h-10 flex justify-between">
            <span className="text-xl text-blue-500">Logo</span>
            <ul className="flex mx-7">
                <li className=""><a className="" href="">ABOUT</a></li>
                <li className=""><a className="" href="">SERVICES</a></li>
                <li className=""><a className="" href="">PRODUCTS</a></li>
                <li className=""><a className="" href="">BLOGS</a></li>
            </ul>

        </div>
    );
}

export default Navbar;