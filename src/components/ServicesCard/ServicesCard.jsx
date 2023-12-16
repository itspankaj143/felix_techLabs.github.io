/** @format */
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

// import React from 'react'
import vector from '../.././assets/images/Vector.png'
import adobe from '../.././assets/images/adobe xd.png'
import figma from '../.././assets/images/Figma.png'
import sketch from '../.././assets/images/Sketch.png'

import webdev from '../.././assets/images/Web development.png'
import html from '../.././assets/images/Html (1).png'
import css from '../.././assets/images/css.png'
import js from '../../assets/images/javascript.png'
import angular from '../../assets/images/angular.png'
import react from '../../assets/images/react.png'
import jquery from '../../assets/images/jquery.png'
import amzon from '../../assets/images/Group 48.png'

import backend from '../../assets/images/backend.png'
import java from '../../assets/images/java.png'
import mongo from '../../assets/images/mongo.png'
import php from '../../assets/images/php.png'
import vectordom from '../../assets/images/Vector (1).png'
import python from '../../assets/images/python.png'
import node from '../../assets/images/nodejs.png'

import checkmark from '../../assets/images/Checkmark.png'
import zoho from '../../assets/images/zoho.png'
import write from '../../assets/images/wrike.png'
import group from '../../assets/images/Group.png'

import social from '../../assets/images/social.png'
import vectorsocial from '../../assets/images/Vector (2).png'
import buffer from '../../assets/images/Buffer.png'
import crown from '../../assets/images/crown.png'

import img4 from '../../assets/image/Group.svg'
// first card
import cardimage from '../../assets/image/Vector.svg'
import adoble from '../../assets/image/adobe xd.svg'
import fig from '../../assets/image/Figma.svg'
import ske from '../../assets/image/Sketch.svg'
// second card
import web from '../../assets/image/Web development.svg'
import html1 from '../../assets/image/Html.svg'
import css1 from '../../assets/image/Vector (1).svg'
import js1 from '../../assets/image/javascript.svg'
import angular1 from '../../assets/image/angular.svg'
import react1 from '../../assets/image/React-icon 1.svg'
import jquery1 from '../../assets/image/Vector (2).svg'
import amzon1 from '../../assets/image/amazon web services.svg'
// third card
import img1 from '../../assets/image/Vector (3).svg'
import img2 from '../../assets/image/Group 98.svg'
import img3 from '../../assets/image/Mongodb.svg'
import img5 from '../../assets/image/Vector (4).svg'
import img6 from '../../assets/image/Group 99.svg'
import img7 from '../../assets/image/Node Js.svg'

// five card
import a from '../../assets/image/Checkmark.svg'
import b from '../../assets/image/zoho-1 1.svg'
import c from '../../assets/image/Finished-Layout.svg'
import d from '../../assets/image/Group (1).svg'

// six card
import market from '../../assets/image/Marketing Team.svg'
import vector5 from '../../assets/image/Vector (5).svg'
import buffe from '../../assets/image/Buffer.svg'
import vector34 from '../../assets/image/Vector 34.svg'

const ServicesCard = () => {
	return (
		<>
			{/* <div className=' w-[115px] mx-auto mt-16 h-[27px] text-[26px] font-dm font-[700] text-[#ed1c24] md:w-[216px] md:text-[52px] md:font-dm md:font-[700] md:text-[#ed1c24] md:mx-auto md:mt-24'>
				<h2>Services</h2>
			</div> */}
			<div className='max-w-[1320px] md:py-[10px] mx-auto'>
				<h1 className=' text-center text-[#ED1C24] font-dm  text-[26px] not-italic font-[700] leading-normal md:text-[#ED1C24] md:font-dm  md:text-[52px] md:not-italic md:font-[700] md:leading-normal'>
					Services
				</h1>
			</div>

			<div className='md:hidden max-w-[1200px] mx-auto py-5  grid lg:grid-cols-3 sm:grid-cols-2'>
				{/* first card */}
				<div className='flex justify-center items-center my-5'>
					<div className='w-[278px] space-y-2 h-[147px] shrink-0 rounded-[12.021px] bg-[#F0F0F0] items-center justify-center flex flex-col '>
						<img
							src={cardimage}
							className='w-[42px] h-[42px] shrink-0'
							alt=''
						/>
						<h2 className='w-[55px] h-[19px] shrink-0 text-[#101942] font-dm text-[16px] not-italic font-[500] leading-normal'>
							Design
						</h2>
						<div className='flex flex-col justify-center items-center'>
							<h3 className='w-[117px] h-[13px]  shrink-0 text-[#000] font-dm text-[12px] not-italic font-[400] leading-normal'>
								Technologies we use{' '}
							</h3>
							<div className='flex justify-center items-center space-x-4 mt-3'>
								<img
									src={adoble}
									className='w-[19.196px] h-[18.876px] shrink-0'
									alt=''
								/>
								<img
									src={fig}
									className='w-[17.916px] h-[17.916px] shrink-0'
									alt=''
								/>
								<img
									src={ske}
									className='w-[17.916px] h-[17.916px] shrink-0'
									alt=''
								/>
							</div>
						</div>
					</div>
				</div>
				{/* second card */}

				<div className='flex justify-center items-center my-5'>
					<div className='w-[278px] space-y-2 h-[147px] shrink-0 rounded-[12.021px] bg-[#F0F0F0] items-center justify-center flex flex-col '>
						<img src={webdev} className='w-[42px] h-[42px] shrink-0' alt='' />
						<h2 className='w-[55px] h-[19px] shrink-0 text-[#101942] font-dm text-[16px] not-italic font-[500] leading-normal'>
							Frontend
						</h2>
						<div className='flex flex-col justify-center items-center'>
							<h3 className='w-[117px] h-[13px]  shrink-0 text-[#000] font-dm text-[12px] not-italic font-[400] leading-normal'>
								Technologies we use{' '}
							</h3>
							<div className='flex justify-end items-center space-x-2 mt-3'>
								<img
									src={html1}
									className='w-[17.432px] h-[24.672px] shrink-0'
									alt=''
								/>
								<img
									src={css1}
									className='w-[17.163px] h-[24.672px] shrink-0'
									alt=''
								/>
								<img
									src={js1}
									className='w-[18.236px] h-[ 25.745px] shrink-0'
									alt=''
								/>
								<img
									src={angular1}
									className='w-[18.236px] h-[20.918px] shrink-0'
									alt=''
								/>
								<img
									src={react1}
									className='w-[23.063px] h-[20.382px] shrink-0'
									alt=''
								/>
								<img
									src={jquery1}
									className='w-[22.738px] h-[24.084px] shrink-0'
									alt=''
								/>
								<img
									src={amzon1}
									className='w-[35.4px] h-[14.392px] shrink-0'
									alt=''
								/>
							</div>
						</div>
					</div>
				</div>
				{/* third card */}
				<div className='flex justify-center items-center my-5'>
					<div className='w-[278px] space-y-2 h-[147px] shrink-0 rounded-[12.021px] bg-[#F0F0F0] items-center justify-center flex flex-col '>
						<img src={img1} className='w-[42px] h-[42px] shrink-0' alt='' />
						<h2 className='w-[55px] h-[19px] shrink-0 text-[#101942] font-dm text-[16px] not-italic font-[500] leading-normal'>
							Backend
						</h2>
						<div className='flex flex-col justify-center items-center'>
							<h3 className='w-[117px] h-[13px]  shrink-0 text-[#000] font-dm text-[12px] not-italic font-[400] leading-normal'>
								Technologies we use{' '}
							</h3>
							<div className='flex justify-end items-center space-x-2 mt-3'>
								<img
									src={img2}
									className='w-[17.432px] h-[24.672px] shrink-0'
									alt=''
								/>
								<img
									src={img3}
									className='w-[17.163px] h-[24.672px] shrink-0'
									alt=''
								/>
								<img
									src={img4}
									className='w-[18.236px] h-[ 25.745px] shrink-0'
									alt=''
								/>
								<img
									src={img5}
									className='w-[18.236px] h-[20.918px] shrink-0'
									alt=''
								/>
								<img
									src={img6}
									className='w-[18.236px] h-[20.918px] shrink-0'
									alt=''
								/>
								<img
									src={img7}
									className='w-[23.063px] h-[20.382px] shrink-0'
									alt=''
								/>
							</div>
						</div>
					</div>
				</div>
				{/* four card */}

				<div className='flex justify-center items-center my-5'>
					<div className='w-[278px] space-y-2 h-[147px] shrink-0 rounded-[12.021px] bg-[#F0F0F0] items-center justify-center flex flex-col '>
						<img src={img1} className='w-[42px] h-[42px] shrink-0' alt='' />
						<h2 className='w-[55px] h-[19px] shrink-0 text-[#101942] font-dm text-[16px] not-italic font-[500] leading-normal'>
							Backend
						</h2>
						<div className='flex flex-col justify-center items-center'>
							<h3 className='w-[117px] h-[13px]  shrink-0 text-[#000] font-dm text-[12px] not-italic font-[400] leading-normal'>
								Technologies we use{' '}
							</h3>
							<div className='flex space-x-4 mt-3'>
								<img
									src={img3}
									className='w-[19.196px] h-[18.876px] shrink-0'
									alt=''
								/>
								<img
									src={img4}
									className='w-[17.916px] h-[17.916px] shrink-0'
									alt=''
								/>
								<img
									src={img5}
									className='w-[17.916px] h-[17.916px] shrink-0'
									alt=''
								/>
								<img
									src={img6}
									className='w-[17.916px] h-[17.916px] shrink-0'
									alt=''
								/>
								<img
									src={img7}
									className='w-[17.916px] h-[17.916px] shrink-0'
									alt=''
								/>
							</div>
						</div>
					</div>
				</div>
				{/* five card */}

				<div className='flex justify-center items-center my-5'>
					<div className='w-[278px] space-y-2 h-[147px] shrink-0 rounded-[12.021px] bg-[#F0F0F0] items-center justify-center flex flex-col '>
						<img src={a} className='w-[42px] h-[42px] shrink-0' alt='' />
						<h2 className='w-[55px] h-[25px] shrink-0 text-[#101942] font-dm text-[16px] not-italic font-[500] leading-normal'>
							Design
						</h2>
						<div className='flex flex-col justify-center items-center'>
							<h3 className='w-[117px] h-[13px]  shrink-0 text-[#000] font-dm text-[12px] not-italic font-[400] leading-normal'>
								Technologies we use{' '}
							</h3>
							<div className='flex space-x-4 mt-3'>
								<img
									src={b}
									className='w-[19.196px] h-[18.876px] shrink-0'
									alt=''
								/>
								<img
									src={c}
									className='w-[17.916px] h-[17.916px] shrink-0'
									alt=''
								/>
								<img
									src={d}
									className='w-[17.916px] h-[17.916px] shrink-0'
									alt=''
								/>
							</div>
						</div>
					</div>
				</div>
				{/* six card */}

				<div className='flex justify-center items-center my-5'>
					<div className='w-[278px] space-y-2 h-[147px] shrink-0 rounded-[12.021px] bg-[#F0F0F0] items-center justify-center flex flex-col '>
						<img src={market} className='w-[42px] h-[42px] shrink-0' alt='' />
						<h2 className='w-[55px] h-[19px] shrink-0 text-[#101942] font-dm text-[16px] not-italic font-[500] leading-normal'>
							Design
						</h2>
						<div className='flex flex-col justify-center items-center'>
							<h3 className='w-[117px] h-[13px]  shrink-0 text-[#000] font-dm text-[12px] not-italic font-[400] leading-normal'>
								Technologies we use{' '}
							</h3>
							<div className='flex space-x-4 mt-3'>
								<img
									src={vector5}
									className='w-[19.196px] h-[18.876px] shrink-0'
									alt=''
								/>
								<img
									src={buffe}
									className='w-[17.916px] h-[17.916px] shrink-0'
									alt=''
								/>
								<img
									src={vector34}
									className='w-[17.916px] h-[17.916px] shrink-0'
									alt=''
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='md:block hidden'>
				<OwlCarousel items={2.1} className=' md:owl-theme   ' margin={0} loop>
					{/* first card */}
					{/* box-shadow: 0px 6px 6px 0px #00000026; */}
					<div
						class='item'
						className=' w-[380px] mx-[8rem]  h-[300px] md:w-[623px] md:h-[418px] bg-[#00000026] rounded-[28px]'
					>
						<div className='md:flex   '>
							<div className='flex flex-col items-start px-20 py-14 justify-between '>
								<h2 className='-mt-9  w-[155px] h-[45px] text-[#000] font-dm text-[42px] font-[500]'>
									Design
								</h2>
								<p className='hidden md:block w-[306px] mt-9 h-[174px] font-dm text-[#000] text-[18px] font-[400]'>
									We create designs to augment User Experiences.
									<br />
									We analyze human behavioral patterns and blend them with
									information architecture to design a unique experience.
								</p>
							</div>
							<img
								src={vector}
								alt=''
								className=' !w-[42px] h-[42px] md:mt-20 md:-mx-14 md:!w-[179px] md:h-[179px]  '
							/>
						</div>
						<div className=' ml-20 !-mt-2'>
							<h5 className=' w-[220px] -mt-6 mb-5 h-[25px] color-[#000] text-[22px] font-[500] font-dm'>
								Technologies we use
							</h5>
							<div className='flex ml-4 gap-3'>
								<img
									src={adobe}
									className='!w-[44.712px] h-[43.966px]'
									alt=''
								/>
								<img
									src={figma}
									className='!w-[44.712px] h-[43.966px]'
									alt=''
								/>
								<img
									src={sketch}
									className='!w-[44.712px] h-[43.966px]'
									alt=''
								/>
							</div>
						</div>
					</div>
					{/* second card */}
					<div
						class='item'
						className=' mx-[5rem]  w-[623px] h-[418px] bg-[#00000026] rounded-[28px]'
					>
						<div className='flex '>
							<div className='flex flex-col items-start px-20 py-14 justify-between '>
								<h2 className='-mt-9  w-[155px] h-[45px] text-[#000] font-dm text-[42px] font-[500]'>
									Frontend
								</h2>
								<p className='hidden md:block w-[306px] mt-9 h-[174px] font-dm text-[#000] text-[18px] font-[400]'>
									We create designs to augment User Experiences.
									<br />
									We analyze human behavioral patterns and blend them with
									information architecture to design a unique experience.
								</p>
							</div>
							<img
								src={webdev}
								alt=''
								className='mt-20 -mx-14 !w-[179px] h-[179px]  '
							/>
						</div>
						<div className=' ml-20 !-mt-8'>
							<h5 className=' w-[220px] -mt-6 mb-5 h-[25px] color-[#000] text-[22px] font-[500] font-dm'>
								Technologies we use
							</h5>
							<div className='flex items-center justify-start ml-4 gap-3 '>
								<img src={html} className='!w-[40.603px] h-[57.469px]' alt='' />
								<img src={css} className='!w-[39.978px] h-[57.469px]' alt='' />
								<img src={js} className='!w-[42.477px] h-[59.967px]' alt='' />
								<img
									src={angular}
									className='!w-[42.477px] h-[48.723px]'
									alt=''
								/>
								<img
									src={react}
									className='!w-[53.721px] h-[47.474px]'
									alt=''
								/>
								<img
									src={jquery}
									className='!w-[52.963px] h-[56.474px]'
									alt=''
								/>
								<img
									src={amzon}
									className='!w-[82.455px] h-[33.523px]'
									alt=''
								/>
							</div>
						</div>
					</div>
					{/* third card */}
					<div
						class='item'
						className=' mx-[2rem]  w-[623px] h-[418px] bg-[#00000026] rounded-[28px]'
					>
						<div className='flex '>
							<div className='flex flex-col items-start px-20 py-14 justify-between '>
								<h2 className='-mt-9  w-[155px] h-[45px] text-[#000] font-dm text-[42px] font-[500]'>
									Backend
								</h2>
								<p className='hidden md:block w-[306px] mt-9 h-[174px] font-dm text-[#000] text-[18px] font-[400]'>
									We create designs to augment User Experiences.
									<br />
									We analyze human behavioral patterns and blend them with
									information architecture to design a unique experience.
								</p>
							</div>
							<img
								src={backend}
								alt=''
								className='mt-20 -mx-14 !w-[179px] h-[179px]  '
							/>
						</div>
						<div className=' ml-20 '>
							<h5 className=' w-[220px] -mt-6 mb-5 h-[25px] color-[#000] text-[22px] font-[500] font-dm'>
								Technologies we use
							</h5>
							<div className='flex ml-4 gap-3'>
								<img src={java} className='!w-[44.712px] h-[43.966px]' alt='' />
								<img
									src={mongo}
									className='!w-[44.712px] h-[43.966px]'
									alt=''
								/>
								<img src={php} className='!w-[44.712px] h-[43.966px]' alt='' />
								<img
									src={vectordom}
									className='!w-[44.712px] h-[43.966px]'
									alt=''
								/>
								<img
									src={python}
									className='!w-[44.712px] h-[43.966px]'
									alt=''
								/>
								<img src={node} className='!w-[44.712px] h-[43.966px]' alt='' />
							</div>
						</div>
					</div>
					{/* four card */}
					<div
						class='item'
						className=' mx-[1rem] w-[623px] h-[418px] bg-[#00000026] rounded-[28px]'
					>
						<div className='flex '>
							<div className='flex flex-col items-start px-20 py-14 justify-between space-y-[5.5rem]'>
								<h2 className='-mt-9  !w-[155px] h-[45px] text-[#000] font-dm text-[42px] font-[500]'>
									Project Management
								</h2>
								<p className=' hidden md:block w-[306px] mt-16 h-[174px] font-dm text-[#000] text-[18px] font-[400]'>
									We analyze human behavioral patterns and blend them with
									information architecture to design a unique experience.
								</p>
							</div>
							<img
								src={checkmark}
								alt=''
								className='mt-20 -mx-14 !w-[179px] h-[179px]  '
							/>
						</div>
						<div className=' ml-20 -mt-[5rem]'>
							<h5 className=' w-[220px] -mt-6 mb-5 h-[25px] color-[#000] text-[22px] font-[500] font-dm'>
								Technologies we use
							</h5>
							<div className='flex ml-4 space-x-4'>
								<img
									src={zoho}
									className='!w-[49.712px] !h-[43.966px]'
									alt=''
								/>
								<img
									src={write}
									className='!w-[50.712px] !h-[43.966px]'
									alt=''
								/>
								<img
									src={group}
									className='!w-[44.712px] h-[43.966px]'
									alt=''
								/>
							</div>
						</div>
					</div>
					{/* five card */}
					<div
						class='item'
						className=' mx-[1rem] w-[623px] h-[418px] bg-[#00000026] rounded-[28px]'
					>
						<div className='flex '>
							<div className='flex flex-col items-start px-20 py-14 justify-between space-y-[5.5rem] '>
								<h2 className='-mt-9  !w-[255px] h-[45px] text-[#000] font-dm text-[42px] font-[500] '>
									Social media marketing
								</h2>
								<p className=' hidden md:block w-[306px] mt-9 h-[174px] font-dm text-[#000] text-[18px] font-[400]'>
									Social media marketing is the use of social media platforms
									and websites to promote a product or service.
								</p>
							</div>
							<img
								src={social}
								alt=''
								className='mt-20 -mx-14 !w-[179px] h-[179px]  '
							/>
						</div>
						<div className=' ml-20 -mt-[5rem]'>
							<h5 className=' w-[220px] -mt-6 mb-5 h-[25px] color-[#000] text-[22px] font-[500] font-dm'>
								Technologies we use
							</h5>
							<div className='flex ml-4 gap-3'>
								<img
									src={vectorsocial}
									className='!w-[44.712px] h-[43.966px]'
									alt=''
								/>
								<img
									src={buffer}
									className='!w-[44.712px] h-[43.966px]'
									alt=''
								/>
								<img
									src={crown}
									className='!w-[44.712px] h-[43.966px]'
									alt=''
								/>
							</div>
						</div>
					</div>
				</OwlCarousel>
			</div>
		</>
	)
}

export default ServicesCard
