/** @format */

// import React from 'react'
import fox from '../../assets/images/bounce fox.png'

import linkedin from '../../assets/images/🦆 icon _linkedin123_.svg'
import facebook from '../../assets/images/facebook.svg'

const FrontendDev = () => {
	return (
		<>
			{/* mobile views */}
			<div className='md:hidden'>
				<div className='w-[258px] h-[42px] shrink-0  ml-[28px] mt-[13rem]'>
					<h2 className='text-[#ED1C24] font-dm text-[16px] not-italic font-[500] leading-normal'>
						Frontend Developer - NodeJS, ReactJS
					</h2>
					<p className='text-[#909090] font-dm text-[15px] not-italic font-[400] leading-normal'>
						Posted on 29 August ,2022
					</p>
					<div className='flex justify-start items-center space-x-3'>
						<p className='text-[#909090] font-dm text-[15px] not-italic font-[400] leading-normal'>
							Share:
						</p>
						<img
							src={linkedin}
							className='w-[18.404px] h-[16.334px] shrink-0'
							alt=''
						/>
						<img src={facebook} className='w-[23px] h-[23px] shrink-0' alt='' />
					</div>
				</div>

				<div className='w-[266px] h-[25px] shrink-0 mt-[7rem] ml-[28px] space-y-5 space-x-5'>
					<h2 className='text-[#ED1C24] font-dm text-[18px] not-italic font-[500] leading-normal'>
						Desired Candidate Profile
					</h2>
					<ul className='w-[292px] space-y-2 h-[294px] shrink-0 list-disc text-[#000] font-dm text-[15px] not-italic font-[400] leading-normal'>
						<li>UG/ MBA / MHRM with 0 to 2 years of experience</li>
						<li>
							Preference will be given to candidates with previous experience in
							ITeS sector
						</li>
						<li>
							Preference will be given to candidates with relevant experience
							from the same locality or the candidates must be willing to
							relocate
						</li>
						<li>
							Preference will be given to candidates who can join immediately
						</li>
					</ul>
				</div>

				<div className='w-[266px] h-[25px] shrink-0 mt-[20rem] ml-[28px] space-y-5 space-x-5'>
					<h2 className='text-[#ED1C24] font-dm text-[18px] not-italic font-[500] leading-normal'>
						Must have
					</h2>
					<ul className='w-[292px] space-y-2 h-[294px] shrink-0 list-disc text-[#000] font-dm text-[15px] not-italic font-[400] leading-normal'>
						<li>
							Complete understanding of ReactJS and its main fundamentals like
							JSX, Virtual DOM, component lifecycle, etc.
						</li>
						<li>
							Preceding experience with ReactJS workflows like Flux, Redux,
							Create React App, data structure libraries
						</li>
						<li>
							In-depth knowledge of JavaScript, CSS, HTML, and front-end
							languages.
						</li>
						<li>Enjoys coding and problem solving</li>
					</ul>
				</div>

				<div className='w-[266px] h-[25px] shrink-0 mt-[20rem] ml-[28px] space-y-5 space-x-5'>
					<h2 className='text-[#ED1C24] font-dm text-[18px] not-italic font-[500] leading-normal'>
						Responsibilities
					</h2>
					<ul className='w-[292px] space-y-2 h-[294px] shrink-0 list-disc text-[#000] font-dm text-[15px] not-italic font-[400] leading-normal'>
						<li>
							Actively involve in application development, code reviews and
							architecture and design discussions.
						</li>
						<li>
							Design and implement functional requirements in React tools.
						</li>
						<li>
							Develop and implement highly responsive user interface components
							using react concepts.
						</li>
						<li>Manage testing and bug fixes</li>
						<li>Prepare technical documentation</li>
						<li>Implement software enhancements and suggest improvements.</li>
						<li>Working closely with Backend Developers.</li>
					</ul>
				</div>

				<div className='w-[260px] h-[45.517px] mx-auto shrink-0 border-2  mt-[27rem]'>
					<input
						type='text'
						name=''
						placeholder='Name'
						className='px-5 py-4'
						id=''
					/>
				</div>
				<div className='w-[260px] h-[45.517px] mx-auto shrink-0 border-2    mt-[2rem]'>
					<input
						type='text'
						name=''
						placeholder='Email'
						className='px-5 py-4'
						id=''
					/>
				</div>
				<div className='w-[260px] h-[45.517px] mx-auto shrink-0 border-2    mt-[2rem]'>
					<input
						type='text'
						name=''
						placeholder='Contact number'
						className='px-5 py-4'
						id=''
					/>
				</div>

				<div className='w-[260px] h-[45.517px] mx-auto shrink-0 border-2    mt-[2rem]'>
					<select name='' id='' className='px-5 py-4'>
						<option value=''>Frontend Developer</option>
					</select>
				</div>

				<div className='w-[260px] h-[45.517px] mx-auto shrink-0 border-2    mt-[2rem]'>
					<input
						type='file'
						name=''
						placeholder=''
						className='px-5 py-4'
						id=''
					/>
				</div>

				<div className='flex justify-center items-center mt-10'>
					<img src={fox} className=' w-[37px] shrink-0' alt='' />
				</div>
				<div className='flex justify-center items-center mt-4'>
					<input
						type='text'
						value='Send'
						className='w-[204px]  p-2 h-[ 44.571px] text-[#ed1c24] text-[16px] border-2 text-center border-[#ed1c24] rounded-[17.143px]'
						name=''
						id=''
					/>
				</div>
			</div>

			{/* destop views */}
			<div className='hidden md:block '>
				<div className='flex flex-col justify-center items-center space-y-4  mt-[6rem]'>
					<h2 className='h-[45.939px] text-[#ED1C24] font-dm text-[38px] font-[500]'>
						Frontend Developer - NodeJS, ReactJS
					</h2>
					<div className='flex space-x-[8.5rem]  text-[#909090] font-dm text-[20px] font-[400]'>
						<p className='w-[252px] h-[32.344px]'>Posted on 29 August ,2022</p>
						<p>Share :</p>
						<div className='flex mr-[2rem] space-x-2 items-center justify-center'>
							<img className='' src={linkedin} alt='' />
							<img src={facebook} alt='' />
						</div>
					</div>
				</div>

				<div className='flex  justify-evenly mt-9 mx-auto w-[85%] text-[#ED1C24] font-dm text-[20px] font-[500]  items-center'>
					<h2>Desired Candidate Profile</h2>
					<h2>Must have</h2>
				</div>

				<div className='p-10  flex justify-evenly w-[75%] mx-auto items-center  text-[#000] text-[20px] font-dm font-[400] '>
					<ul className='list-disc ml-52 w-[394px] h-[361px] space-y-4'>
						<li>UG/ MBA / MHRM with 0 to 2 years of experience</li>
						<li>
							Preference will be given to candidates with previous experience in
							ITeS sector
						</li>
						<li>
							Preference will be given to candidates with relevant experience
							from the same locality or the candidates must be willing to
							relocate
						</li>
						<li>
							Preference will be given to candidates who can join immediately
						</li>
					</ul>

					<ul className='list-disc w-[394px] h-[361px] space-y-4'>
						<li>
							Complete understanding of ReactJS and its main fundamentals like
							JSX, Virtual DOM, component lifecycle, etc.
						</li>
						<li>
							Preceding experience with ReactJS workflows like Flux, Redux,
							Create React App, data structure libraries
						</li>
						<li>
							In-depth knowledge of JavaScript, CSS, HTML, and front-end
							languages.
						</li>
						<li>Enjoys coding and problem solving</li>
					</ul>
				</div>

				<div className='w-[266px] h-[38px] ml-[28rem] text-[#ED1C24] text-[20px] font-dm font-[500]'>
					<h2>Responsibilities</h2>
				</div>

				<div className='p-6 w-[796px] ml-[28rem] h-[378px] text-[#000] font-dm text-[20px] font-[400]'>
					<ul className='list-disc space-y-3'>
						<li>
							Actively involve in application development, code reviews and
							architecture and design discussions.
						</li>
						<li>Design and implement functional requirements in React tools</li>
						<li>
							Develop and implement highly responsive user interface components
							using react concepts.
						</li>
						<li>Manage testing and bug fixes</li>
						<li>Prepare technical documentation.</li>
						<li>Implement software enhancements and suggest improvements.</li>
						<li>Working closely with Backend Developers.</li>
					</ul>
				</div>

				<div className='flex flex-col mt-10 justify-center items-center'>
					<h2 className='h-[52px] text-[#ED1C24] text-[32px] font-dm font-[500]'>
						Apply now
					</h2>

					<form className='p-10 flex flex-col space-y-5  w-[472px] ' action=''>
						<input
							type='text'
							name=''
							placeholder='Name'
							id=''
							className='border-2 p-3 rounded'
						/>
						<input
							type='email'
							name=''
							placeholder='Email'
							id=''
							className='border-2 p-3 rounded'
						/>
						<input
							type='number'
							name=''
							placeholder='Contact number'
							id=''
							className='border-2 p-3 rounded'
						/>
						<select name='' id='' className='border-2 p-3 rounded'>
							<option value=''>Frontend developer</option>
						</select>
						<input
							type='file'
							name=''
							placeholder='Upload resume'
							id=''
							className='border-2 p-3 rounded'
						/>
						<img className='w-[37px]  h-[51px]' src={fox} alt='' />
						<input
							type='text'
							value='Submit'
							className='w-[204px]  p-2 h-[ 44.571px] text-[#ed1c24] border-2 text-center border-[#ed1c24] rounded-[17.143px]'
							name=''
							id=''
						/>
					</form>
				</div>
			</div>
		</>
	)
}

export default FrontendDev
