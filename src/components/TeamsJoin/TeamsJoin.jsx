/** @format */

// import React from 'react'
import teamsjoin from '../../assets/images/istockphoto-teamsJoins.png'
import bg1 from '../../assets/images/Ellipse 170.png'

import webdev from '../../assets/images/Web development (1).png'
import uiux from '../../assets/images/uiux.png'
// process
import requirementprocee from '../../assets/images/Groupprocessrequire.png'
import welcomerequirement from '../../assets/images/Welcomeprocessrequremt.png'
import group1 from '../../assets/images/Group -1.png'
import group2 from '../../assets/images/Group -2.png'
import group3 from '../../assets/images/Group -3.png'
import group4 from '../../assets/images/Group -4.png'
import group5 from '../../assets/images/Group -5.png'
import fox from '../../assets/images/bounce fox.png'
const TeamsJoin = () => {
	return (
		<>
			{/* mobile views */}

			<div className='md:hidden'>
				<div className='w-[252px] mx-auto mt-5 '>
					<h2 className='text-[#ed1c24] font-dm text-[25px] text-center not-italic font-[700] leading-[32.55px]'>
						Join our team and create clever things with us !
					</h2>
				</div>

				<div>
					<div className='relative w-[196px] ml-[7rem] h-[130px]'>
						<img className='z-10 mt-4' src={teamsjoin} alt='' />
						<img
							className='absolute top-1 -z-10 w-[236.08px] h-[152.32px]'
							src={bg1}
							alt=''
						/>
					</div>
				</div>

				<div className='w-[273px] h-[91px] mx-auto mt-10'>
					<p className='text-[#000000] font-dm text-[14px] leading-[18.23px] text-center font-[400]'>
						Work with a team of smart and self-driven people. We're on a lookout
						for great talents. Game changers, action takers, open-minded people
						simply who care for what they do and embrace the bond of this squad.
					</p>
				</div>
				<div className='w-[210px] h-[33px] mx-auto mt-[5rem] shrink-0'>
					<h2 className='text-[#ED1C24] font-dm text-[25px] not-italic font-[500] leading-[32.55px]'>
						Current Openings
					</h2>
				</div>

				<div className='flex  w-[312px] flex-col  items-center justify-around  h-[86px] rounded-[12px] bg-[#F2F2F2] mx-auto mt-[2rem]'>
					<div className='flex space-x-3  '>
						<img src={webdev} className='w-[26px] h-[26.12px] mt-2' alt='' />
						<div className='w-[260px] h-[26px] flex flex-col mt-2'>
							<h2 className=' text-[#ED1C24] font-dm text-[14px] leading-[18.23px] font-[500] not-italic'>
								Frontend Developer - NodeJS, <br /> ReactJS
							</h2>

							<span className='text-[#909090] -mt-5 ml-[3.5rem]  inline-block font-dm text-[14px] leading-[18.23px] font-[400] not-italic'>
								(0 years - 2 years)
							</span>
						</div>
					</div>
					<button
						className='w-[79px] 
]  border-b-2 border-[#ED1C24] text-[#ED1C24] -ml-[9rem]  mt-3    '
					>
						Know more
					</button>
				</div>

				<div className='flex  w-[312px] flex-col space-y-[1.9rem] items-center justify-between  h-[86px] rounded-[12px] bg-[#F2F2F2] mx-auto mt-[2rem]'>
					<div className='flex space-x-2  '>
						<img src={uiux} className='w-[26px] h-[26.12px] mt-2' alt='' />
						<div className='w-[260px] h-[26px] flex flex-col mt-2'>
							<h2 className=' text-[#ED1C24] font-dm text-[14px] leading-[18.23px] font-[500] not-italic'>
								UI/UX designer - Figma, Adobe Xd
							</h2>
							<br />
							<p className='text-[#909090] -mt-5  inline-block font-dm text-[14px] leading-[18.23px] font-[400] not-italic'>
								(0 years to 3 years)
							</p>
						</div>
					</div>
					<button
						className='w-[79px] h-[17px
]  border-b-2 border-[#ED1C24] text-[#ED1C24] -ml-[9rem]  '
					>
						Know more
					</button>
				</div>

				<div className='flex  w-[312px] flex-col  items-center justify-around  h-[86px] rounded-[12px] bg-[#F2F2F2] mx-auto mt-[2rem]'>
					<div className='flex space-x-3 '>
						<img src={webdev} className='w-[26px] h-[26.12px] mt-2' alt='' />
						<div className='w-[260px] h-[26px] flex flex-col mt-2'>
							<h2 className=' text-[#ED1C24] font-dm text-[14px] leading-[18.23px] font-[500] not-italic'>
								Frontend Developer - NodeJS, <br /> ReactJS
							</h2>

							<span className='text-[#909090] -mt-5 ml-[3.5rem]  inline-block font-dm text-[14px] leading-[18.23px] font-[400] not-italic'>
								(0 years - 2 years)
							</span>
						</div>
					</div>
					<button
						className='w-[79px] 
]  border-b-2 border-[#ED1C24] text-[#ED1C24] -ml-[9rem]  mt-3    '
					>
						Know more
					</button>
				</div>

				<div className='flex  w-[312px] flex-col space-y-[1.9rem] items-center justify-between  h-[86px] rounded-[12px] bg-[#F2F2F2] mx-auto mt-[2rem]'>
					<div className='flex space-x-2  '>
						<img src={uiux} className='w-[26px] h-[26.12px] mt-2' alt='' />
						<div className='w-[260px] h-[26px] flex flex-col mt-2'>
							<h2 className=' text-[#ED1C24] font-dm text-[14px] leading-[18.23px] font-[500] not-italic'>
								UI/UX designer - Figma, Adobe Xd
							</h2>
							<br />
							<p className='text-[#909090] -mt-5  inline-block font-dm text-[14px] leading-[18.23px] font-[400] not-italic'>
								(0 years to 3 years)
							</p>
						</div>
					</div>
					<button
						className='w-[79px] h-[17px
]  border-b-2 border-[#ED1C24] text-[#ED1C24] -ml-[9rem]  '
					>
						Know more
					</button>
				</div>

				<div className='w-[205px] h-[61] mx-auto'>
					<h2 className='text-[#ED1C24] font-dm text-[25px] mt-12 font-[500] text-center leading-[32.55px]'>
						Our recruitment process
					</h2>
				</div>

				<div className='w-[153px] h-[22px] mx-auto mt-5'>
					<h2 className='text-[#ed1c24] font-dm text-[15px] leading-[19.53px] font-[500] text-center'>
						{' '}
						Can't find your role?
					</h2>
				</div>
				<div className='w-[269px] h-[54px] mx-auto mt-5'>
					<p className='text-[#000] text-[14px] font-dm font-[500] leading-[18.23px] text-center'>
						We are always looking for great people who can contribute to our
						overall growth. Simply send us your CV!{' '}
					</p>
				</div>
				<form action='' className='w-[260px] mx-auto shadow-lg p-3'>
					<input
						type='text'
						placeholder='Name'
						name=''
						className='border-b-[.1rem] w-[253.55px] border-[#000000] h-[45.52px] px-5'
						id=''
					/>{' '}
					<br />
					<input
						type='email'
						placeholder='Email'
						className='border-b-[.1rem] w-[253.55px] border-[#000000] h-[45.52px] px-5'
						name=''
						id=''
					/>{' '}
					<br />
					<input
						type='pasword'
						placeholder='Contact number'
						className='border-b-[.1rem] w-[253.55px] border-[#000000] h-[45.52px] px-5'
						name=''
						id=''
					/>{' '}
					<br />
					<select
						name=''
						id=''
						className='border-b-[.1rem] w-[253.55px] border-[#000000] h-[45.52px] px-5'
					>
						<option value=''>Choose field</option>
					</select>{' '}
					<br />
					<input
						type='file'
						placeholder='Contact number'
						className='border-b-[.1rem] w-[253.55px] border-[#000000] p-2 h-[45.52px] px-5'
						name=''
						id=''
					/>{' '}
					<br />
					<img src={fox} className='mt-8 ml-[6rem]' alt='' />
					<button className='mt-3 ml-[1rem] w-[204px] h-[44.571px] text-[#ed1c24] rounded-[17.143px] border-[0.875px] border-[#ed1c24] hover:text-[#fafafa] hover:bg-[#ed1c24]'>
						Send
					</button>
				</form>
			</div>

			{/* destop views */}
			<div className='hidden md:block'>
				<div className='md:w-[655px] md:mx-auto md:mt-10'>
					<h2 className='md:text-[#ED1C24] md:font-dm md:text-[52px] md:not-italic md:font-[700] md:leading-normal'>
						Join our team and create clever things with us !
					</h2>
				</div>
				<div className='md:w-[772px]  md:mx-auto  md:grid md:grid-cols-2 md:gap-5'>
					<p className='md:p-5 md:w-[382px] md:h-[243px] md:shrink-0 md:text-[#000] md:font-dm md:text-[22px] md:not-italic md:font-[400] md:leading-normal'>
						Work with a team of smart and self-driven people. We're on a lookout
						for great talents. Game changers, action takers, open-minded people
						simply who care for what they do and embrace the bond of this squad.
					</p>
					<div className='relative md:ml-2  md:h-[259px]'>
						<img className='md:z-10 ' src={teamsjoin} alt='' />
						<img className='absolute md:top-10 md:-z-10' src={bg1} alt='' />
					</div>
				</div>
				<div className='w-[425px] h-[48px] mx-auto mt-[5rem] shrink-0'>
					<h2 className='text-[#ED1C24] font-dm text-[48px] not-italic font-[500] leading-[62.5px]'>
						Current Openings
					</h2>
				</div>

				<div className='flex space-x-4 w-[1122px] items-center justify-between px-[5rem] border-2 h-[95.66px] rounded-[30.5px] bg-[#F2F2F2] mx-auto mt-[5rem]'>
					<div className='flex space-x-10'>
						<img src={webdev} className='w-[35.27px] h-[35.43px]' alt='' />
						<div className='w-[474px] h-[25.83px]'>
							<h2 className=' text-[#ED1C24] font-dm text-[23.96px] leading-[31.2px] font-[500] not-italic'>
								Frontend Developer - NodeJS, ReactJS
							</h2>
							<p className='text-[#909090] font-dm text-[15.25px] leading-[19.86px] font-[400] not-italic'>
								(0 years - 2 years)
							</p>
						</div>
					</div>
					<button className='w-[137px] h-[34px] rounded-[8.71px] border-[1.09px] border-[#ED1C24] text-[#ED1C24] '>
						Know more
					</button>
				</div>

				<div className='flex space-x-4 w-[1122px] items-center justify-between px-[5rem] border-2 h-[95.66px] rounded-[30.5px] bg-[#F2F2F2] mx-auto mt-[1rem]'>
					<div className='flex space-x-10'>
						<img src={uiux} className='w-[35.27px] h-[35.43px]' alt='' />
						<div className='w-[474px] h-[25.83px]'>
							<h2 className=' text-[#ED1C24] font-dm text-[23.96px] leading-[31.2px] font-[500] not-italic'>
								UI/UX designer - Figma, Adobe Xd
							</h2>
							<p className='text-[#909090] font-dm text-[15.25px] leading-[19.86px] font-[400] not-italic'>
								(0 years to 3 years)
							</p>
						</div>
					</div>
					<button className='w-[137px] h-[34px] rounded-[8.71px] border-[1.09px] border-[#ED1C24] text-[#ED1C24] '>
						Know more
					</button>
				</div>

				<div className='flex space-x-4 w-[1122px] items-center justify-between px-[5rem] border-2 h-[95.66px] rounded-[30.5px] bg-[#F2F2F2] mx-auto mt-[1rem]'>
					<div className='flex space-x-10'>
						<img src={webdev} className='w-[35.27px] h-[35.43px]' alt='' />
						<div className='w-[474px] h-[25.83px]'>
							<h2 className=' text-[#ED1C24] font-dm text-[23.96px] leading-[31.2px] font-[500] not-italic'>
								Frontend Developer - NodeJS, ReactJS
							</h2>
							<p className='text-[#909090] font-dm text-[15.25px] leading-[19.86px] font-[400] not-italic'>
								(0 years - 2 years)
							</p>
						</div>
					</div>
					<button className='w-[137px] h-[34px] rounded-[8.71px] border-[1.09px] border-[#ED1C24] text-[#ED1C24] '>
						Know more
					</button>
				</div>

				<div className='flex space-x-4 w-[1122px] items-center justify-between px-[5rem] border-2 h-[95.66px] rounded-[30.5px] bg-[#F2F2F2] mx-auto mt-[1rem]'>
					<div className='flex space-x-10'>
						<img src={uiux} className='w-[35.27px] h-[35.43px]' alt='' />
						<div className='w-[474px] h-[25.83px]'>
							<h2 className=' text-[#ED1C24] font-dm text-[23.96px] leading-[31.2px] font-[500] not-italic'>
								UI/UX designer - Figma, Adobe Xd
							</h2>
							<p className='text-[#909090] font-dm text-[15.25px] leading-[19.86px] font-[400] not-italic'>
								(0 years to 3 years)
							</p>
						</div>
					</div>
					<button className='w-[137px] h-[34px] rounded-[8.71px] border-[1.09px] border-[#ED1C24] text-[#ED1C24] '>
						Know more
					</button>
				</div>

				{/* <div className='w-[566px] h-[48px] mx-auto'>
					<h2 className='text-[#ED1C24] font-dm text-[48px] font-[500] leading-[62.5px] not-italic mt-[5rem]'>
						Our recruitment process
					</h2>
				</div>

				<div className='w-[696.09px] border-2 mx-auto'>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
						eaque libero, voluptas odio expedita natus perspiciatis nobis
						aspernatur eius et! Accusantium modi quas numquam eveniet maiores
						doloremque accusamus, dignissimos dolorem!
					</p>
				</div> */}

				<div className='w-[692px] h-[47px] mx-auto mt-[5rem]'>
					<h2 className='text-[#ED1C24] font-dm text-[32px] not-italic font-[500] leading-[41.66px] text-center'>
						{' '}
						Can't find your role?{' '}
					</h2>
				</div>

				<div className='w-[569px] h-[121px] space-y-8 mx-auto mt-3 shrink-0'>
					<p className='text-[#000] font-dm text-[28px]  not-italic font-[500] text-center'>
						We are always looking for great people who can contribute to our
						overall growth. Simply send us your CV!
					</p>
					<form action='' className='w-[569px] shadow-lg p-6 border-2'>
						<input
							type='text'
							placeholder='Name'
							name=''
							className='border-b-[.1rem] w-[484px] border-[#000000] h-[58px] px-5'
							id=''
						/>{' '}
						<br />
						<input
							type='email'
							placeholder='Email'
							className='border-b-[.1rem] w-[484px] border-[#000000] h-[58px] px-5'
							name=''
							id=''
						/>{' '}
						<br />
						<input
							type='pasword'
							placeholder='Contact number'
							className='border-b-[.1rem] w-[484px] border-[#000000] h-[58px] px-5'
							name=''
							id=''
						/>{' '}
						<br />
						<select
							name=''
							id=''
							className='border-b-[.1rem] w-[484px] border-[#000000] h-[58px] px-5'
						>
							<option value=''>Choose field</option>
						</select>{' '}
						<br />
						<input
							type='file'
							placeholder='Contact number'
							className='mt-2 border-b-[.1rem] w-[484px] border-[#000000] h-[58px] px-5'
							name=''
							id=''
						/>{' '}
						<br />
						<img src={fox} className='mt-8 ml-5' alt='' />
						<button className='mt-3 w-[204px] h-[44.571px] text-[#ed1c24] rounded-[17.143px] border-[0.875px] border-[#ed1c24] hover:text-[#fafafa] hover:bg-[#ed1c24]'>
							Send
						</button>
					</form>
				</div>
			</div>
		</>
	)
}

export default TeamsJoin
