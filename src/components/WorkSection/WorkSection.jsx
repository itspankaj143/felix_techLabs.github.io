/** @format */

import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

import image14 from '../../assets/images/image 14.png'
import animationui from '../../assets/images/75800-ios-ui-animation 1.png'
import group81 from '../../assets/images/Group 81.png'
import image141 from '../../assets/image/image 14 (1).png'
import animation from '../../assets/image/newanimationmob-unscreen.gif'
import laptop from '../../assets/image/V-saleslaptop.png'

const WorkSection = () => {
	return (
		<>
			<div className='md:hidden'>
				<div className='w-[360px] mx-auto flex justify-center items-center '>
					<h1 className='w-[72px] h-[27px] shrink-0 text-[#ED1C24] font-dm text-[26px] not-italic font-[700] leading-normal'>
						Work
					</h1>
				</div>
				<div className='flex flex-col justify-center items-center mt-10 gap-8'>
					<div className='w-[277px] h-[179px] shrink-0 mx-auto flex flex-col justify-center items-center bg-red-500 rounded-[10px] rounded-b-[20px]'>
						<div className=' relative w-[100%] !h-[132px]  flex items-center justify-center '>
							<img
								src={image141}
								alt=''
								className='z-10 w-[103.484px] h-[93.588px] ml-[40px] rounded-[4.849px]'
							/>
							<img
								src={animation}
								alt=''
								className='absolute z-[20] -top-7 left-1 h-[190px]'
							/>
						</div>
						<div className='bg-[#f0f0f0] rounded-b-[10px]  !h-[47px] w-[100%] z-40 flex items-center justify-center shadow-md '>
							<p className='text-[#020202] font-dm text-[12px] font-[400]'>
								<span className='text-[#000] text-[14px] not-italic font-[500]'>
									Healthyme
								</span>{' '}
								| Health care | UX & UI
							</p>
						</div>
					</div>
					<div className='w-[277px] h-[179px] shrink-0 mx-auto flex flex-col justify-center items-center bg-[#101942] rounded-[10px] rounded-b-[20px]'>
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
					<button className='hover:bg-[#ed1c24] hover:text-[white] w-[155px] h-[36px] rounded-[15px] border-[1px] border-solid border-[#ED1C24] text-[#ED1C24] font-dm text-[14px] not-italic font-[400] leading-normal'>
						Read More
					</button>
				</div>
			</div>

			<div className='md:block hidden'>
				<div className='w-[240px] mx-auto   h-[58px]  flex justify-center items-center'>
					<h2 className='text-[#ed1c24] mt-10 text-[52px] font-dm font-[700]'>
						Our Work
					</h2>
				</div>
				<div className=' w-[90%] mx-auto  '>
					<OwlCarousel
						items={2.4}
						className='owl-theme    py-28 ml-16 '
						loop
						margin={0}
					>
						{/* first card */}
						<div
							class='item'
							className='!bg-[#ed1c24] w-[529px] h-[409px] rounded-[28px]'
						>
							<div className='flex '>
								<div className='flex flex-col items-start px-[3rem] py-14 justify-between '>
									<h2 className='-mt-9  w-[182px] h-[33px] text-[#fff] font-dm text-[32px] font-[500]'>
										Healthyme
									</h2>
									<p className='mt-[16px] w-[96px] h-[20px] text-[#fff] text-[18px] font-[400]'>
										Health care
									</p>
									<p className='mt-[16px] w-[49px] h-[20px] text-[#fff] text-[18px] font-[400]'>
										UI/UX
									</p>
									<p className='w-[180px] mt-4 mr-12 h-[182px] font-dm text-[#fff] text-[18px] font-[400]'>
										Healthyme is a <br /> fitness app that <br /> offers full
										body <br /> workout plans with <br /> many 3D exercises{' '}
										<br /> for free to help you <br /> achieve your body <br />
										goals.
									</p>
								</div>
								<div className='relative !w-[398px] flex items-center justify-center p-[10px]'>
									<img
										className='absolute z-10 top-[4rem] -left-[5rem] !w-[118px] !h-[246px]'
										src={animationui}
										alt=''
									/>
									<img
										src={image14}
										alt=''
										className='border-3  border-green-700 !h-[193px]  '
									/>
								</div>
							</div>
						</div>

						{/* second card */}
						<div
							class='item'
							className=' !bg-[#101942]  w-[529px] h-[418px] rounded-[28px]'
						>
							<div className='flex '>
								<div className='flex space-y-4 flex-col items-start px-20 py-14 justify-between '>
									<h2 className='-mt-9  w-[120px] h-[37px] text-[#fff] font-dm text-[32px] font-[500]'>
										V-Sales
									</h2>
									<p className='w-[77px] h-[20px] text-[#fff] font-dm text-[18px] font-[400]'>
										Business
									</p>
									<p className='w-[47px] h-[20px] text-[#fff] font-dm text-[18px] font-[400]'>
										UI/UX.Web
									</p>
									<p className='w-[208px] h-[189px] text-[#fff] font-dm text-[18px] font-[400]'>
										V-sales is the best for your business it saves your time &
										money without any technical knowledge. Simple way to Track
										Unlimited Sales, Profit, Stock, POS & much more.
									</p>
								</div>
								<div
									className='w-[281.25px] h-[153px] flex justify-center
							items-center mt-20 mr-5 '
								>
									<img src={group81} alt='' />
								</div>
							</div>
						</div>
						{/* first card */}
						<div
							class='item'
							className='!bg-[#ed1c24]  w-[529px] h-[409px] rounded-[28px]'
						>
							<div className='flex '>
								<div className='flex flex-col items-start px-[3rem] py-14 justify-between '>
									<h2 className='-mt-9  w-[182px] h-[33px] text-[#fff] font-dm text-[32px] font-[500]'>
										Healthyme
									</h2>
									<p className='mt-[16px] w-[96px] h-[20px] text-[#fff] text-[18px] font-[400]'>
										Health care
									</p>
									<p className='mt-[16px] w-[49px] h-[20px] text-[#fff] text-[18px] font-[400]'>
										UI/UX
									</p>
									<p className='w-[180px] mt-4 mr-12 h-[182px] font-dm text-[#fff] text-[18px] font-[400]'>
										Healthyme is a <br /> fitness app that <br /> offers full
										body <br /> workout plans with <br /> many 3D exercises{' '}
										<br /> for free to help you <br /> achieve your body <br />
										goals.
									</p>
								</div>
								<div className='relative !w-[398px] flex items-center justify-center p-[10px]'>
									<img
										className='absolute z-10 top-[4rem] -left-[5rem] !w-[118px] !h-[246px]'
										src={animationui}
										alt=''
									/>
									<img
										src={image14}
										alt=''
										className='border-3  border-green-700 !h-[193px]  '
									/>
								</div>
							</div>
						</div>

						{/* second card */}
						<div
							class='item'
							className=' !bg-[#101942]  w-[529px] h-[418px] rounded-[28px]'
						>
							<div className='flex '>
								<div className='flex space-y-4 flex-col items-start px-20 py-14 justify-between '>
									<h2 className='-mt-9  w-[120px] h-[37px] text-[#fff] font-dm text-[32px] font-[500]'>
										V-Sales
									</h2>
									<p className='w-[77px] h-[20px] text-[#fff] font-dm text-[18px] font-[400]'>
										Business
									</p>
									<p className='w-[47px] h-[20px] text-[#fff] font-dm text-[18px] font-[400]'>
										UI/UX.Web
									</p>
									<p className='w-[208px] h-[189px] text-[#fff] font-dm text-[18px] font-[400]'>
										V-sales is the best for your business it saves your time &
										money without any technical knowledge. Simple way to Track
										Unlimited Sales, Profit, Stock, POS & much more.
									</p>
								</div>
								<div
									className='w-[281.25px] h-[153px] flex justify-center
							items-center mt-20 mr-5 '
								>
									<img src={group81} alt='' />
								</div>
							</div>
						</div>

						<div className='flex justify-center items-center mt-[10rem]'>
							<button className='hover:bg-[#ed1c24]  hover:text-[white] w-[315px] h-[52px] rounded-[22px] border-[1.5px] border-[#ed1c24] text-[#ed1c24] text-[20px] font-dm font-[400]'>
								View more
							</button>
						</div>
					</OwlCarousel>
				</div>
			</div>
		</>
	)
}

export default WorkSection
