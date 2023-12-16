/** @format */

// import React from 'react'
import maillogo from '../../assets/images/Group 165.png'
import calllogo from '../../assets/images/Group 166.png'
import img1 from '../../assets/images/sebastian-herrmann-NbtIDoFKGO8-unsplash-removebg-preview 1.png'
import ellipse from '../../assets/images/Ellipse 89.png'
import grp from '../../assets/images/Group 56.png'
import India from '../../assets/images/India.png'
import Usa from '../../assets/images/United Kingdom.png'
import arrow from '../../assets/images/Arrow (1).png'
import fox from '../../assets/images/bounce fox.png'
import locationmaps from '../../assets/images/loctionsmap.svg'
import calllogo123 from '../../assets/images/calllogo123.svg'
import mapsformobile from '../../assets/images/Mapsicle Map.png'

const ConnectingPeople = () => {
	return (
		<>
			{/* mobile views */}
			<div className='md:hidden'>
				<div className='w-[277px]   mx-auto mt-4 space-y-8'>
					<h2 className='text-[#ED1C24] text-center font-dm text-[25px] not-italic font-[700] leading-normal'>
						We like connecting with people{' '}
					</h2>
					<p className='text-[#000] w-[299px] font-dm text-[15px] not-italic font-[400] leading-normal'>
						Meet us to brief about your requirements, expectations, desired
						results, and development patterns to ensure that we deliver exactly
						what you’ve dreamt about.
					</p>
					<div className='relative w-[165.204px] mx-auto flex justify-center items-center'>
						<img src={img1} className='z-10 w-[127px]' alt='' />
						<img src={ellipse} className='absolute top-4 -z-20' alt='' />
						<img src={grp} className='absolute top-10 -z-10' alt='' />
					</div>
					<div className='flex space-y-5 space-x-8 '>
						<img
							src={maillogo}
							className='mt-[1.5rem] w-[45px] h-[45px]'
							alt=''
						/>
						<div>
							<span>Email us</span>
							<p>info@felixtechlabs.com</p>
							<p>careers@felixtechlabs.com</p>
						</div>
					</div>
					<div className='flex space-y-5 space-x-8 '>
						<img
							src={calllogo}
							className='mt-[1.5rem] w-[45px] h-[45px]'
							alt=''
						/>
						<div>
							<span>Call us </span>
							<p>+91 20 652 66070</p>
							<p>+44 7700 900549</p>
						</div>
					</div>

					<div className='w-[162px] h-[55px] mx-auto shrink-0'>
						<h2 className='text-[#101942] text-center font-dm text-[22px] not-italic font-[500]'>
							Want to join our team ?{' '}
						</h2>
					</div>
					<div className='mx-auto w-[190px] items-center justify-center flex h-[ 28.38px]  shrink-0'>
						<p className='text-[#000] font-dm text-[18px] not-italic font-[400] leading-normal'>
							Send us your CV!{' '}
							<img
								className='w-[25px] inline-block h-[25px] shrink-0'
								src={arrow}
								alt=''
							/>
						</p>
					</div>
				</div>

				<div className='w-[315px] h-[590px] mx-auto mt-[8rem] shrink-0 rounded-2xl shadow-2xl bg-[#FAFAFA] '>
					<h2 className='text-[#ED1C24] w-[236px] h-[28px] mx-auto mt-4 font-dm text-[18px] not-italic font-[500] leading-normal'>
						We'd love to hear from you!
					</h2>
					<div className='flex justify-center items-center shrink-0 mt-8 '>
						<input
							type='text'
							placeholder='Name'
							className=' w-[275px] h-[38px] px-6 outline-none rounded-[8px] border-[1px] border-solid border-[#5F5F5F] '
							name=''
							id=''
						/>
					</div>
					<div className='flex justify-center items-center shrink-0 mt-8 '>
						<input
							type='text'
							placeholder='Email'
							className=' w-[275px] h-[38px] px-6 outline-none rounded-[8px] border-[1px] border-solid border-[#5F5F5F] '
							name=''
							id=''
						/>
					</div>
					<div className='flex justify-center items-center shrink-0 mt-8 '>
						<input
							type='text'
							placeholder='Contact number'
							className=' w-[275px] h-[38px] px-6 outline-none rounded-[8px] border-[1px] border-solid border-[#5F5F5F] '
							name=''
							id=''
						/>
					</div>
					<div className='flex justify-center items-center shrink-0 mt-8 '>
						<textarea
							name=''
							id=''
							cols='30'
							rows='10'
							placeholder='Message '
							className='w-[275px] h-[101px] px-6 rounded-[8px] border-[1px] border-solid border-[#5F5F5F]'
						></textarea>
					</div>
					<div className='flex justify-center item mt-8'>
						<img src={fox} alt='' />
					</div>
					<div className='flex justify-center item mt-4'>
						<button className='mt-3 w-[204px] h-[44.571px] text-[#ed1c24] rounded-[17.143px] border-[0.875px] border-[#ed1c24] hover:text-[#fafafa] hover:bg-[#ed1c24]'>
							Send
						</button>
					</div>
				</div>
				<div className='w-[116px] ml-14  h-[24px] shrink-0 mt-8'>
					<h2 className='text-[#ED1C24] font-dm text-[18px] not-italic font-[400] leading-normal'>
						Locations
					</h2>
				</div>
				<div className='w-[360px] h-[420px]  mx-auto rounded-2xl mt-4 shadow-2xl bg-[#FFF]'>
					<div className='flex justify-center items-center py-8  space-x-3'>
						<img
							src={locationmaps}
							className='w-[21px] h-[24px] shrink-0'
							alt=''
						/>
						<h2>Pune Office</h2>
					</div>
					<p className='w-[205px] h-[47px] mx-auto shrink-0 text-[#000] font-dm text-center text-[16px] not-italic font-[400] leading-normal'>
						New Airport Road, Mhada Colony, Viman Nagar, Pune
					</p>
					<div className='flex justify-center items-center mt-5'>
						<img
							src={calllogo123}
							className='w-[23px] h-[23px] shrink-0'
							alt=''
						/>
						<p>+91 20 652 66070</p>
					</div>
					<div className='flex justify-center items-center mt-5'>
						<img src={mapsformobile} alt='' />
					</div>
				</div>

				<div className='w-[360px] h-[420px]  mx-auto rounded-2xl mt-16 shadow-2xl bg-[#FFF]'>
					<div className='flex justify-center items-center py-8  space-x-3'>
						<img
							src={locationmaps}
							className='w-[21px] h-[24px] shrink-0'
							alt=''
						/>
						<h2>London Office</h2>
					</div>
					<p className='w-[205px] h-[47px] mx-auto shrink-0 text-[#000] font-dm text-center text-[16px] not-italic font-[400] leading-normal'>
						571 Queens Road, London
					</p>
					<div className='flex justify-center items-center mt-5'>
						<img
							src={calllogo123}
							className='w-[23px] h-[23px] shrink-0'
							alt=''
						/>
						<p>+91 20 652 66070</p>
					</div>
					<div className='flex justify-center items-center mt-5'>
						<img src={mapsformobile} alt='' />
					</div>
				</div>
			</div>
			{/* destop views */}
			<div className='hidden md:block'>
				{/* connecting people */}

				<div className='w-[838px]  mx-auto'>
					<div className='flex flex-col justify-start items-start space-y-5 my-[4rem]'>
						<h2 className='!max-w-[826px]  h-[47px] font-dm font-[700] text-[52px] text-[#ed1c24]'>
							We like connecting with people{' '}
						</h2>
						<p className='text-[#000] font-[400] text-[22px] font-dm !max-w-[838px] '>
							Meet us to brief about your requirements, expectations, desired
							results, and development patterns to ensure that we deliver
							exactly what you’ve dreamt about.
						</p>
						<div className='flex items-center  space-x-[17rem]'>
							<div className='flex flex-col space-y-12'>
								<div className='flex '>
									<img src={maillogo} alt='' />
									<div>
										<h4 className=' text-[#ed1c24] font-dm text-[18px] font-[500]'>
											Email Us
										</h4>
										<p className='text-[#000] font-dm text-[18px] font-[400]'>
											info@felixtechlabs.com
										</p>
										<p className='text-[#000] font-dm text-[18px] font-[400]'>
											careers@felixtechlabs.com
										</p>
									</div>
								</div>
								<div className='flex'>
									<img src={calllogo} alt='' />
									<div>
										<h4 className=' text-[#ed1c24] font-dm text-[18px] font-[500]'>
											Call Us
										</h4>
										<p className='text-[#000] font-dm text-[18px] font-[400] flex'>
											<img className='h-[20px] mr-2' src={India} alt='' /> +91
											20 652 66070
										</p>
										<p className='text-[#000] font-dm text-[18px] font-[400] flex'>
											<img className='h-[25px] mr-2' src={Usa} alt='' /> +44
											7700 900549
										</p>
									</div>
								</div>
							</div>
							<div className='relative w-[386.151px] flex justify-center items-center'>
								<img src={img1} className='z-10' alt='' />
								<img src={ellipse} className='absolute top-10 -z-20' alt='' />
								<img src={grp} className='absolute top-10 -z-10' alt='' />
							</div>
						</div>
					</div>
				</div>

				<div className='flex flex-col justify-center space-y-14 items-center h-[400px] mt-[5rem]'>
					<h2 className='w-[499px] text-[#101942] text-center  font-dm text-[36px] font-500 uppercase'>
						WANT TO JOIN OR TEAM ?
					</h2>
					<p className='flex w-[339px] justify-evenly text-[#000] font-dm text-[32px] font-[400]'>
						Send us your CV! <img src={arrow} className='h-[50px]' alt='' />
					</p>
				</div>

				{/* form */}

				<form className='mx-auto rounded-[25px] border-[#fafafa] bg-[#fafafa] shadow-[0px_8px_8px_0px_rgba(237,28,36,0.10)] max-w-[1103px] h-[556px] flex flex-col space-y-14 justify-center px-16 mb-[5rem]'>
					<h2 className='w-[606px] text-[#ed1c24] font-dm text-[32px] font-[400]'>
						We'd love to hear from you!
					</h2>
					<div className='flex justify-evenly space-x-8'>
						<div className='flex flex-col justify-center items-start space-y-10'>
							<input
								type='text'
								className='border-[1px] border-[#5f5f5f] text-[#b0b0b0] font-dm text-[20px] font-[400] rounded-[8px] w-[472px] h-[45px] placeholder:pl-[16px]'
								placeholder='Name'
							/>
							<input
								type='text'
								className='border-[1px] border-[#5f5f5f] text-[#b0b0b0] font-dm text-[20px] font-[400] rounded-[8px] w-[472px] h-[45px] placeholder:pl-[16px]'
								placeholder='Email'
							/>
							<input
								type='text'
								className='border-[1px] border-[#5f5f5f] text-[#b0b0b0] font-dm text-[20px] font-[400] rounded-[8px] w-[472px] h-[45px] placeholder:pl-[16px]'
								placeholder='Contact NUmber'
							/>
							<div>
								<img src={fox} alt='' />
								<button className='mt-3 w-[204px] h-[44.571px] text-[#ed1c24] rounded-[17.143px] border-[0.875px] border-[#ed1c24] hover:text-[#fafafa] hover:bg-[#ed1c24]'>
									Send
								</button>
							</div>
						</div>
						<div className='flex flex-col'>
							<textarea
								name='message'
								id=''
								cols='45'
								rows='7'
								placeholder='Message'
								className='border-[1px] border-[#5f5f5f] text-[#b0b0b0] font-dm text-[20px] font-[400] rounded-[8px] placeholder:p-[16px]'
							></textarea>
							<h4 className='w-[467px] mt-[3rem] text-[#ed1c24] font-dm text-[22px] font-400'>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
								unde ducimus hic praesentium quo!
							</h4>
						</div>
					</div>
				</form>

				{/* locations */}

				<div className='flex justify-start ml-[14rem] items-center text-center '>
					<h2 className='w-[201px] h-[38px] text-[#ed1c24] text-[32px] font-dm font-[400]'>
						Locations
					</h2>
				</div>

				{/* Pune Office */}

				<div className='flex  justify-around my-10 items-center  w-[1085px] mx-auto h-[482px] rounded-[20px] border-[1px] border-[#5F5F5F] '>
					<div className='space-y-12 flex flex-col justify-center items-center '>
						<div className='flex justify-center items-center space-x-4'>
							<img className='' src={locationmaps} alt='' />
							<h3 className='w-[211px] h-[32px] text-[#ed1c24] font-dm text-[32px] font-[500]'>
								Pune Office
							</h3>
						</div>
						<p>
							New Airport Road, Mhada <br /> Colony, Viman Nagar, Pune
						</p>
						<div className='flex justify-center items-center space-x-4 mr-20'>
							<img className='border-none' src={calllogo123} alt='' />
							<p>+91 20 652 66070</p>
						</div>
					</div>
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.288668801003!2d73.90960317409686!3d18.561020082540374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c139e3055555%3A0xd5c2716ff5580211!2sFelix%20IT%20Systems!5e0!3m2!1sen!2sin!4v1701082690603!5m2!1sen!2sin'
						width='566px'
						height='404px'
						style={{ border: 0 }}
						className='rounded-[15px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.15)]'
						allowfullscreen=''
						loading='lazy'
						referrerpolicy='no-referrer-when-downgrade'
					></iframe>
				</div>

				{/* // london office */}

				<div className='flex  justify-around my-10 items-center  w-[1085px] mx-auto h-[482px] rounded-[20px] border-[1px] border-[#5F5F5F] '>
					<div className='space-y-12 flex flex-col justify-center items-center '>
						<div className='flex justify-center items-center space-x-4'>
							<img className='' src={locationmaps} alt='' />
							<h3 className='w-[211px] h-[32px] text-[#ed1c24] font-dm text-[32px] font-[500]'>
								London Office
							</h3>
						</div>
						<p>
							571 Queens Road <br /> London
						</p>
						<div className='flex justify-center items-center space-x-4 mr-20'>
							<img className='border-none' src={calllogo123} alt='' />
							<p>020 3551 8456</p>
						</div>
					</div>
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2918.4695721379594!2d-81.23607862470357!3d42.98944597114136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ef20b91047f73%3A0xe5c13388c438faf1!2s571%20Queens%20Ave%2C%20London%2C%20ON%20N6B%201Y9%2C%20Canada!5e0!3m2!1sen!2sin!4v1701083807610!5m2!1sen!2sin'
						width='566px'
						height='404px'
						style={{ border: 0 }}
						className='rounded-[15px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.15)]'
						allowfullscreen=''
						loading='lazy'
						referrerpolicy='no-referrer-when-downgrade'
					></iframe>
				</div>
			</div>
		</>
	)
}

export default ConnectingPeople
