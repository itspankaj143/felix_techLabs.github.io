/** @format */

// import React from 'react'
import ecllipse from '../../assets/images/Ellipse 133.png'
import istochphot from '../../assets/images/istockphoto-1336011452-1024x1024-transformed-removebg-preview 1.png'
import calender from '../../assets/images/Component 46.png'
import Calendly from '../Calendly/Calendly'

const ProjectinMind = () => {
	return (
		<>
			{/* mobile view */}

			<div className='md:hidden'>
				<div className='w-[303px] mx-auto mt-5'>
					<h2 className='text-[#ED1C24] font-dm text-[26px] not-italic font-[700] leading-normal'>
						Have a project in mind?
					</h2>
				</div>

				<div className='w-[210px] h-[20px] mx-auto shrink-0'>
					<p className='text-[#000] font-dm text-[17px] not-italic font-[500] leading-normal'>
						Book a call with our team{' '}
					</p>
					<p className='text-[#000] font-dm text-center text-[14px] not-italic font-[400] leading-normal'>
						Schedule a 30 min consultation to discuss how we can help you grow
						your business.
					</p>
				</div>

				<div className='w-[274.607px] h-[214px] shrink-0 mx-auto mt-28'>
					<img
						src={calender}
						className='-mt-[19px] mr-[8rem] w-[512px] h-[355.556px]'
						alt=''
					/>
					{/* <Calendly /> */}
				</div>
			</div>

			{/* destop view */}

			<div className='hidden md:block'>
				<div className='container max-w-[500px] mx-auto mt-[1rem] '>
					<h2 className='w-[613px] text-[#ed1c24] text-[52px] font-[700]'>
						Have a project in mind?
					</h2>
					<p className='text-center w=[390px] mt-4 h-[35px] text-[#000] font-dm text-[32px] font-[500]'>
						Book a call with our team{' '}
					</p>
					<p className='w-[442px] h-[57px] text-[#000] font-dm text-[22px] font-[400] mx-11 mt-8'>
						Schedule a 30 min consultation to discuss how we can help you grow
						your business .
					</p>
				</div>
				<div className=' flex mt-[5rem] justify-start items-end max-w-[90%] mx-auto '>
					<div className='relative  h-[70%] w-[40%] mx-auto flex justify-center items-center'>
						<img
							src={ecllipse}
							className='ml-[7rem] absolute bottom-7 -z-10'
							alt=''
						/>
						<img
							src={istochphot}
							className='mb-20 ml-24  w-[326px] h-[273px] z-10'
							alt=''
						/>
					</div>
					<div className='mr-20 shadow-2xl '>
						{/* <img
						src={calender}
						className='-mt-[19px] mr-[8rem] w-[512px] h-[355.556px]'
						alt=''
					/> */}
						<Calendly />
					</div>
				</div>
			</div>
		</>
	)
}

export default ProjectinMind
