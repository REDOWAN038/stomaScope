import React from 'react'
import { Facebook, Twitter, GitHub, Instagram } from '@material-ui/icons'
import "../../css/tailwind.css"

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className='w-screen px-6 mt-4 mb-2 lg:w-large lg:mx-auto'>
      <div className='my-6'>
        <i class="fa-solid fa-leaf text-sgreen-100"></i><span className='ml-2 uppercase font-bold text-sm'> stomascope</span>
      </div>
      <h1 className='font-semibold tracking-wide mb-4'>Contact Us</h1>
      <ul className='flex gap-4'>
        <li><a href='https://www.facebook.com' /><Facebook style={{ color: '#3E6553', fontSize: '1.5rem' }} /></li>
        <li><a href='https://www.twitter.com' /><Twitter style={{ color: '#3E6553', fontSize: '1.5rem' }} /></li>
        <li><a href='https://www.github.com' /><GitHub style={{ color: '#3E6553', fontSize: '1.5rem' }} /></li>
        <li><a href='https://www.instagram.com' /><Instagram style={{ color: '#3E6553', fontSize: '1.5rem' }} /></li>
      </ul>
      <p className='text-xs font-light tracking-wider text-gray-600 text-center my-8'>© {year} Stomascope. All rights reserved.</p>
    </div>
  )
}

export default Footer