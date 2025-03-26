import React from "react";
import { Link } from "react-router-dom"; 
import { motion } from "framer-motion";
import LandingBG from "../assets/Landing.jpg";
import Bgvideo from "../assets/drone_video.mp4";

function Landing() {
  return (
    <div className="relative h-screen w-screen bg-[#4E545C] text-white flex flex-col items-center justify-center">
      <motion.img 
        src={LandingBG} 
        alt="Landing Background" 
        className="h-full w-full absolute object-cover bg-cover bg-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

    
      <motion.div 
        className="absolute flex flex-col justify-center items-center gap-12"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h1 className="text-7xl font-thin text-transparent bg-clip-text bg-gradient-to-b from-white to-green-200">
          Sarus Aerospace
        </h1>
        <motion.p 
          className="text-lg max-w-2xl text-center backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Sarus Aerospace Pvt. Ltd., established in 2022 in Belagavi, 
          Karnataka, specializes in the manufacture of drone accessories and commercial drones. 
          Focused on innovation in UAV technology.
        </motion.p> 
      </motion.div>

   
      <motion.div 
        className="footer absolute flex justify-between items-center px-6 top-[70%] w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="txt h-full w-96">
          <div className="btns flex gap-6">
          
            <Link to="/register">
              <motion.button 
                className="px-12 py-4 text-lg rounded-full border-2 backdrop-blur-sm hover:translate-y-2 transition duration-500 hover:bg-black glow-on-hover"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Register
              </motion.button>
            </Link>

      
            <Link to="/login">
              <motion.button 
                className="px-12 py-4 text-lg rounded-full border-2 backdrop-blur-sm hover:translate-y-2 transition duration-500 hover:bg-black glow-on-hover"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Login
              </motion.button>
            </Link>
          </div>
        </div>

        <motion.video 
          className="h-[25vh] rounded-3xl object-cover" 
          autoPlay loop muted playsInline
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <source src={Bgvideo} type="video/mp4" />
        </motion.video>
      </motion.div>
    </div>
  );
}

export default Landing;
