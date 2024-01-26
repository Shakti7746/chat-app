import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Chat App</span>
      <div className="user">
        <img src="https://pixels.com/images/overview/apparel/womensTshirts002.jpg" alt="" />
        <span>John</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
