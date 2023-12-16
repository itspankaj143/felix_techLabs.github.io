/** @format */

import logo from '../../assets/images/Felix Techlabs-01 14.png'
import icon1 from '../../assets/images/icon1.png'
import icon2 from '../../assets/images/icon2.png'
import icon3 from '../../assets/images/icon3.png'
import icon4 from '../../assets/images/icon4.png'
import icon5 from '../../assets/images/icon5.png'
import icon6 from '../../assets/images/icon6.png'
import rect1 from '../../assets/images/rectangle 217.png'
import curve1 from '../../assets/images/curve1.png'
import curve4 from '../../assets/images/curve4.png'
import curve2 from '../../assets/images/curve2.png'
import curve5 from '../../assets/images/curve5.png'
import curve3 from '../../assets/images/curve3.png'
import curve6 from '../../assets/images/curve6.png'
import fox from '../../assets/images/centerFox.png'
import ellipse from '../../assets/images/ellipse.png'

import wevdebcard from '../../assets/image/webdevcard .svg'

const Header = () => {
	return (
		<>
			{/* Mobile Device */}
			<div className='md:hidden'>
				<div className=' px-[30px] py-[18px] '>
					<h1 className='text-[#ED1C24] font-dm text-[26px] not-italic font-[700] leading-normal'>
						An Array of <br /> Development Services <br /> Available With Us
					</h1>
				</div>
				<div className='flex justify-center items-center'>
					<div className='relative flex justify-center items-center -mt-14'>
						<img src={fox} className='w-[59px] absolute' alt='' />
						<img src={ellipse} className='w-[100px]' alt='' />
					</div>
					<div>
						{/* first card */}
						<div className='flex  flex-col items-center  justify-center '>
							<div className='flex justify-between items-center relative space-x-3'>
								<img
									src={curve4}
									className='absolute -left-[5rem] top-[2rem]'
									alt=''
								/>
								<div className='flex justify-center items-center '>
									<img src={wevdebcard} className='relative' alt='' />
									<img src={icon1} alt='' className='absolute w-[22px]' />
								</div>

								<h3 className='w-[ 161px] h-[39px] text-[#ED1C24] font-dm text-[16px] font-[700] not-italic leading-normal'>
									Web app <br /> development
								</h3>
							</div>
							<p className='w-[165px] h-[50px] ml-[8.5rem] mt-2 text-[#000] font-dm text-[14px] not-italic font-[500] leading-normal'>
								Quality web apps <br /> developed to promote <br />
								your business.
							</p>
						</div>
						{/* second card */}
						<div className='flex  flex-col items-center  justify-center my-5 '>
							<div className='flex justify-between items-center relative space-x-3'>
								<img
									src={curve5}
									className='absolute -left-[4rem] -z-10'
									alt=''
								/>
								<div className='flex justify-center items-center '>
									<img src={wevdebcard} className='relative' alt='' />
									<img src={icon2} alt='' className='absolute w-[22px]' />
								</div>

								<h3 className='w-[ 161px] h-[39px] text-[#ED1C24] font-dm text-[16px] font-[700] not-italic leading-normal'>
									Mobile app <br />
									development
								</h3>
							</div>
							<p className='w-[165px] h-[50px] ml-[8.5rem] mt-2 text-[#000] font-dm text-[14px] not-italic font-[500] leading-normal'>
								Reach out to massive <br /> targets with our <br /> interactive
								apps
							</p>
						</div>
						{/* third card */}
						<div className='flex  flex-col items-center  justify-center '>
							<div className='flex justify-between items-center relative space-x-3'>
								<img
									src={curve6}
									className='absolute -left-[5rem] bottom-[2rem]'
									alt=''
								/>
								<div className='flex justify-center items-center '>
									<img src={wevdebcard} className='relative' alt='' />
									<img src={icon3} alt='' className='absolute w-[22px]' />
								</div>
								<h3 className='w-[ 161px] h-[39px] text-[#ED1C24] font-dm text-[16px] font-[700] not-italic leading-normal'>
									Backend <br /> development
								</h3>
							</div>
							<p className='w-[165px] h-[50px] ml-[8.5rem] mt-2 text-[#000] font-dm text-[14px] not-italic font-[500] leading-normal'>
								Kick-start with our <br />
								seamless backend <br /> solutions for your <br />
								enterprises
							</p>
						</div>
					</div>
				</div>
				<div className='flex flex-row-reverse justify-center items-center mt-16'>
					<div className='relative flex justify-center items-center -mt-12 ml-[7rem]'>
						<img src={fox} className='w-[45px] absolute' alt='' />
						<img src={ellipse} className='w-[79px]' alt='' />
					</div>
					<div className='flex flex-col'>
						{/* first card */}
						<div className='flex  flex-col items-center  justify-center '>
							<div className='flex flex-row-reverse justify-center items-center relative ml-2'>
								<div className='w-[100px] absolute'>
								<img
									src={curve1}
									className='absolute left-[11.5rem] top-[2rem]'
									alt=''
								/>
								</div>
								<div className='flex justify-center items-center absolute -right-28 top-5'>
									<img src={wevdebcard} className='relative' alt='' />
									<img src={icon4} alt='' className='absolute w-[22px]' />
								</div>

								<h3 className='w-[120px] h-[39px] -ml-[3rem] text-[#ED1C24] font-dm text-[16px] font-[700] not-italic leading-normal'>
									UI & UX design
								</h3>
							</div>
							<p className='w-[165px] h-[50px] -mt-4 ml-2 text-[#000] font-dm text-[14px] not-italic font-[500] leading-normal'>
								Patterns of web and <br />
								mobile user experience <br /> to deliver exactly what <br />{' '}
								they desire.
							</p>
						</div>
						{/* second card */}
						<div className='flex  flex-col items-center  justify-center mt-12 '>
							<div className='flex flex-row-reverse justify-between items-center relative -ml-[3rem]'>
								<img
									src={curve2}
									className='absolute left-[14.5rem] top-4 -z-10'
									alt=''
								/>
								<div className='flex justify-center items-center absolute -right-32 top-4'>
									<img src={wevdebcard} className='relative' alt='' />
									<img src={icon5} alt='' className='absolute w-[22px]' />
								</div>

								<h3 className='w-[ 161px] h-[39px] text-[#ED1C24] font-dm text-[16px] font-[700] not-italic leading-normal'>
									Project <br /> management
								</h3>
							</div>
							<p className='w-[175px] h-[50px]  mt-2 ml-5 text-[#000] font-dm text-[14px] not-italic font-[500] leading-normal'>
								Seamless integration to <br /> your software with special <br />{' '}
								Quality Check experts.
							</p>
						</div>
						{/* third card */}
						<div className='flex  flex-col items-center  justify-center mt-8 '>
							<div className='flex flex-row-reverse justify-between items-center relative -ml-[3rem]'>
								<img
									src={curve3}
									className='absolute left-[13.5rem] bottom-[2rem]'
									alt=''
								/>
								<div className='flex justify-center items-center absolute -right-32'>
									<img src={wevdebcard} className='relative' alt='' />
									<img src={icon6} alt='' className='absolute w-[22px]' />
								</div>
								<h3 className='w-[ 161px] h-[39px]  text-[#ED1C24] font-dm text-[16px] font-[700] not-italic leading-normal'>
									Social media <br /> marketing
								</h3>
							</div>
							<p className='w-[165px] h-[50px]  mt-2 ml-4 text-[#000] font-dm text-[14px] not-italic font-[500] leading-normal'>
								Spread a word for your <br /> business by taking <br />{' '}
								advantage of our global <br />
								presence .
							</p>
						</div>
					</div>
				</div>
			/</div>
			{/* Desktop */}
			<div className='container hidden md:block mx-auto max-w-[1430px] ml-20 my-[3rem] '>
				{/* <img className=' top-9 left-8 fixed' src={logo} alt='' /> */}

				<h2 className='     w-[692px]  font-dm text-[52px] font-[700] text-[#ed1c24] mx-auto'>
					An Array of Development Services Available With Us{' '}
				</h2>
				<div className='flex justify-evenly items-start -space-x-36 mx-auto max-w-[100%] mt-[65px]'>
					<div className='left flex flex-col items-start justify-evenly space-y-4 -mr-10'>
						<div>
							<h3 className='w-[262px] h-[25] font-[500] text-[22px] leading-[28.62px] text-[#ed1c24] '>
								Web app Development
							</h3>
							<p className='h-[67px] w-[265px] font-400 text-[18px] leading-[23.4px] text-[#000000]'>
								Quality web applications developed to promote your business.
							</p>
						</div>
						<div>
							<h3 className='w-[262px] h-[25] font-[500] text-[22px] leading-[28.62px] text-[#ed1c24] '>
								Mobile app Development
							</h3>
							<p className='h-[44px] w-[249px] font-400 text-[18px] leading-[23.4px] text-[#000000]'>
								Reach out to massive targets with our interactive apps
							</p>
						</div>
						<div>
							<h3 className='w-[262px] h-[25] font-[500] text-[22px] leading-[28.62px] text-[#ed1c24] '>
								Backend Development
							</h3>
							<p className='h-[67px] w-[265px] font-400 text-[18px] leading-[23.4px] text-[#000000]'>
								Kick-start with our seamless backend solutions for your
								enterprises
							</p>
						</div>
					</div>
					<div className='center flex flex-col justify-between'>
						<div className='flex '>
							<div className='relative flex justify-center w-[100px]'>
								<img src={icon1} className='absolute top-10 z-10' alt='' />
								<img className='absolute top-3' src={rect1} alt='' />
							</div>
							<div className='flex relative w-[200px]'>
								<img src={curve1} className='absolute top-16 -left-4' alt='' />
								<img src={curve4} className='absolute top-16 -right-4' alt='' />
							</div>
							<div className='relative flex justify-center w-[100px]'>
								<img src={icon4} className='absolute top-10 z-10' alt='' />
								<img src={rect1} className='absolute top-3' alt='' />
							</div>
						</div>
						<div className='flex '>
							<div className='relative flex justify-center w-[100px]'>
								<img src={icon2} className='absolute top-36 z-10' alt='' />
								<img className='absolute top-[7.2rem]' src={rect1} alt='' />
							</div>
							<div className='relative w-[200px]'>
								<img
									src={curve2}
									className='absolute top-[8.7rem] -left-4'
									alt=''
								/>
								<img
									src={fox}
									className='w-[58px] h-[45.5px] absolute top-[8.9rem] left-[4.5rem] z-30'
									alt=''
								/>
								<img
									src={ellipse}
									className='absolute top-[7.3rem] left-[3.2rem] z-20 w=[98.72px] h-[98.72px]'
								/>
								<img
									src={curve5}
									className='absolute top-[8.7rem] -right-3'
									alt=''
								/>
							</div>
							<div className='relative flex justify-center w-[100px]'>
								<img
									src={icon5}
									className='absolute top-[9.2rem] z-10'
									alt=''
								/>
								<img src={rect1} className='absolute top-[7.2rem]' alt='' />
							</div>
						</div>
						<div className='flex '>
							<div className='relative flex justify-center w-[100px]'>
								<img
									src={icon3}
									className='absolute top-[15.5rem] z-10'
									alt=''
								/>
								<img className='absolute top-[13.5rem]' src={rect1} alt='' />
							</div>
							<div className='relative w-[200px]'>
								<img
									src={curve3}
									className='absolute top-[11.7rem] -left-4'
									alt=''
								/>
								<img
									src={curve6}
									className='absolute top-[11.7rem] -right-4'
									alt=''
								/>
							</div>
							<div className='relative flex justify-center w-[100px]'>
								<img
									src={icon6}
									className='absolute top-[15.5rem] z-10'
									alt=''
								/>
								<img src={rect1} className='absolute top-[13.5rem]' alt='' />
							</div>
						</div>
						<div></div>
						<div></div>
					</div>
					<div className='rightleft flex flex-col items-start justify-evenly space-y-4'>
						<div>
							<h3 className='w-[262px] h-[25] font-[500] text-[22px] leading-[28.62px] text-[#ed1c24] '>
								UI/UX design
							</h3>
							<p className='h-[61px] w-[270px] font-400 text-[18px] leading-[23.4px] text-[#000000]'>
								Patterns of web and mobile user experience to deliver exactly
								what they desire.
							</p>
						</div>
						<div>
							<h3 className='w-[262px] h-[25] font-[500] text-[22px] leading-[28.62px] text-[#ed1c24] '>
								Project management
							</h3>
							<p className='h-[75px] w-[322px] font-400 text-[18px] leading-[23.4px] text-[#000000]'>
								Seamless integration to your software processes with special
								Quality Check experts available at Felix Tech Labs.
							</p>
						</div>
						<div>
							<h3 className='w-[262px] h-[25] font-[500] text-[22px] leading-[28.62px] text-[#ed1c24] '>
								Social media marketing
							</h3>
							<p className='h-[94px] w-[289px] font-400 text-[18px] leading-[23.4px] text-[#000000]'>
								Spread a word for your business by taking advantage of our
								global presence .
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Header
