/** @format */

// import React from 'react'
import image from '../../assets/image/pexels-mikhail-nilov-6592693-removebg-preview 1.png'
import ellipse from '../../assets/image/ellipsecir.png'

const About = () => {
	return (
		<>
			<div className='max-w-[320px] py-3  mx-auto flex justify-center items-center md:max-w-[822px] md:mx-auto md:py-5 md:flex md:justify-center md:items-center'>
				<h1 className='text-[#ED1C24] text-[26px] font-dm not-italic font-[700] leading-normal md:text-[#ED1C24] md:text-[52px] md:font-dm md:not-italic md:font-[700] md:leading-normal'>
					Count on Us for World-Class Mobile & Web App Development
				</h1>
			</div>

			<div className='max-w-[320px] mx-auto py-3  md:py-0 flex justify-center items-center flex-col-reverse md:max-w-[822px] md:mx-auto   md:flex md:flex-row md:space-x-20 md:items-center'>
				<div className='gap-6 md:gap-0 md:space-y-8  flex flex-col items-center md:items-start '>
					<p className=' hidden md:block md:max-w-[400.5px] md:h-[] md:shrink-0 md:text-[#000] md:text-[22px] md:font-dm md:not-italic md:font-[400] md:leading-normal'>
						We are a full-time mobile and web application development company
						based in Pune, and have specialist competencies in offering deeply
						personalized technology solutions to contribute towards your brand’s
						growth and digital visibility. Holding rich industrial experience in
						technology solutions.
					</p>
					<p className='md:hidden min-[ 282px]   shrink-0 text-[#000] text-[14px] font-dm not-italic font-[600] leading-normal '>
						We are a full-time mobile and web <br /> application development
						company based <br /> in Pune, and have specialist competencies{' '}
						<br />
						in offering deeply personalized technology <br />
						solutions to contribute towards your <br /> brand’s growth and
						digital visibility.{' '}
					</p>
					<button className='hover:bg-[#ed1c24] hover:text-[white] w-[155px] h-[36px] rounded-[15px] border-[1px] border-solid border-[#ED1C24] text-[#ED1C24] font-dm text-[14px] not-italic font-[400] leading-normal md:hover:bg-[#ed1c24] md:hover:text-[white] md:w-[196px] md:h-[52px] md:rounded-[20px] md:border-[1px] md:border-solid md:border-[#ED1C24] md:text-[#ED1C24] md:font-dm md:text-[20px] md:not-italic md:font-[400] md:leading-normal'>
						More about us
					</button>
				</div>
				<div className=' relative  items-center w-[145px] md:!w-[382.75px]'>
					<img
						src={ellipse}
						alt=''
						className='absolute -z-10   md:-z-10  md:bottom-[1rem]'
					/>
					<img
						src={image}
						className='w-[107.619px] ml-4 mb-5 -mt-3 md:!w-[283.567px] md:!h-[276.713px] md:mb-9   md:ml-8 md:mr-8  '
						alt=''
					/>
				</div>
			</div>

			{/* <div className='w-320px mx-14  text-[#ED1C24] font-[700] text-[26px] leading-normal font-dm not-italic md:mx-96 md:w-[822] md:text-[#ED1C24] md:text-[52px] md:font-dm md:not-italic md:font-[700] md:leading-normal'>
				<h1>Count on Us for World-Class Mobile & Web App Development </h1>
			</div> */}

			{/* <div className='w-[100%] sm:py-[25px] py-[50px]'>
				<div className='max-w-[780px] mx-auto'>
					<div className='grid sm:grid-cols-2 sm:grid-cols-1 items-center'>
						<div className='border-2 space-y-7 '>
							<p className='md:text-[#000] md:text-[22px] md:font-dm md:not-italic md:font-[400] md:leading-normal'>
								We are a full-time mobile and web <br /> application development
								company <br /> based in Pune, and have specialist <br />{' '}
								competencies in offering deeply <br /> personalized technology
								solutions to <br /> contribute towards your brand’s <br />{' '}
								growth and digital visibility. Holding rich industrial
								experience in technology solutions.
							</p>
							<button className='w-[155px] h-[36px] ml-16 rounded-[15px] border-solid border-[1px] border-[#ED1C24]  hover:bg-[#ed1c24] hover:text-[white] md:ml-0 md:w-[196px] md:h-[52px] md:shrink-0 md:rounded-[20px] md:border-[1px] md:border-solid md:border-[#ED1C24] md:hover:bg-[#ed1c24] md:hover:text-[white] '>
								More about us
							</button>
						</div>
						<div className='relative px-16'>
							<img
								src={ellipse}
								className='absolute -z-10 -right-[0.1 rem] top-6 w-[145.26px] h-[102.19px] shrink-0  md:!w-[380.75px] md:h-[280.231px] md:shrink-0'
								alt=''
							/>
							<img
								src={image}
								className='w-[107.619px] h-[105.017px] shrink-0 md:w-[283.567px] md:h-[276.713px] md:shrink-0'
								alt=''
							/>
						</div>
					</div>
				</div>
			</div> */}

			{/* <div className='max-w-[100%] mx-auto md:py-[80] py-5 flex flex-col-reverse border-2  md:flex-row-reverse md:justify-between md:items-center'>
				<div className='basis-[50%]'>
					<img
						className=' absolute -z-10 top-[12rem] right-[23rem] w-[145.26px] h-[102.19px] shrink-0  md:!w-[500.75px] md:h-[280.231px] md:shrink-0'
						src={ellipse}
						alt=''
					/>
					<img
						src={image}
						className='w-[107.619px] absolute top-[10rem] h-[105.017px] shrink-0 md:w-[283.567px] md:h-[276.713px] md:shrink-0'
						alt=''
					/>
				</div>
				<div className='basis-[40%] px-10 space-y-7'>
					<p className='md:text-[#000] md:text-[22px] md:font-dm md:not-italic md:font-[400] md:leading-normal'>
						We are a full-time mobile and web application development company
						based in Pune, and have specialist competencies in offering deeply
						personalized technology solutions to contribute towards your brand’s
						growth and digital visibility. Holding rich industrial experience in
						technology solutions.
					</p>
					<button className='w-[155px] h-[36px] ml-16 rounded-[15px] border-solid border-[1px] border-[#ED1C24]  hover:bg-[#ed1c24] hover:text-[white] md:ml-0 md:w-[196px] md:h-[52px] md:shrink-0 md:rounded-[20px] md:border-[1px] md:border-solid md:border-[#ED1C24] md:hover:bg-[#ed1c24] md:hover:text-[white] '>
						More about us
					</button>
				</div>
			</div> */}

			{/* <div className=' flex flex-col justify-between space-y-7 items-center md:flex md:flex-row-reverse md:justify-evenly md:items-center md:space-y-6'>
				<div className='relative flex justify-center items-center md:justify-end md:mt-8 md:items-end md:mr-80  '>
					<img
						className='absolute -z-10 top-3 w-[145.26px] h-[102.19px] shrink-0  md:!w-[500.75px] md:h-[280.231px] md:shrink-0'
						src={ellipse}
						alt=''
					/>
					<img
						src={image}
						className='w-[107.619px] h-[105.017px] shrink-0 md:w-[283.567px] md:h-[276.713px] md:shrink-0'
						alt=''
					/>
				</div>
				<div className='w-[282px] space-y-7 h-[111px] shrink-0 text-[#000] font-dm text-[14px] font-[400] not-italic leading-normal md:w-[400.5px] md:h-[280px] md:shrink-0 md:space-y-4 md:ml-80'>
					<p className='md:text-[#000] md:text-[22px] md:font-dm md:not-italic md:font-[400] md:leading-normal'>
						We are a full-time mobile and web application development company
						based in Pune, and have specialist competencies in offering deeply
						personalized technology solutions to contribute towards your brand’s
						growth and digital visibility. Holding rich industrial experience in
						technology solutions.
					</p>
					<button className='w-[155px] h-[36px] ml-16 rounded-[15px] border-solid border-[1px] border-[#ED1C24]  hover:bg-[#ed1c24] hover:text-[white] md:ml-0 md:w-[196px] md:h-[52px] md:shrink-0 md:rounded-[20px] md:border-[1px] md:border-solid md:border-[#ED1C24] md:hover:bg-[#ed1c24] md:hover:text-[white] '>
						More about us
					</button>
				</div>
			</div> */}
		</>
	)
}

export default About
