/** @format */

import ellipse from '../../assets/images/Ellipse 90 (1).png'
import image from '../../assets/images/pexels-andrea-piacquadio-789822-removebg-preview 1.png'

import bounce from '../../assets/images/bounce fox.png'

const DigitalSucess = () => {
	return (
		<>
			<div className=' max-w-[320px] py-3  mx-auto flex justify-center items-center md:max-w-[919px] md:h-[192px] md:mx-auto md:py-5 md:flex md:justify-center md:items-center'>
				<h1 className='text-[#ED1C24] text-[26px] font-dm not-italic font-[700] leading-normal md:text-[#ED1C24] md:text-[52px] md:font-dm md:not-italic md:font-[700] md:leading-normal'>
					It’s not our business, but your digital success that matters to us.
				</h1>
			</div>

			<div className=' max-w-[320px] mx-auto py-3  md:py-0 flex justify-center items-center flex-col-reverse md:max-w-[919px] md:mx-auto   md:flex md:flex-row md:space-x-20 md:items-center'>
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

					<h4 className='w-[296px] h-[41px]  flex justify-center items-center text-center shrink-0 text-[#000] font-dm text-[16px] font-[500] md:w-[391px]   md:h-[23px] md:text-[#000] md:font-dm md:text-[20px] md:font-[500]'>
						We Love Replying to Mails and Messages!
					</h4>
					<img
						src={bounce}
						className='w-[
2.72px] '
						alt=''
					/>

					<button className='hover:bg-[#ed1c24] hover:text-[white] w-[155px] h-[36px] rounded-[15px] border-[1px] border-solid border-[#ED1C24] text-[#ED1C24] font-dm text-[14px] not-italic font-[400] leading-normal md:hover:bg-[#ed1c24] md:hover:text-[white] md:w-[196px] md:h-[52px] md:rounded-[20px] md:border-[1px] md:border-solid md:border-[#ED1C24] md:text-[#ED1C24] md:font-dm md:text-[20px] md:not-italic md:font-[400] md:leading-normal'>
						More about us
					</button>
				</div>

				{/* <div className='relative  mt-[2rem]  px-14 h-[100%] w-[100%] flex justify-center items-center'>
					<img src={ellipse} className='absolute bottom-3 -z-10  ' alt='' />
					<img src={image} className='w-[283.567px] h-[276.713px]' alt='' />
				</div> */}

				<div className=' relative  items-center w-[145px] md:!w-[382.75px]'>
					<img
						src={ellipse}
						alt=''
						className='absolute -z-10   md:-z-10  md:bottom-[1rem]'
					/>
					<img
						src={image}
						className='w-[108px] ml-4 mb-5 mt-2 md:!w-[283.567px] md:!h-[276.713px] md:mb-9   md:ml-10 md:mr-8  '
						alt=''
					/>
				</div>
			</div>

			{/* <div className='w-[1190px] flex justify-center h-[374.71px] items-start  mx-auto  '>
				<div className=' flex justify-between items-start space-y-12 space-x-32 flex-col '>
					<p className='w-[575px] h-[141px] text-[22px] ml-32  text-[#000] font-dm font-[400]'>
						Get in touch with our customer support team to fix an appointment
						with us. Meet us to brief about your requirements, expectations,
						desired results, and development patterns to ensure that we deliver
						exactly what you’ve dreamt about.
					</p>
					<h4 className='w-[391px]   h-[23px] text-[#000] font-dm text-[20px] font-[500]'>
						We Love Replying to Mails and Messages!
					</h4>
					<img
						src={bounce}
						className='w-[
2.72px] '
						alt=''
					/>
					<button className='hover:bg-[#ed1c24]   hover:text-[white] w-[315px] h-[52px] rounded-[20px] border-[1px] border-[#ed1c24] text-[#ed1c24] text-[20px] font-dm font-[400]'>
						Get in touch
					</button>
				</div>
				<div className='relative  mt-[2rem]  px-14 h-[100%] w-[100%] flex justify-center items-center'>
					<img src={ellipse} className='absolute bottom-3 -z-10  ' alt='' />
					<img src={image} className='w-[283.567px] h-[276.713px]' alt='' />
				</div>
			</div> */}
		</>
	)
}

export default DigitalSucess
