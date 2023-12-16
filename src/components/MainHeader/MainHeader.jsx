/** @format */

import React from 'react'
import logo from '../../assets/images/Felix Techlabs-01 14.png'

const MainHeader = () => {
	return (
		<>
			<div className='flex border-2 border-red-500 justify-between items-center h-24 px-4  !max-w-[1240px] mx-auto '>
				{/* <img className=' left-8 fixed' src={logo} alt='' /> */}
				<div>
					<img
						className='border-2 border-red-500 -mt-[1.99rem] fixed'
						src={logo}
						alt=''
					/>
				</div>

				<ul className='flex border-2'>
					<li className='p-4'>Services</li>
					<li className='p-4'>Work</li>
					<li className='p-4'>Approach</li>
					<li className='p-4'>Blogs</li>
					<li className='p-4'>Career</li>
					<li className='p-4'>Contact us</li>
				</ul>
			</div>
		</>
	)
}

export default MainHeader
