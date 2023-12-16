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
			<div className='border-2 border-red-500 h-[90vh] max-w-[90%] mx-auto  mt-3'>
				<Swiper
					direction={'vertical'}
					slidesPerView={1}
					spaceBetween={30}
					mousewheel={true}
					pagination={{
						clickable: true,
					}}
					modules={[Mousewheel, Pagination]}
					className='mySwiper'
				>
					{/* First slider */}
					<SwiperSlide>
						<div className='flex !h-[90vh] !w-[100%]  justify-center '>
							<div className='w-[359px] h-[100%] flex flex-col justify-evenly items-start'>
								<div className='w-[359px] h-[207.84px]'></div>
								<div className='h-[107.86px]'></div>
								<button className=' w-[12.25rem] hover:bg-[#ed1c24] hover:text-[white] h-[3.25rem] rounded-[22px] font-[400] text-[1.25rem] font-dm text-[#ed1c24] border-2 border-red-500'>
									Read More
								</button>
							</div>
							<div className='relative flex flex-col justify-evenly items-center  w-[19.305rem]'>
								<img
									className='w-[10.305rem] h-[11.764rem] z-10'
									src={img1}
									alt=''
								/>
								<img className='absolute top-0 -z-10' src={gif1} alt='' />
								<img className='absolute top-14 -z-10' src={Ellipse1} alt='' />
								<img className='absolute bottom-0 -z-10' src={gif3} alt='' />
								<img
									className='absolute bottom-14 -z-10'
									src={Ellipse3}
									alt=''
								/>

								<img
									className='w-[10.305rem] h-[11.764rem]'
									src={img3}
									alt=''
								/>
							</div>
							<div className='relative flex justify-center items-center w-[19.305rem]'>
								<img src={img2} alt='' />
								<img
									className='absolute top-[7.5rem] -z-10'
									src={gif2}
									alt=''
								/>
								<img
									className='absolute top-[10rem] -z-10'
									src={Ellipse2}
									alt=''
								/>
							</div>
						</div>
						bye
					</SwiperSlide>

					{/* Second slider */}
					<SwiperSlide>
						<div className='flex !h-[90vh] !w-[100%]  justify-center '>
							<div className='w-[359px] h-[100%] flex flex-col justify-evenly items-start'>
								<div className='w-[359px] h-[207.84px]'></div>
								<div className='h-[107.86px]'></div>
								<button className=' w-[12.25rem] hover:bg-[#ed1c24] hover:text-[white] h-[3.25rem] rounded-[22px] font-[400] text-[1.25rem] font-dm text-[#ed1c24] border-2 border-red-500'>
									Read More
								</button>
							</div>
							<div className='relative flex flex-col justify-evenly items-center  w-[19.305rem]'>
								<img
									className='w-[10.305rem] h-[11.764rem] z-10'
									src={img1}
									alt=''
								/>
								<img className='absolute top-0 -z-10' src={gif1} alt='' />
								<img className='absolute top-14 -z-10' src={Ellipse1} alt='' />
								<img className='absolute bottom-0 -z-10' src={gif3} alt='' />
								<img
									className='absolute bottom-14 -z-10'
									src={Ellipse3}
									alt=''
								/>

								<img
									className='w-[10.305rem] h-[11.764rem]'
									src={img3}
									alt=''
								/>
							</div>
							<div className='relative flex justify-center items-center w-[19.305rem]'>
								<img src={img2} alt='' />
								<img
									className='absolute top-[7.5rem] -z-10'
									src={gif2}
									alt=''
								/>
								<img
									className='absolute top-[10rem] -z-10'
									src={Ellipse2}
									alt=''
								/>
							</div>
						</div>
						hi
					</SwiperSlide>

					{/* third slider */}
					<SwiperSlide>
						{/* <div className='flex !h-[90vh] !w-[100%]  justify-center '>
							<div className='w-[359px] h-[100%] flex flex-col justify-evenly items-start'>
								<div className='w-[359px] h-[207.84px]'></div>
								<div className='h-[107.86px]'></div>
								<button className=' w-[12.25rem] hover:bg-[#ed1c24] hover:text-[white] h-[3.25rem] rounded-[22px] font-[400] text-[1.25rem] font-dm text-[#ed1c24] border-2 border-red-500'>
									Read More
								</button>
							</div>
							<div className='relative flex flex-col justify-evenly items-center  w-[19.305rem]'>
								<img
									className='w-[10.305rem] h-[11.764rem] z-10'
									src={img1}
									alt=''
								/>
								<img className='absolute top-0 -z-10' src={gif1} alt='' />
								<img className='absolute top-14 -z-10' src={Ellipse1} alt='' />
								<img className='absolute bottom-0 -z-10' src={gif3} alt='' />
								<img
									className='absolute bottom-14 -z-10'
									src={Ellipse3}
									alt=''
								/>

								<img
									className='w-[10.305rem] h-[11.764rem]'
									src={img3}
									alt=''
								/>
							</div>
							<div className='relative flex justify-center items-center w-[19.305rem]'>
								<img src={img2} alt='' />
								<img
									className='absolute top-[7.5rem] -z-10'
									src={gif2}
									alt=''
								/>
								<img
									className='absolute top-[10rem] -z-10'
									src={Ellipse2}
									alt=''
								/>
							</div>
						</div> */}
						hello
					</SwiperSlide>
				</Swiper>
			</div>
		</>
	)
}
