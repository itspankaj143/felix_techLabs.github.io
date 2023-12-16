/** @format */

import React from 'react'

const WorkCaarousel = () => {
	return (
		<>
			<OwlCarousel
				items={2.1}
				className='owl-theme mt-20 ml-16 w-[1250px]'
				loop
				margin={0}
			>
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
								Healthyme is a <br /> fitness app that <br /> offers full body{' '}
								<br /> workout plans with <br /> many 3D exercises <br /> for
								free to help you <br /> achieve your body <br />
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
								V-sales is the best for your business it saves your time & money
								without any technical knowledge. Simple way to Track Unlimited
								Sales, Profit, Stock, POS & much more.
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
								Healthyme is a <br /> fitness app that <br /> offers full body{' '}
								<br /> workout plans with <br /> many 3D exercises <br /> for
								free to help you <br /> achieve your body <br />
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
								V-sales is the best for your business it saves your time & money
								without any technical knowledge. Simple way to Track Unlimited
								Sales, Profit, Stock, POS & much more.
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
		</>
	)
}

export default WorkCaarousel
