import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, User, Package, Heart, MessageSquare, Bell, Settings, HelpCircle, LogOut, Star, CreditCard, Shield } from 'lucide-react';

function UserDashboard() {
  // Mock data
  const orders = [
    { id: 1, status: 'Delivered', date: '2023-05-15', total: '$125.99' },
    { id: 2, status: 'Shipped', date: '2023-06-02', total: '$89.50' },
    { id: 3, status: 'Processing', date: '2023-06-10', total: '$45.75' }
  ];

  const recommendations = [
    { id: 1, name: 'Wireless Headphones', price: '$79.99', rating: 4.5 },
    { id: 2, name: 'Smart Watch', price: '$149.99', rating: 4.2 },
    { id: 3, name: 'Fitness Tracker', price: '$59.99', rating: 4.0 }
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-5'>
      {/* Header */}
      <header className='flex justify-between items-center bg-white p-5 rounded-xl shadow-sm'>
        <div>
          <h1 className='text-2xl font-bold text-gray-800'>Welcome back, Alex</h1>
          <p className='text-gray-500'>Here's what's happening with your account</p>
        </div>
        <div className='flex items-center gap-4'>
          <motion.button 
            className='p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Bell size={20} />
          </motion.button>
          <motion.div 
            className='relative'
            whileHover={{ scale: 1.05 }}
          >
            <img 
              src='https://randomuser.me/api/portraits/men/32.jpg' 
              alt='User Avatar' 
              className='h-12 w-12 rounded-full border-2 border-blue-100 object-cover'
            />
            <span className='absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white'></span>
          </motion.div>
        </div>
      </header>
      
      {/* Main Dashboard Content */}
      <div className='mt-5 grid grid-cols-1 lg:grid-cols-3 gap-5'>
        {/* Left Column - Quick Actions */}
        <div className='space-y-5'>
          <motion.div 
            className='bg-white p-5 rounded-xl shadow-sm'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className='text-lg font-semibold text-gray-800 mb-4'>Quick Actions</h2>
            <div className='grid grid-cols-2 gap-3'>
              <motion.button 
                className='flex flex-col items-center justify-center p-4 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100'
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <ShoppingCart size={24} />
                <span className='mt-2 text-sm'>My Orders</span>
              </motion.button>
              
              <motion.button 
                className='flex flex-col items-center justify-center p-4 rounded-lg bg-red-50 text-red-600 hover:bg-red-100'
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Heart size={24} />
                <span className='mt-2 text-sm'>Wishlist</span>
              </motion.button>
              
              <motion.button 
                className='flex flex-col items-center justify-center p-4 rounded-lg bg-green-50 text-green-600 hover:bg-green-100'
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Package size={24} />
                <span className='mt-2 text-sm'>Track Order</span>
              </motion.button>
              
              <motion.button 
                className='flex flex-col items-center justify-center p-4 rounded-lg bg-purple-50 text-purple-600 hover:bg-purple-100'
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageSquare size={24} />
                <span className='mt-2 text-sm'>Support</span>
              </motion.button>
            </div>
          </motion.div>
          
          {/* Recent Orders */}
          <motion.div 
            className='bg-white p-5 rounded-xl shadow-sm'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <div className='flex justify-between items-center mb-4'>
              <h2 className='text-lg font-semibold text-gray-800'>Recent Orders</h2>
              <button className='text-sm text-blue-600 hover:underline'>View All</button>
            </div>
            <div className='space-y-3'>
              {orders.map((order) => (
                <motion.div 
                  key={order.id}
                  className='flex justify-between items-center p-3 rounded-lg hover:bg-gray-50'
                  whileHover={{ x: 5 }}
                >
                  <div>
                    <p className='font-medium'>Order #{order.id}</p>
                    <p className='text-sm text-gray-500'>{order.date}</p>
                  </div>
                  <div className='text-right'>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                      order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {order.status}
                    </span>
                    <p className='font-medium mt-1'>{order.total}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Middle Column - Account Overview */}
        <div className='space-y-5'>
          <motion.div 
            className='bg-white p-5 rounded-xl shadow-sm'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <h2 className='text-lg font-semibold text-gray-800 mb-4'>Account Overview</h2>
            <div className='grid grid-cols-2 gap-4'>
              <div className='p-4 rounded-lg bg-indigo-50 text-indigo-800'>
                <div className='flex items-center justify-between'>
                  <span className='text-sm'>Loyalty Points</span>
                  <Star size={18} className='text-yellow-500' />
                </div>
                <p className='text-2xl font-bold mt-2'>1,250</p>
                <p className='text-xs mt-1'>Silver Tier</p>
              </div>
              
              <div className='p-4 rounded-lg bg-teal-50 text-teal-800'>
                <div className='flex items-center justify-between'>
                  <span className='text-sm'>Wallet Balance</span>
                  <CreditCard size={18} className='text-teal-500' />
                </div>
                <p className='text-2xl font-bold mt-2'>$245.75</p>
                <p className='text-xs mt-1'>+ $50.00 this month</p>
              </div>
            </div>
            
            <div className='mt-4 p-4 rounded-lg bg-gray-50'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                  <Shield size={18} className='text-green-600' />
                  <span className='text-sm font-medium'>Account Security</span>
                </div>
                <span className='text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full'>Strong</span>
              </div>
              <div className='mt-3 h-2 w-full bg-gray-200 rounded-full overflow-hidden'>
                <motion.div 
                  className='h-full bg-green-500'
                  initial={{ width: 0 }}
                  animate={{ width: '90%' }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
            </div>
          </motion.div>
          
          {/* Support Card */}
          <motion.div 
            className='bg-gradient-to-r from-blue-600 to-blue-400 p-5 rounded-xl text-white'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <div className='flex items-start justify-between'>
              <div>
                <h2 className='text-lg font-semibold mb-2'>Need Help?</h2>
                <p className='text-sm opacity-90 mb-4'>Our support team is available 24/7 to assist you</p>
                <motion.button
                  className='px-4 py-2 bg-white text-blue-600 rounded-lg text-sm font-medium'
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Contact Support
                </motion.button>
              </div>
              <MessageSquare size={48} className='opacity-20' />
            </div>
          </motion.div>
        </div>
        
        {/* Right Column - Recommendations and Settings */}
        <div className='space-y-5'>
          {/* Personalized Recommendations */}
          <motion.div 
            className='bg-white p-5 rounded-xl shadow-sm'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <div className='flex justify-between items-center mb-4'>
              <h2 className='text-lg font-semibold text-gray-800'>Recommended For You</h2>
              <button className='text-sm text-blue-600 hover:underline'>See All</button>
            </div>
            <div className='space-y-4'>
              {recommendations.map((item) => (
                <motion.div 
                  key={item.id}
                  className='flex gap-3 p-3 rounded-lg hover:bg-gray-50'
                  whileHover={{ x: 5 }}
                >
                  <img 
                    src={`https://picsum.photos/seed/${item.id}/80/80`} 
                    alt={item.name} 
                    className='w-16 h-16 rounded-lg object-cover'
                  />
                  <div>
                    <h3 className='font-medium'>{item.name}</h3>
                    <div className='flex items-center mt-1'>
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={14} 
                          className={i < Math.floor(item.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} 
                        />
                      ))}
                      <span className='text-xs text-gray-500 ml-1'>{item.rating}</span>
                    </div>
                    <p className='text-blue-600 font-medium mt-1'>{item.price}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Quick Settings */}
          <motion.div 
            className='bg-white p-5 rounded-xl shadow-sm'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <h2 className='text-lg font-semibold text-gray-800 mb-4'>Quick Settings</h2>
            <div className='space-y-2'>
              <motion.button 
                className='flex items-center gap-3 w-full p-3 rounded-lg hover:bg-gray-50 text-left'
                whileHover={{ x: 5 }}
              >
                <User size={18} className='text-gray-600' />
                <span>Profile Settings</span>
              </motion.button>
              
              <motion.button 
                className='flex items-center gap-3 w-full p-3 rounded-lg hover:bg-gray-50 text-left'
                whileHover={{ x: 5 }}
              >
                <Settings size={18} className='text-gray-600' />
                <span>Account Preferences</span>
              </motion.button>
              
              <motion.button 
                className='flex items-center gap-3 w-full p-3 rounded-lg hover:bg-gray-50 text-left'
                whileHover={{ x: 5 }}
              >
                <HelpCircle size={18} className='text-gray-600' />
                <span>Help Center</span>
              </motion.button>
              
              <motion.button 
                className='flex items-center gap-3 w-full p-3 rounded-lg hover:bg-gray-50 text-left text-red-500'
                whileHover={{ x: 5 }}
              >
                <LogOut size={18} />
                <span>Sign Out</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;