/** @format */
// import React from 'react'
import healthyme from '../../assets/images/image_18-removebg-preview 1.png'
import problem from '../../assets/images/6fa270627d02be4fbfcfb3549f0a84dc.gif'
import solutions from '../../assets/images/770c350885bd110ac8f82d0d68640049.gif'

import image1 from '../../assets/images/image 19.png'
import image2 from '../../assets/images/image 20.png'
import image3 from '../../assets/images/image_22-removebg-preview 1.png'
import laptop from '../../assets/image/V-saleslaptop.png'

import group81 from '../../assets/images/Group 81.png'

const ProjectGoal = () => {
	return (
		<>
			{/* mobile views */}

			<div className='md:hidden'>
				<div className='w-[357px] h-[190px] shrink-0 rounded-[20px] space-y-4 bg-[#ED1C24] mx-auto mt-8'>
					<h2 className='w-[109px] h-[17px] text-[#fff] font-dm text-[18px] not-italic font-[500] py-4 leading-normal px-8'>
						Healthyme
					</h2>
					<p className=' h-[12px] shrink-0 text-[#fff] font-dm text-[12px] not-italic font-[400] leading-normal px-8'>
						Health care | UX & UI
					</p>
					<p className='w-[350px] h-[76px] shrink-0 text-[#fff] font-dm text-[14px] not-italic font-[400] leading-normal px-8'>
						Healthyme is a fitness app that offers full body workout plans with
						many 3D exercises for free to help you achieve your body goals.
					</p>
				</div>
				<div className='w-[272px] h-[23px] shrink-0 mx-auto mt-5'>
					<h2 className='text-[#ED1C24] font-dm text-[18px] not-italic font-[500] leading-normal'>
						Project goal
					</h2>
					<p className='w-[297px] h-[93px] shrink-0 text-[#000] font-dm text-[14px] not-italic font-[400] leading-normal'>
						Lorem ipsum dolor sit amet. Rem provident enim sed assumenda
						eligendi non galisum cupiditate. Non earum et repudiandae mollitia
						eos dolorem perferendis et velit galisum et deserunt.
					</p>
				</div>
				<div className='flex mt-[9rem] w-[272px] mx-auto space-x-24'>
					<div>
						<h2 className='w-[74px] h-[18px] shrink-0 text-[#ED1C24] font-dm text-[18px] not-italic font-[500] leading-normal'>
							Industry
						</h2>
						<p className='w-[86px] h-[18px] shrink-0 text-[#000] font-dm text-[14px] not-italic font-[400] leading-normal'>
							Health care
						</p>
					</div>
					<div>
						<h2 className='w-[79px] h-[18px] shrink-0 text-[#ED1C24] font-dm text-[18px] not-italic font-[500] leading-normal'>
							Location
						</h2>
						<p className='w-[100px] h-[18px] shrink-0 text-[#000] font-dm text-[14px] not-italic font-[400] leading-normal'>
							Mumbai,India{' '}
						</p>
					</div>
				</div>

				<div className='flex mt-[5rem] justify-center items-center'>
					<img src={problem} className='w-[134px] h-[134px]' alt='' />
					<div className='space-y-3'>
						<h2 className='w-[149px] h-[20px] ml-5  shrink-0 text-[#ED1C24] font-dm text-[18px] not-italic font-[500] leading-normal'>
							Problems
						</h2>
						<div className=' space-y-3 w-[193px] h-[146px] ml-5 shrink-0 text-[#000] font-dm text-[14px] not-italic font-[400] leading-normal'>
							<p>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Voluptas vel tenetur odio.
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
								enim nihil quia?
							</p>
						</div>
					</div>
				</div>

				<div className='flex mt-[5rem] justify-center items-center'>
					<div className='space-y-3'>
						<h2 className='w-[149px] h-[20px] ml-5  shrink-0 text-[#ED1C24] font-dm text-[18px] not-italic font-[500] leading-normal'>
							Solution
						</h2>
						<div className='space-y-3 w-[193px] h-[146px] ml-5 shrink-0 text-[#000] font-dm text-[14px] not-italic font-[400] leading-normal'>
							<p>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Voluptas vel tenetur odio.
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
								enim nihil quia?
							</p>
						</div>
					</div>
					<img src={solutions} className='w-[134px] h-[134px]' alt='' />
				</div>

				<div className='flex  justify-center items-center mt-10 mb-4'>
					<h2 className='text-[#ED1C24] font-dm text-[18px] not-italic font-[500] leading-normal'>
						Benefits
					</h2>
				</div>
				<div className='w-[292px] space-y-3 h-[80px] shrink-0 text-[#000] font-dm text-[14px] not-italic font-[400] leading-normal mx-auto'>
					<p>
						Lorem ipsum dolor sit amet. Ut molestiae laudantium et eaque
						quibusdam est Lorem ipsum dolor sit amet. Ut molestiae laudantium et
						eaque quibusdam est
					</p>
					<p>
						Lorem ipsum dolor sit amet. Ut molestiae laudantium et eaque
						quibusdam est Lorem ipsum dolor sit amet. Ut molestiae laudantium et
						eaque quibusdam est
					</p>
				</div>

				<div className='flex justify-center items-center mt-[10rem]'>
					<h2 className='text-[#ED1C24] font-dm text-[18px] not-italic font-[500] leading-normal'>
						Screens
					</h2>
				</div>
				<div className='flex flex-col mt-10 justify-center space-y-3 items-center'>
					<img src={image1} className='w-[262px] h-[162px] shrink-0' alt='' />
					<img src={image2} className='w-[262px] h-[162px] shrink-0' alt='' />
					<img src={image3} className='w-[262px] h-[162px] shrink-0' alt='' />
				</div>

				<div className='w-[108px] h-[19px] shrink-0 mt-8 ml-20'>
					<h2 className='text-[#ED1C24] font-dm text-[18px] not-italic font-[500] leading-normal'>
						Other works
					</h2>
				</div>
				<div className='w-[350px] h-[200px] mt-10 shrink-0 mx-auto flex flex-col justify-center items-center bg-[#101942] rounded-[10px] rounded-b-[20px]'>
					<div className=' relative w-[100%] !h-[132px]  flex items-center justify-center '>
						<img
							src={laptop}
							alt=''
							className='z-10 w-[181.985px] h-[99px] rounded-[4.849px]'
						/>
					</div>
					<div className='bg-[#f0f0f0] rounded-b-[10px]  !h-[47px] w-[100%] z-40 flex items-center justify-center shadow-md '>
						<p className='text-[#020202] font-dm text-[12px] font-[400]'>
							<span className='text-[#000] text-[14px] not-italic font-[500]'>
								V-sales
							</span>{' '}
							| Business | Web development
						</p>
					</div>
				</div>
				<button className='hover:bg-[#ed1c24] hover:text-[white] w-[155px] mt-10 ml-[8rem] h-[36px] rounded-[15px] border-[1px] border-solid border-[#ED1C24] text-[#ED1C24] font-dm text-[14px] not-italic font-[400] leading-normal'>
					Read More
				</button>
			</div>

			{/* destop views */}
			<div className='hidden md:block'>
				<div className='flex justify-center items-center mt-16'>
					<div
						class='item'
						className='!bg-[#ed1c24]  w-[932px] h-[383px] bg-[#f0f0f0] rounded-[28px]'
					>
						<div className='flex '>
							<div className='flex flex-col items-start px-[2rem] py-14 justify-between '>
								<h2 className='-mt-9  w-[182px] h-[33px] text-[#fff] font-dm text-[32px] font-[500]'>
									Healthyme
								</h2>
								<p className='mt-[16px] w-[170px] h-[20px] text-[#fff] text-[18px] font-[400]'>
									UI/UX development
								</p>
								{/* <p className='mt-[16px] w-[49px] h-[20px] text-[#fff] text-[18px] font-[400]'>
								UI/UX
							</p> */}
								<p className='w-[454px] mt-4 mr-12 h-[171px] font-dm text-[#fff] text-[18px] font-[400]'>
									Healthyme is a fitness app that offers full body workout plans
									with many 3D exercises for free to help you achieve your body
									goals. You can choose from a variety of exercise plans
									targeted at specific muscle groups, such as chest workout or
									arm workout, or tailored for a certain goal, such as fat
									burning workout.
								</p>
								<button className='mt-[1.2rem] w-[170px] h-[32px] rounded-[10.419px] text-[#fff] border-[0.695px] border-[#fff]'>
									Read more
								</button>
							</div>
							<div className='relative !w-[398px] flex items-center justify-center p-[10px]'>
								{/* <img src={healthyme} alt='' /> */}
								<img
									className='absolute z-10   -top-[0.2rem]  w-[452px]  !h-[353px]'
									src={healthyme}
									alt=''
								/>
								{/* <img
							src={image14}
							alt=''
							className='border-3 mb-[4rem] border-green-700 !h-[251px] !w-[257px]  '
						/> */}
							</div>
						</div>
					</div>
				</div>
				{/* Project goal */}
				<div className='flex justify-evenly items-center mt-10'>
					<div className='-ml-[1rem] space-y-8'>
						<h2 className='w-[272px] h-[48px] text-[#ED1C24] font-dm text-[48px] font-[500]'>
							Project goal
						</h2>
						<p className='w-[443px] h-[161px] text-[#000] text-[22px] font-dm font-[400]'>
							Lorem ipsum dolor sit amet. Rem provident enim sed assumenda
							eligendi non galisum cupiditate. Non earum et repudiandae mollitia
							eos dolorem perferendis et velit galisum et deserunt.
						</p>
					</div>
					<div className='space-y-5'>
						<h2 className='w-[106px] h-[32px] text-[#ED1C24] font-dm text-[22px] font-[500]'>
							Industry
						</h2>
						<h3 className='w-[126px] h-[29px] text-[#000] text-[22px] font-[400] font-dm'>
							Health care
						</h3>
						<h3 className='w-[106px] h-[32px] text-[#ED1C24] font-dm text-[22px] font-[500]'>
							Location
						</h3>
						<h3 className='w-[147px] h-[22px] text-[#000] text-[22px] font-[400] font-dm'>
							Mumbai,India
						</h3>
					</div>
				</div>
				{/* Problems */}
				<div className=' flex justify-center items-center  mt-28 ml-[10rem]'>
					<div className='flex flex-col'>
						<h2 className='w-[149px] h-[37px] text-[#ed1c24] text-[32px] font-dm font-[500]'>
							Problems
						</h2>
						-
						<ul className='  w-[774px]  h-[190px] list-disc text-[#000] text-[22px] font-dm font-[400] '>
							<li>
								Lorem ipsum dolor sit amet. Ut molestiae laudantium et eaque
								quibusdam est
							</li>
							<li>
								Lorem ipsum dolor sit amet. Ut molestiae laudantium et eaque
								quibusdam est
							</li>
							<li>
								Lorem ipsum dolor sit amet. Ut molestiae laudantium et eaque
								quibusdam est
							</li>
						</ul>
					</div>
					<img className='!w-[303px] !h-[303px]' src={problem} alt='' />
				</div>
				{/* Problems */}
				<div className=' flex justify-center  mt-16 items-center ml-[8rem]'>
					<img className='!w-[303px] !h-[303px]' src={solutions} alt='' />
					<div className='flex flex-col space-x-10'>
						<h2 className='w-[149px] h-[37px] ml-8 text-[#ed1c24] text-[32px] font-dm font-[500]'>
							Solution
						</h2>
						-
						<ul className='  w-[774px]  h-[190px] list-disc text-[#000] text-[22px] font-dm font-[400] '>
							<li>
								Lorem ipsum dolor sit amet. Ut molestiae laudantium et eaque
								quibusdam est
							</li>
							<li>
								Lorem ipsum dolor sit amet. Ut molestiae laudantium et eaque
								quibusdam est
							</li>
							<li>
								Lorem ipsum dolor sit amet. Ut molestiae laudantium et eaque
								quibusdam est
							</li>
						</ul>
					</div>
				</div>
				{/* Benefits */}
				<div className='flex flex-col mt-10 justify-center items-center space-y-16'>
					<h2 className='w-[188px] h-[48px] text-[#ed1c24] text-[48px] font-dm font-[500]'>
						Benefits
					</h2>
					<ul className='  w-[774px]  h-[190px] list-disc text-[#000] text-[22px] font-dm font-[400] '>
						<li>
							Lorem ipsum dolor sit amet. Ut molestiae laudantium et eaque
							quibusdam est
						</li>
						<li>
							Lorem ipsum dolor sit amet. Ut molestiae laudantium et eaque
							quibusdam est
						</li>
						<li>
							Lorem ipsum dolor sit amet. Ut molestiae laudantium et eaque
							quibusdam est
						</li>
						<li>
							Lorem ipsum dolor sit amet. Ut molestiae laudantium et eaque
							quibusdam est
						</li>
					</ul>
				</div>
				{/* Screens */}
				<div className='flex flex-col justify-center items-center space-y-20 mt-32'>
					<h2 className='W-[188px] h-[48px] text-[#ed1c24] text-[48px] font-dm font-[500]'>
						Screens
					</h2>
					<img className='w-[956px] h-[593px]' src={image1} alt='' />
					<img className='w-[956px] h-[552.165px]' src={image2} alt='' />
					<img className='w-[956px] h-[583.474px]' src={image3} alt='' />
				</div>

				{/* Other works */}

				<div className='flex max-w-[80%] max-auto flex-col justify-center items-center space-y-10  mt-16'>
					<h2 className='w-[193px] -ml-[20rem] h-[37px] text-[#ed1c24] text-[32px] font-dm font-[500]'>
						Other works
					</h2>

					<div className='flex ml-[20rem] space-x-10 '>
						{/* first card */}
						<div
							class='item'
							className=' !bg-[#101942]  w-[551px] h-[373px] rounded-[28px]'
						>
							<div className='flex '>
								<div className='flex space-y-4 flex-col items-start px-8 py-14 justify-between '>
									<h2 className='-mt-9  w-[120px] h-[37px] text-[#fff] font-dm text-[32px] font-[500]'>
										V-Sales
									</h2>
									<p className='w-[170px] h-[20px] text-[#fff] font-dm text-[18px] font-[400]'>
										UI/UX development
									</p>
									<p className='w-[155px] h-[19px] text-[#fff] font-dm text-[18px] font-[400]'>
										Web development
									</p>
									<p className='w-[259px] h-[165px] text-[#fff] font-dm text-[18px] font-[400]'>
										V-sales is the best for your business it saves your time &
										money without any technical knowledge. Simple way to Track
										Unlimited Sales, Profit, Stock, POS & much more.
									</p>
								</div>
								<div
									className='w-[280px] h-[152.32px] flex justify-center
							items-center mt-20 mr-5 '
								>
									<img src={group81} alt='' />
								</div>
							</div>
						</div>
						{/* first card */}
						<div
							class='item'
							className=' !bg-[#101942]  w-[551px] h-[373px] rounded-[28px]'
						>
							<div className='flex '>
								<div className='flex space-y-4 flex-col items-start px-8 py-14 justify-between '>
									<h2 className='-mt-9  w-[120px] h-[37px] text-[#fff] font-dm text-[32px] font-[500]'>
										V-Sales
									</h2>
									<p className='w-[170px] h-[20px] text-[#fff] font-dm text-[18px] font-[400]'>
										UI/UX development
									</p>
									<p className='w-[155px] h-[19px] text-[#fff] font-dm text-[18px] font-[400]'>
										Web development
									</p>
									<p className='w-[259px] h-[165px] text-[#fff] font-dm text-[18px] font-[400]'>
										V-sales is the best for your business it saves your time &
										money without any technical knowledge. Simple way to Track
										Unlimited Sales, Profit, Stock, POS & much more.
									</p>
								</div>
								<div
									className='w-[280px] h-[152.32px] flex justify-center
							items-center mt-20 mr-5 '
								>
									<img src={group81} alt='' />
								</div>
							</div>
						</div>
					</div>

					<button className='w-[342px] ml-36  h-[48px] mt-[25rem] border-2  text-center rounded-[15px] text-[22px] text-[#ed1c24] border-[#ed1c24]'>
						View more
					</button>
				</div>
			</div>
		</>
	)
}

export default ProjectGoal
