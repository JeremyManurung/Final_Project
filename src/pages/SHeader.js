import React from 'react'
import '../App.css'
import { Link, NavLink } from 'react-router-dom';

function Header() {
    const logoutHandler = () => {
        localStorage.removeItem("token");
    }

    const isLogged = !!localStorage.getItem('token');
    
    return (
        <div>
        <header style={{padding:"20px 80px 0 80px",backgroundColor:"white"}} class="flex items-center">
            <div>
                <Link
                to="/"
                style={{textDecoration:"none",color:"black"}}
                >
                <h1 style={{fontSize:"25px"}}>POL<span style={{color:"#C17C14"}}>GENT</span></h1> 
                </Link> 
            </div>
                <ul class="flex items-center">
                <li>
                    <a
                    style={{textDecoration:"none"}}
                    class="href-bantuan text-black hover:text-teal-500 text-lg px-4 py-3"
                    href="/"
                    >Home</a>
                </li>
                <li>
                    <Link
                    to="/Reedem"
                    style={{textDecoration:"none"}}
                    class="text-black hover:text-teal-500 text-lg px-4 py-3"
                    >Reedem</Link>
                </li>
                <li>
                    <Link
                    to="/faq"
                    style={{textDecoration:"none"}}
                    class="text-black hover:text-teal-500 text-lg px-4 py-3"
                    href="/features.html"
                    >FAQ</Link>
                </li>
                <li>
                    <Link 
                    to="/userhistory"
                    style={{textDecoration:"none"}}
                    class="text-black hover:text-teal-500 text-lg px-4 py-3"
                    
                    >History</Link>
                </li>

                 <li>
                    <Link 
                    to="/product"
                    style={{textDecoration:"none"}}
                    class="text-black hover:text-teal-500 text-lg px-4 py-3"
                    
                    >Product</Link>
                </li>
                </ul>
                <ul class="flex ml-auto items-center mt-2">
                {!isLogged ? 
                <li>
                    <Link
                    to="/login"
                    style={{backgroundColor:"#FF872E", textDecoration:"none"}}
                    class="inline-block  border hover:bg-white hover:bg-opacity-25 text-white font-light w-40 text-center px-6 py-1 text-lg rounded-full mr-4"
                    >
                    Sign Up
                    </Link>
                </li>
                
            : <li>
                    <p
                    onClick={() => { logoutHandler() }}
                    style={{backgroundColor:"#FF872E", textDecoration:"none"}}
                    class="inline-block border hover:bg-white hover:bg-opacity-25 text-white font-light w-40 text-center px-6 py-1 text-lg rounded-full"
                    >
                    Log Out
                    </p>
                </li>  }
               
               
                </ul>
            </header>
        </div>
    )
}

export default Header
