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
// import 'swiper/css'
import 'swiper/css/pagination'

// import './styles.css'

// import required modules
import { Mousewheel, Pagination } from 'swiper/modules'

export default function Navbar1() {
	return (
		<>
			<div className='hidden md:block  h-[500px] max-w-[90%] mx-auto  mt-5'>
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
							<div className='w-[359px]  h-[100%] -space-y-[8rem] flex flex-col justify-evenly items-start'>
								<div className='w-[359px]  '>
									<h2 className='text-[#000] font-dm text-start text-[48px] not-italic font-[700] leading-[107.7%]'>
										Transcend your <br />{' '}
										<span className='text-[#ED1C24] font-dm text-[ 45.506px] not-italic font-[700] leading-[107.7%]'>
											Business <br /> with us
										</span>
									</h2>
								</div>
								<div className='h-[107.86px]   '>
									<p className='text-[#000] font-dm text-start text-[20px] fomt-[400] not-italic leading-normal'>
										By utilising our customised web <br /> and mobile
										application <br /> development services
									</p>
								</div>
								<button className=' w-[12.25rem] hover:bg-[#ed1c24] hover:text-[white] h-[52px] rounded-[22px] font-[400] text-[1.25rem] font-dm text-[#ed1c24] border-2 border-red-500'>
									Read More
								</button>
							</div>
							<div className='relative flex flex-col justify-evenly items-center  !w-[19.305rem]'>
								<img
									className='!w-[164.88px] !h-[188.22px] z-10'
									src={img1}
									alt=''
								/>
								<img
									className='absolute top-[2.5rem] -z-10 !h-[290px] !w-[220px]'
									src={gif1}
									alt=''
								/>
								<img
									className='absolute top-[6.5rem] -z-10 !h-[186px] !w-[255px]'
									src={Ellipse1}
									alt=''
								/>
								<img
									className='absolute bottom-10 -z-10 !h-[290px] !w-[220px]'
									src={gif3}
									alt=''
								/>
								<img
									className='absolute bottom-[6rem] -z-10 !h-[200px] !w-[223px]'
									src={Ellipse3}
									alt=''
								/>

								<img
									className='!w-[158.31px] !h-[179.47px]'
									src={img3}
									alt=''
								/>
							</div>
							<div className='relative flex justify-center items-center !w-[252px]'>
								<img
									src={img2}
									className='!w-[167.79px] !h-[188.98px]'
									alt=''
								/>
								<img
									className='absolute top-[10.5rem] -z-10 !h-[290px] !w-[220px]'
									src={gif2}
									alt=''
								/>
								<img
									className='absolute top-[12.5rem] -z-10 !h-[235px] !w-[175px]'
									src={Ellipse2}
									alt=''
								/>
							</div>
						</div>
					</SwiperSlide>

					{/* Second slider */}
					<SwiperSlide>
						<div className='flex !h-[90vh] !w-[100%]  justify-center '>
							<div className='w-[359px] -space-y-[9rem] h-[100%] flex flex-col justify-evenly items-start'>
								<div className='w-[359px] '>
									<h2 className='text-[#000] font-dm text-start text-[30px] not-italic font-[700] leading-[107.7%]'>
										TURBO-CHARGE YOUR{' '}
										<span className='uppercase text-[#ED1C24] font-dm text-[40px] not-italic font-[900] leading-[107.7%]'>
											Business <br /> REVENUES
										</span>
									</h2>
								</div>
								<div className='h-[107.86px]'>
									<p className='text-[#000] font-dm text-start text-[20px] fomt-[400] not-italic leading-normal'>
										With our customized mobile <br /> app development solutions
									</p>
								</div>
							</div>
							<div className='relative flex flex-col justify-evenly items-center  !w-[19.305rem]'>
								<img
									className='!w-[164.88px] !h-[188.22px] z-10'
									src={img1}
									alt=''
								/>
								<img
									className='absolute top-[2.5rem] -z-10 !h-[290px] !w-[220px]'
									src={gif1}
									alt=''
								/>
								<img
									className='absolute top-[6.5rem] -z-10 !h-[186px] !w-[255px]'
									src={Ellipse1}
									alt=''
								/>
								<img
									className='absolute bottom-10 -z-10 !h-[290px] !w-[220px]'
									src={gif3}
									alt=''
								/>
								<img
									className='absolute bottom-[6rem] -z-10 !h-[200px] !w-[223px]'
									src={Ellipse3}
									alt=''
								/>

								<img
									className='!w-[158.31px] !h-[179.47px]'
									src={img3}
									alt=''
								/>
							</div>
							<div className='relative flex justify-center items-center !w-[252px]'>
								<img
									src={img2}
									className='!w-[167.79px] !h-[188.98px]'
									alt=''
								/>
								<img
									className='absolute top-[10.5rem] -z-10 !h-[290px] !w-[220px]'
									src={gif2}
									alt=''
								/>
								<img
									className='absolute top-[12.5rem] -z-10 !h-[235px] !w-[175px]'
									src={Ellipse2}
									alt=''
								/>
							</div>
						</div>
					</SwiperSlide>

					{/* third slider */}
					<SwiperSlide>
						<div className='flex !h-[90vh] !w-[100%]  justify-center '>
							<div className='w-[359px] -space-y-[12rem] h-[100%] flex flex-col justify-evenly items-start'>
								<div className='w-[359px] h-[207.84px]'>
									<h2 className='text-[#000] font-dm text-start text-[30px] not-italic font-[700] leading-[107.7%]'>
										ENABLE YOUR <br />{' '}
										<span className='text-[#ED1C24] font-dm text-[38px] not-italic font-[700] leading-[107.7%]'>
											COMPANY'S DIGITAL TRANSFORMATION
										</span>
									</h2>
								</div>
								<div className='h-[107.86px]'>
									<p className='text-[#000] font-dm text-start text-[20px] fomt-[400] not-italic leading-normal'>
										...through our high calibre and holistic <br /> technology solutions
									</p>
								</div>
							</div>
							<div className='relative flex flex-col justify-evenly items-center  !w-[19.305rem]'>
								<img
									className='!w-[164.88px] !h-[188.22px] z-10'
									src={img1}
									alt=''
								/>
								<img
									className='absolute top-[2.5rem] -z-10 !h-[290px] !w-[220px]'
									src={gif1}
									alt=''
								/>
								<img
									className='absolute top-[6.5rem] -z-10 !h-[186px] !w-[255px]'
									src={Ellipse1}
									alt=''
								/>
								<img
									className='absolute bottom-10 -z-10 !h-[290px] !w-[220px]'
									src={gif3}
									alt=''
								/>
								<img
									className='absolute bottom-[6rem] -z-10 !h-[200px] !w-[223px]'
									src={Ellipse3}
									alt=''
								/>

								<img
									className='!w-[158.31px] !h-[179.47px]'
									src={img3}
									alt=''
								/>
							</div>
							<div className='relative flex justify-center items-center !w-[252px]'>
								<img
									src={img2}
									className='!w-[167.79px] !h-[188.98px]'
									alt=''
								/>
								<img
									className='absolute top-[10.5rem] -z-10 !h-[290px] !w-[220px]'
									src={gif2}
									alt=''
								/>
								<img
									className='absolute top-[12.5rem] -z-10 !h-[235px] !w-[175px]'
									src={Ellipse2}
									alt=''
								/>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</>
	)
}
