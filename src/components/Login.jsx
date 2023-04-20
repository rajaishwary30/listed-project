import google from "../assets/search.png"
import apple from "../assets/apple.png"
import {Link} from 'react-router-dom'
import React from 'react'

export default function Login() {
return (
<div className = 'grid grid-col-1 sm:grid-cols-5 h-screen w-full'>
<div className='sm:col-span-2 hidden sm:block bg-black'>
<p className='text-white text-6xl font-bold flex justify-center items-center h-full'>Board.</p>
</div>
<div className='sm:col-span-3 bg-custom h-screen flex-col'>
<div className='w-2/5 mx-auto mt-6'>
<h2 className='text-4xl font-bold mt-20'>Sign In</h2>
</div>
<div className='w-2/5 mx-auto mt-1 mb-4'>
<p>Sign in to your account</p>
</div>
<div className='flex flex-col items-center'>
<div className='w-2/5 mx-auto mb-4'>
<div className='flex justify-between text-xs'>
<button className='border w-1/2 mr-2 py-2 bg-white text-custom-gray p-2 rounded-10 flex items-center justify-center gap-3 align-middle'><img className="w-5" src={google} />Sign in with Google</button>
<button className='border w-1/2 mr-2 py-2 bg-white text-custom-gray p-2 rounded-10 flex items-center justify-center gap-3 align-middle'><img className="w-5" src={apple} />Sign in with Apple</button>
</div>
</div>
<form className='w-2/5 mx-auto bg-white p-4 rounded-20'>
<div className = 'flex flex-col py-2'>
<label>Email address</label>
<input className='p-1 bg-custom rounded-10 mt-1.5' type="text"/>
</div>
<div className = 'flex flex-col py-2'>
<label>Password</label>
<input className = 'p-1 bg-custom rounded-10 mt-1.5' type="password" />
</div>
<p className='text-custom-blue'>Forgot password?</p>
{/* <button className='border w-full my-5 py-2 bg-black text-white rounded-10'> Sign In</button> */}
<Link to='/dashboard'>
<button className='border w-full my-5 py-2 bg-black text-white rounded-10'> Sign In</button>
</Link>
</form>
<p className = 'mt-3'><span className='text-custom-gray'>Don't have an account?</span> <span className='text-custom-blue'>Register here</span></p>
</div>
</div>
</div>
)
}