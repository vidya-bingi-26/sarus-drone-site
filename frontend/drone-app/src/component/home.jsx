import React from 'react'
import Bgvideo from '../assets/drone_video.mp4';
import Drone1 from '../assets/dron1.png';
import { Link } from 'react-router-dom';

function home() {
  return (
    <div className="main h-screen w-full ">

      <section className="video-container h-full w-full relative truncate ">
        <video autoPlay loop muted playsInline className='absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2'>
          <source src={Bgvideo}/>
        </video>
      </section>

      <div className="overlay absolute flex items-center justify-center top-[0] left-[0] w-full h-full bg-gradient-to-b from-gray-200/80 via-transparent to-black">
      <h1 className="text-9xl absolute font-thin text-transparent bg-clip-text bg-gradient-to-b from-white to-black">Sarus Aerospace</h1>
      </div>

      <div className="nav-bar absolute top-0 w-full flex justify-between items-center p-6 text-white">
      <img src={Drone1} alt="Logo" className="h-20 w-20" />

      {/* Navigation Links */}
      <div className="flex space-x-4">
        <Link to="/" className="bg-trsnsperent border-dashed border text-black border-black px-4 py-2 rounded-lg transition duration-[.3s] hover:bg-gray-400 hover:text-black hover:outline outline-offset-2">Home</Link>
        <Link to="/products" className="bg-trsnsperent border-dashed text-black border border-black px-4 py-2 rounded-lg transition duration-[.3s] hover:bg-gray-400 hover:text-black hover:outline outline-offset-2">Shop</Link>
        <Link to="/about" className="bg-trsnsperent border-dashed border text-black border-black px-4 py-2 rounded-lg transition duration-[.3s] hover:bg-gray-400 hover:text-black hover:outline outline-offset-2">About</Link>
        <Link to="/contact" className="bg-trsnsperent border-dashed border text-black border-black px-4 py-2 rounded-lg transition duration-[.3s] hover:bg-gray-400 hover:text-black hover:outline outline-offset-2">Contact</Link>
      </div>

      <div className="flex space-x-4">
          <Link to="/logout" className="bg-gray-700 border-dashed border border-black px-4 py-2 rounded-lg transition duration-[.3s] hover:bg-gray-400 hover:text-black hover:outline outline-offset-2">Logout</Link>
      </div>
      
    </div>

      <section className="content3 grid grid-cols-1 md:grid-cols-2 justify-items-center h-full w-full bg-gradient-to-b from-black to-gray-700">
          <h1 className="text-center absolute text-3xl font-bold text-white">DRONES</h1>
          
          <div className="big-box mt-[15%] h-[30rem] bg-slate-800 rounded-3xl shadow-lg shadow-indigo-500/40 text-center">
            <img src={Drone1} alt="Drone 1" className="w-96" />
            <h1 className="text-white font-thin">Sarus X1</h1>
          </div>
          
          <div className="s-box flex justify-center text-center items-center flex-col w-96 bg-transparent gap-4">
            <div className="b1 h-60 w-96 bg-slate-800 flex flex-col justify-center items-center shadow-2xl rounded-3xl shadow-indigo-500/40">
              <img src={Drone1} alt="Drone 2" className="w-full bg-cover object-cover" />
              <h1 className="text-white absolute font-semibold mt-[25vh]  ">sarus-M1</h1> 
            </div>
            
            <div className="b1 h-60 w-96 bg-slate-800 flex flex-col justify-center items-center shadow-2xl rounded-3xl shadow-indigo-500/40">
              <img src={Drone1} alt="Drone 3" className="w-full bg-cover object-cover" />
              <h1 className="text-white font-semibold absolute mt-[25vh]">sarus-M2</h1> 
            </div>
          </div>
      </section>

      <section className="ourclient w-full h-[50vh] flex gap-10 flex-col items-center justify-center bg-gradient-to-b from-gray-700 to-gray-400">
        <h2 className="text-white text-lg tracking-widest uppercase mb-10">Our Clients</h2>
        <div className="flex gap-10">
          <div className="w-60 h-40 bg-gray-600 flex items-center justify-center rounded-lg shadow-lg shadow-gray-900/50">
            <span className="text-black text-2xl font-bold">F</span>
          </div>
          <div className="w-60 h-40 bg-gray-600 flex items-center justify-center rounded-lg shadow-lg shadow-gray-900/50">
            <span className="text-black text-2xl font-bold">L</span>
          </div>
          <div className="w-60 h-40 bg-gray-600 flex items-center justify-center rounded-lg shadow-lg shadow-gray-900/50">
            <span className="text-black text-2xl font-bold">Y</span>
          </div>
        </div>
        <div className="flex gap-10">
          {/* <div className="w-60 h-40 bg-gray-600 flex items-center justify-center rounded-lg shadow-lg shadow-gray-900/50">
            <span className="text-black text-2xl font-bold">F</span>
          </div>
          <div className="w-60 h-40 bg-gray-600 flex items-center justify-center rounded-lg shadow-lg shadow-gray-900/50">
            <span className="text-black text-2xl font-bold">L</span>
          </div>
          <div className="w-60 h-40 bg-gray-600 flex items-center justify-center rounded-lg shadow-lg shadow-gray-900/50">
            <span className="text-black text-2xl font-bold">Y</span>
          </div> */}
          <p className='w-[60vw] text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus reiciendis soluta temporibus, facere debitis odit totam earum! Odio, magnam sit ea deserunt quisquam porro ipsa perspiciatis cupiditate tenetur quas in.
          Ipsam, voluptatum modi! Vitae, ad eaque saepe, laboriosam quas totam aperiam repellat dolorum asperiores facere accusamus atque labore tempora. Iure vero minus maxime placeat fuga dolores at hic veritatis eligendi.
          Sequi, eos aliquid maxime, placeat deleniti dolore, reprehenderit hic numquam nulla eaque in fuga. Obcaecati, nemo odit iure eveniet nihil quis veniam repellat officiis assumenda repudiandae atque consectetur accusamus eum!</p>
        </div>
      </section>

      <section className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-400 to-white px-6">
        <h2 className="text-black text-3xl font-bold uppercase mb-10">Why Choose Us?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
  
          <div className="w-72 h-60 bg-gray-800 text-white flex flex-col items-center justify-center rounded-lg shadow-lg shadow-gray-900/50 p-6">
            <h3 className="text-xl font-semibold mb-2">High Quality</h3>
            <p className="text-sm">We provide top-notch services with cutting-edge technology and precision.</p>
          </div>

          <div className="w-72 h-60 bg-gray-800 text-white flex flex-col items-center justify-center rounded-lg shadow-lg shadow-gray-900/50 p-6">
            <h3 className="text-xl font-semibold mb-2">Affordable Pricing</h3>
            <p className="text-sm">Our competitive pricing ensures you get the best value for your investment.</p>
          </div>

          <div className="w-72 h-60 bg-gray-800 text-white flex flex-col items-center justify-center rounded-lg shadow-lg shadow-gray-900/50 p-6">
            <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
            <p className="text-sm">We offer 24/7 support to assist you with any queries or concerns.</p>
          </div>
        </div>
      </section>

      <footer className="w-full bg-gray-900 text-white py-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold">Sarus Airospace</h2>
            <p className="text-sm text-gray-400">Innovating for a better future</p>
          </div>

          <nav className="my-4 md:my-0">
            <ul className="flex gap-6 text-sm">
              <li><a href="#" className="hover:text-gray-300">Home</a></li>
              <li><a href="#" className="hover:text-gray-300">About</a></li>
              <li><a href="#" className="hover:text-gray-300">Services</a></li>
              <li><a href="#" className="hover:text-gray-300">Contact</a></li>
            </ul>
          </nav>


          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-gray-300"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-gray-300"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-gray-300"><i className="fab fa-linkedin-in"></i></a>
          </div>

        </div>


        <div className="text-center text-gray-500 text-xs mt-6">
          &copy; {new Date().getFullYear()} SarusAirospace. All rights reserved.
        </div>
      </footer>

      
    </div>
  )
}

export default home
