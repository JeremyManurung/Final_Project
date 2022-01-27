import React from 'react'
import {useNavigate} from 'react-router-dom';
import '../App.css'
import { Link, NavLink } from 'react-router-dom';
import { useContext} from 'react';
import { Navigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

function SHeader() {
    const navigate = useNavigate();

    const {
        loadingPoin,
        setLoadingPoin,
	} = useContext(AppContext);

    const logoutHandler = () => {
        localStorage.removeItem("token");
        setLoadingPoin(!loadingPoin)
        navigate('/')
    }

    const isLogged = !!localStorage.getItem('token');
    
    return (
        <div style={{boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"}}>
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
                    Sign In
                    </Link>
                </li>
                
            : <li>
                    <Link
                    onClick={() => { logoutHandler() }}
                    to="/"
                    style={{backgroundColor:"#FF872E", textDecoration:"none"}}
                    class="inline-block border hover:bg-white hover:bg-opacity-25 text-white font-light w-40 text-center px-6 py-1 text-lg rounded-full"
                    >
                    Log Out
                    </Link>
                </li>  }
               
               
                </ul>
            </header>
        </div>
    )
}

export default SHeader
