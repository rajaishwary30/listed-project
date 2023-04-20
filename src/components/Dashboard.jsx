import dashboard from "../assets/dashboard_icon.png"
import transactions from "../assets/transactions.png"
import schedules from "../assets/schedule_icon.png"
import users from "../assets/user_icon.png"
import settings from "../assets/setting_icon.png"
import icon1 from "../assets/icon1.png"
import icon2 from "../assets/icon2.png"
import icon3 from "../assets/icon3.png"
import icon4 from "../assets/icon4.png"

import React from 'react'
export default function Dashboard() {
return (
<div className = 'grid grid-col-1 sm:grid-cols-5 h-screen w-full bg-custom5'>
<div className='sm:col-span-1 hidden sm:block bg-black m-5 rounded-30'>
    <p className='text-white text-3xl font-bold flex p-10'>Board.</p>
    <p className= 'text-white font-bold flex gap-4 ml-10'><img className="w-5 h-5" src={dashboard} />Dashboard</p>
    <p className= 'text-white flex gap-4 ml-10 mt-5'><img className="w-5 h-5" src={transactions} />Transactions</p>
    <p className= 'text-white flex gap-4 ml-10 mt-5'><img className="w-5 h-5" src={schedules} />Schedules</p>
    <p className= 'text-white flex gap-4 ml-10 mt-5'><img className="w-5 h-5" src={users} />Users</p>
    <p className= 'text-white flex gap-4 ml-10 mt-5'><img className="w-5 h-5" src={settings} />Settings</p>
    <p className = 'text-white flex pl-10 mt-40'>Help</p>
    <p className = 'text-white flex pl-10 mt-1'>Contact Us</p>
</div>
<div className='mt-10 font-bold text-lg'>Dashboard</div>
<div>
    <input className="absolute rounded-10 mt-10 ml-40 bg-white" type="text" placeholder="  Search..."/>
</div>

{/* <div className='sm:col-span-1 hidden sm:block bg-custom1 m-10 rounded-20 h-30'>
    <p className= 'flex gap-2 pl-10'><img className="w-5 h-5" src={icon1} />Total Revenues</p>
</div>
<div className='sm:col-span-1 hidden sm:block bg-custom2 m-10 rounded-20 h-30'>
    <p className= 'flex gap-2 pl-10'><img className="w-5 h-5" src={icon2} />Total Transactions</p>
</div>
<div className='sm:col-span-1 hidden sm:block bg-custom3 m-10 rounded-20 h-30'>
    <p className= 'flex gap-2 pl-10'><img className="w-5 h-5" src={icon3} />Total Likes</p>
</div>
<div className='sm:col-span-1 hidden sm:block bg-custom4 m-10 rounded-20 h-30'>
    <p className= 'flex gap-2 pl-10'><img className="w-5 h-5" src={icon4} />Total Users</p>
</div> */}
</div>
)
}
