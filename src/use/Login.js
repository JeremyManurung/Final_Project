import React from 'react'

function Login() {
    return (
    <div class="antialiased">
    <div class="auth-page">
    <div class="h-screen flex justify-between items-center">
        <div
        class="hidden md:block lg:w-1/3 bg-white h-full auth-background rounded-tr-lg rounded-br-lg"></div>
        <div style={{width: "90vh",paddingRight: "128px"}}>
        <div class="col-sm">
            <form>
            <h2 class="font-normal mb-6 text-3xl text-white">
            Sign In to Your Account
            </h2>
            <div class="mb-4">
                <label class="font-normal text-lg text-white block mb-3"
                >Email Address</label>
                <input 
                type="email" 
                class="auth-form focus:outline-none focus:bg-purple-hover focus:shadow-outline focus:border-purple-hover-stroke focus:text-gray-100"
                placeholder="Masukkan Email"
                ></input>
            </div>
            <div class="mb-6">
            <div class="mb-4">
                <label class="font-normal text-lg text-white block mb-3"
                >Password</label>
                <input 
                type="password"
                class="auth-form focus:outline-none focus:bg-purple-hover focus:shadow-outline focus:border-purple-hover-stroke focus:text-gray-100"
                placeholder="Masukkan Password"
                ></input>
            </div>
            </div>
            <div class="mb-6">
            <div class="mb-4">
                <button
                class="block w-full bg-orange-button hover:bg-green-button text-white font-semibold px-6 py-4 text-lg rounded-full">
                Sign In
                </button>
            </div>
            </div>
            </form>
            <div class="text-center">
            <p class="text-white text-md">
                Don't have account?
                <a href="/register" class="no-underline text-orange-button">Sign Up</a>.
            </p>
            </div>
        </div>
        </div>
    </div>
    </div>
        </div>
    )
}

export default Login
