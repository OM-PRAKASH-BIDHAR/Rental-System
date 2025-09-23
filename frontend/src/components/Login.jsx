import React, { useState } from 'react'

const Login =() => {

  const[isLoginMode, setIsLoginMode] = useState(true);
  return (
    <div className='w-[430px] bg-white p-8 rounded-2x1 shadow-lg'>
      {/* Header Title */}
      <div className='flex justify-center mb-4'>
        <h2 className='text-3x1 font-semibold text-center'>{isLoginMode ? 'Login' : 'Sign Up'}</h2>
      </div>

      {/* Tab Controls */}
      <div className='relative flex h-12 mb-6 bolder border-gray-300 rounded-full overflow-hidden'>
        <button onClick={() => setIsLoginMode(true)} className={`w-1/2 text-lg font-medium transition-all z-10 ${isLoginMode ? "text-white" : "text-black"}`}>
          Login
        </button>

        <button onClick={() => setIsLoginMode(false)} className={`w-1/2 text-lg font-medium transition-all z-10 ${!isLoginMode ? "text-white" : "text-black"}`}>
          Sign Up
        </button>

        <div className={`absolute top-0 h-full w-1/2 rounded-full bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 ${isLoginMode ? "left-0" : "left-1/2"}`}></div>
      </div>

      {/* Form Section */}

      <form className='space-y-4'>
        {!isLoginMode && (
          <input type="text" placeholder='Name' required className='w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400'/>
        )}

        {/* Shared inout Field */}
        <input type="text" placeholder='Email Address' required className='w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400'/>
        <input type="password" placeholder='Password' required className='w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400'/>

        {/* SignUp Field */}
        {!isLoginMode && (
          <input type="password" placeholder='Confirm Password' required className='w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400'/>
        )}

        {/* Forget Password for Login */}
          {isLoginMode && (
            <div className='text-right'>
              <button>
              <p className='texgt-cyan-600 hover:underline'>Forget Password?</p>
              </button>
            </div>
          )}


        {/* Shared Button */}
        <button className='w-full p-3 bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 text-white rounded-full text-lg font-medium hover:opacity-90 transition-'>
          {isLoginMode ? 'Login' : 'Sign Up'}
        </button>

        {/* Switch Link */}
        <p className='text-center text-gray-600'>{isLoginMode ? "Don't have an account? " : "Already have an account. "}
          <a href="#" onClick={(e)=> setIsLoginMode(!isLoginMode)} className='text-cyan-600 hover:underline'>
            {isLoginMode ? 'SignUp Now' : 'Login'}
          </a>
        </p>
      </form>
    </div>
  )
}

export default Login
