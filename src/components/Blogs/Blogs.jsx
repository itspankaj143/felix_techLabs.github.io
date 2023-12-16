/** @format */

import money from '../../assets/images/money-gb5d6e0116_1920 2.png'
import robot from '../../assets/images/robot-g9c2dcd4a9_1920 1 (1).png'

const Blogs = () => {
	return (
		<>
			{/* mobile views */}
			<div className='md:hidden'>
				<div className='mt-[38rem] flex justify-center items-center'>
					<h2 className='text-[#ED1C24] font-dm text-[26px] not-italic font-[700] leading-normal'>
						Blogs
					</h2>
				</div>

				<div className='flex justify-start ml-8 items-center space-x-8 mt-10 '>
					<select
						name=''
						id=''
						className='border border-black px-10 rounded-lg '
					>
						<option value=''>Choose category</option>
					</select>
					<select
						name=''
						id=''
						className='border border-black px-10  rounded-lg'
					>
						<option value=''>Sort</option>
					</select>
				</div>

				{/* first card */}
				<div className='w-[350px] h-[290px] shrink-0 rounded-[20px] shadow-2xl  border-2 mx-auto mt-14 shadow-[gray] bg-[#F0F0F0]'>
					<div className=' space-y-4 space-x-14'>
						<img
							src={money}
							className='w-[247px] h-[114px] mx-auto mt-4 shrink-0 rounded-[10px]'
							alt=''
						/>
						<h2 className='w-[247px] h-[38px] mx-auto shrink-0 text-[#ED1C24] font-dm text-[16px] not-italic font-[500] leading-normal'>
							Importance of enterprise app for growth of business
						</h2>
						<p className='w-[162px] h-[13px] shrink-0  text-[#959595] font-dm text-[12px] not-italic font-[400] leading-normal'>
							June 15, 8 min read
						</p>
						<p className='w-[247px] h-[37px] shrink-0 text-[#000] font-dm text-[14px] not-italic font-[400] leading-normal'>
							As the world is rapidly adopting digital, there is a marked..
						</p>
					</div>
				</div>

				{/* SECOND card */}
				<div className='w-[350px] h-[290px] shrink-0 rounded-[20px] shadow-2xl  border-2 mx-auto mt-14 shadow-[gray] bg-[#F0F0F0]'>
					<div className=' space-y-4 space-x-14'>
						<img
							src={robot}
							className='w-[247px] h-[114px] mx-auto mt-4 shrink-0 rounded-[10px]'
							alt=''
						/>
						<h2 className='w-[247px] h-[38px] mx-auto shrink-0 text-[#ED1C24] font-dm text-[16px] not-italic font-[500] leading-normal'>
							Can you consider bots as the future of your business?
						</h2>
						<p className='w-[162px] h-[13px] shrink-0  text-[#959595] font-dm text-[12px] not-italic font-[400] leading-normal'>
							May 7, 5 min read
						</p>
						<p className='w-[247px] h-[37px] shrink-0 text-[#000] font-dm text-[14px] not-italic font-[400] leading-normal'>
							The increasing focus on elevating customer experiences ...
						</p>
					</div>
				</div>
				{/* third card */}
				<div className='w-[350px] h-[290px] shrink-0 rounded-[20px] shadow-2xl  border-2 mx-auto mt-14 shadow-[gray] bg-[#F0F0F0]'>
					<div className=' space-y-4 space-x-14'>
						<img
							src={money}
							className='w-[247px] h-[114px] mx-auto mt-4 shrink-0 rounded-[10px]'
							alt=''
						/>
						<h2 className='w-[247px] h-[38px] mx-auto shrink-0 text-[#ED1C24] font-dm text-[16px] not-italic font-[500] leading-normal'>
							Importance of enterprise app for growth of business
						</h2>
						<p className='w-[162px] h-[13px] shrink-0  text-[#959595] font-dm text-[12px] not-italic font-[400] leading-normal'>
							June 15, 8 min read
						</p>
						<p className='w-[247px] h-[37px] shrink-0 text-[#000] font-dm text-[14px] not-italic font-[400] leading-normal'>
							As the world is rapidly adopting digital, there is a marked..
						</p>
					</div>
				</div>

				{/* four card */}
				<div className='w-[350px] h-[290px] shrink-0 rounded-[20px] shadow-2xl  border-2 mx-auto mt-14 shadow-[gray] bg-[#F0F0F0]'>
					<div className=' space-y-4 space-x-14'>
						<img
							src={robot}
							className='w-[247px] h-[114px] mx-auto mt-4 shrink-0 rounded-[10px]'
							alt=''
						/>
						<h2 className='w-[247px] h-[38px] mx-auto shrink-0 text-[#ED1C24] font-dm text-[16px] not-italic font-[500] leading-normal'>
							Can you consider bots as the future of your business?
						</h2>
						<p className='w-[162px] h-[13px] shrink-0  text-[#959595] font-dm text-[12px] not-italic font-[400] leading-normal'>
							May 7, 5 min read
						</p>
						<p className='w-[247px] h-[37px] shrink-0 text-[#000] font-dm text-[14px] not-italic font-[400] leading-normal'>
							The increasing focus on elevating customer experiences ...
						</p>
					</div>
				</div>
			</div>

			{/* destop views */}

			<div className='hidden md:block'>
				<div className='flex justify-center items-center h-[56px]  mx-auto mt-[12rem]'>
					<h2 className='text-[#ed1c24] font-dm text-[52px] font-[700]'>
						Blogs
					</h2>
				</div>

				<div className='flex justify-center items-center space-x-24 mt-10 '>
					<select
						name=''
						id=''
						className='border border-black px-44 rounded-lg -ml-[21rem]'
					>
						<option value=''>Choose category</option>
					</select>
					<select
						name=''
						id=''
						className='border border-black px-16  rounded-lg'
					>
						<option value=''>Sort</option>
					</select>
				</div>

				{/* first */}

				<div className='flex  justify-center items-center space-y-16 space-x-40'>
					<div className='space-y-5'>
						<h2 className='w-[596px] h-[66px] text-[#ED1C24] font-dm text-[28px] font-[500]'>
							Importance Of Enterprise App For Proficient Growth Of Your
							Business
						</h2>
						<p className='w-[179px] h-[22px] text-[18px] font-dm font-[400] text-[#959595]'>
							June 15, 8 min read
						</p>
						<p className='w-[593px] h-[79px] text-[#000] text-[18px] font-dm font-[400]'>
							As the world is rapidly adopting digital, there is a marked hike
							in the number of enterprise apps catering to multiple business use
							cases aimed at one or more ...{' '}
						</p>
					</div>
					<img className='w-[341px] h-[227px]' src={money} alt='' />
				</div>

				{/* second */}

				<div className='flex  justify-center items-center space-y-16 space-x-40'>
					<div className='space-y-5'>
						<h2 className='w-[596px] h-[66px] text-[#ED1C24] font-dm text-[28px] font-[500]'>
							Importance Of Enterprise App For Proficient Growth Of Your
							Business
						</h2>
						<p className='w-[179px] h-[22px] text-[18px] font-dm font-[400] text-[#959595]'>
							June 15, 8 min read
						</p>
						<p className='w-[593px] h-[79px] text-[#000] text-[18px] font-dm font-[400]'>
							As the world is rapidly adopting digital, there is a marked hike
							in the number of enterprise apps catering to multiple business use
							cases aimed at one or more ...{' '}
						</p>
					</div>
					<img className='w-[341px] h-[227px]  ' src={robot} alt='' />
				</div>

				{/* third */}

				<div className='flex  justify-center items-center space-y-16 space-x-40'>
					<div className='space-y-5'>
						<h2 className='w-[596px] h-[66px] text-[#ED1C24] font-dm text-[28px] font-[500]'>
							Importance Of Enterprise App For Proficient Growth Of Your
							Business
						</h2>
						<p className='w-[179px] h-[22px] text-[18px] font-dm font-[400] text-[#959595]'>
							June 15, 8 min read
						</p>
						<p className='w-[593px] h-[79px] text-[#000] text-[18px] font-dm font-[400]'>
							As the world is rapidly adopting digital, there is a marked hike
							in the number of enterprise apps catering to multiple business use
							cases aimed at one or more ...{' '}
						</p>
					</div>
					<img className='w-[341px] h-[227px]' src={money} alt='' />
				</div>
			</div>
		</>
	)
}

export default Blogs
