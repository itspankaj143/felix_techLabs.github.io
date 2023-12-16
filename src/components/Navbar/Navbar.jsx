/** @format */
import './Navbar.css'

import img1 from '../../assets/images/pexels-mikhail-nilov-7989682_AdobeExpress 2 (1).png'
import img2 from '../../assets/images/video__1__AdobeExpress 2 (1).png'
import img3 from '../../assets/images/video_AdobeExpress 3 (1).png'
import gif1 from '../../assets/images/gif1.gif'
import gif2 from '../../assets/images/gif2.gif'
import gif3 from '../../assets/images/gif3.gif'
import Ellipse1 from '../../assets/images/Ellipse1.png'
import Ellipse2 from '../../assets/images/Ellipse2.png'
import Ellipse3 from '../../assets/images/Ellipse3.png'

import logo from '../../assets/image/LOGO.png'
import menu from '../../assets/image/Menu.svg'

// import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import './styles.css'

// import required modules
import { Mousewheel, Pagination } from 'swiper/modules'

export default function Navbar() {
	return (
		<>
			{/* NavBar */}
			<div
				className='bg-[#FFFFFF] sticky  top-0 z-50 w-[100%] h-[72px] px-[28px] py-[31px] flex justify-between items-center md:flex md:justify-between md:items-center md:h-[72px] md:px-[170px] md:py-[50px] '
			>
				<div>
					<img className='w-[103px] h-27px]' src={logo} alt='' />
				</div>
				<div>
					<img className='w-[24px] h-[24px]' src={menu} alt='' />
				</div>
			</div>
		</>
	)
}
