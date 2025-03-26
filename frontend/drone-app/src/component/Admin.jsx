import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import Drone1 from '../assets/dron1.png';

function Admin() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='flex h-screen w-full p-3 relative bg-slate-600'>
      {/* Sidebar */}
      <div className={`fixed md:relative  w-64 bg-black rounded-3xl text-white p-5  text-center transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        <button className='md:hidden mb-4' onClick={() => setIsOpen(false)}>Close</button>

        <h3 className='mb-3'>sidebar</h3>

        <div className="btn flex flex-col gap-10  ">
          <button className='flex items-center gap-2 h-12 w-full bg-white p-3 rounded-xl text-black font-semibold hover:shadow-md hover:shadow-slate-400 transition-all'><img src='' alt='' className='h-6 w-6' />notification</button>
          <button className='flex items-center gap-2 h-12 w-full bg-white p-3 rounded-xl text-black font-semibold hover:shadow-md hover:shadow-slate-400 transition-all'><img src='' alt='' className='h-6 w-6' /> total prodict list</button>
          <button className='flex items-center gap-2 h-12 w-full bg-white p-3 rounded-xl text-black font-semibold hover:shadow-md hover:shadow-slate-400 transition-all'><img src='' alt='' className='h-6 w-6' /> total user list</button>
          <button className='flex items-center gap-2 h-12 w-full bg-white p-3 rounded-xl text-black font-semibold hover:shadow-md hover:shadow-slate-400 transition-all'><img src='' alt='' className='h-6 w-6' /> total user list</button>
        </div>

        <div className='absolute bottom-5 left-5 h-60 right-5 bg-yellow-200 p-4 rounded-lg shadow-md'>
          
        </div>
        
      </div>

      <div className='flex-1 bg-slate-900 p-5 md:ml-10 rounded-3xl'>
        <div className='flex items-center justify-between mb-5 md:hidden'>
          <button onClick={() => setIsOpen(true)}>
            <Menu size={24} className='text-white' />
          </button>
          <h1 className='text-white'>Dashboard</h1>
        </div>
        <header className='h-14 w-full bg-white rounded-lg flex justify-between items-center  shadow-md'>
          <h1 className='text-lg font-semibold text-gray-700'>Admin Dashboard</h1>
          <div className='flex items-center gap-3 p-2 bg-sky-950 rounded-lg text-black font-semibold hover:shadow-md hover:shadow-slate-400 transition-all cursor-pointer overflow-hidden'>
            <img src={Drone1} alt='' className='h-10 w-10 border-[2px] border-black rounded-full bg-slate-200' />
            <span className='text-gray-600'>sameer123@gmail.com</span>
          </div>
        </header>
        
        {/* Dashboard Content */}
        <div className='mt-5 grid grid-cols-1 md:grid-cols-3 gap-5'>
          <div className='p-5 bg-white rounded-lg shadow-md text-gray-700'>Total Orders: 150</div>
          <div className='p-5 bg-white rounded-lg shadow-md text-gray-700'>Pending Orders: 10</div>
          <div className='p-5 bg-white rounded-lg shadow-md text-gray-700'>Delivered Orders: 120</div>
        </div>

        <div className='mt-5 bg-white p-5 rounded-lg shadow-md'>
          <h2 className='text-lg font-semibold text-gray-700 mb-3'>Recent Activities</h2>
          <ul className='text-gray-600'>
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Admin;
