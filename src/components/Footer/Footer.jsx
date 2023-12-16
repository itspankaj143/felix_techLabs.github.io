/** @format */

import rectangle from '../../assets/images/Rectangle 156.png'
import twitter from '../../assets/images/🦆 icon _twitter fill_.png'
import linkedin from '../../assets/images/🦆 icon _linkedin_.png'

import call from '../../assets/images/🦆 icon _call_.png'
import mail from '../../assets/images/🦆 icon _mail_.png'
import vectorlocation from '../../assets/images/location.png'

// mobile
import footerrectangle from '../../assets/images/FooterforMobile.png'

const Footer = () => {
	return (
		<>
			{/* for mobile */}

			<div className='mt-[2rem] md:hidden  w-[360px] mx-auto border-white truncate '>
				<img src={footerrectangle} alt='' />
				<div className='relative flex  justify-start items-center'>
					<img
						className='absolute bottom-[13rem] px-[30px] '
						src={call}
						alt=''
					/>
					<p className='absolute text-[#fff] h-[17px] bottom-[13rem] px-[63px]'>
						+91 20 652 66070{' '}
					</p>
					<img
						className='absolute  bottom-[10.8rem] px-[30px]'
						src={mail}
						alt=''
					/>
					<p className='absolute bottom-[11rem] h-[15px] px-[63px] text-white'>
						info@felixtechlabs.com
					</p>

					<img
						className='absolute   bottom-[8.11rem] px-[30px]'
						src={vectorlocation}
						alt=''
					/>
					<p className='absolute bottom-[8.5rem] px-[63px]  h-[20px] text-[11px] font-[400] text-white'>
						New Airport Road, Mhada <br /> Colony, Viman Nagar, Pune
					</p>
					<img
						src={twitter}
						className='absolute   bottom-[5rem] px-[30px]'
						alt=''
					/>
					<img
						src={linkedin}
						className='absolute  bottom-[5rem] px-[70px] '
						alt=''
					/>
					<p className='absolute w-[100px] bottom-[15rem] px-[15.8rem] h-[17px] shrink-0 '>
						<a
							href=''
							className=' absolute text-[#fff] font-dm text-[14px] font-[500]'
						>
							SERVICES
						</a>
					</p>
					<p className='absolute w-[100px] bottom-[12rem] px-[15.8rem] h-[17px] shrink-0 '>
						<a
							href=''
							className=' absolute text-[#fff] font-dm text-[14px] font-[500]'
						>
							APPROACH
						</a>
					</p>
					<p className='absolute w-[100px] bottom-[8.5rem] px-[15.8rem] h-[17px] shrink-0 '>
						<a
							href=''
							className=' absolute text-[#fff] font-dm text-[14px] font-[500]'
						>
							WORK
						</a>
					</p>
					<p className='absolute w-[100px] bottom-[5.5rem] px-[15.8rem] h-[17px] shrink-0 '>
						<a
							href=''
							className=' absolute text-[#fff] font-dm text-[14px] font-[500]'
						>
							CONTACT
						</a>
					</p>

					<div className='ml-[4rem]'>
						<p className='absolute   text-white bottom-[1.5rem] font-dm text-[12px] w-[269px]  h-[18px] shrink-0  font-[400] '>
							© 2022 Felix TechLabs LLP. All Rights Reserved
						</p>
					</div>
				</div>
			</div>

			{/* destop */}

			<div className='hidden md:block   md:mt-[63rem]  md:max-w-[1440px] mx-auto '>
				<div className='relative border-2'>
					<img
						src={rectangle}
						className=' md:h-[506.239px] absolute md:bottom-7 md:left-0 md:-z-10 md:truncate'
						alt=''
					/>
					<img
						src={twitter}
						className='absolute  md:bottom-[15rem] md:left-[12rem] md:-z-10'
						alt=''
					/>
					<img
						src={linkedin}
						className='absolute md:bottom-[15rem] md:left-[18rem] md:-z-10'
						alt=''
					/>
					<p className='absolute md:bottom-[9rem] md:left-[9rem] md:text-white md:w-[478px] md:h-[25px] md:font-dm md:text-[20px] md:font-[500] '>
						© 2022 Felix TechLabs LLP. All Rights Reserved
					</p>
					<div className='relative'>
						<img
							className='absolute md:bottom-[20rem] md:left-[46rem]'
							src={call}
							alt=''
						/>
						<p className='absolute md:bottom-[20rem] md:left-[50rem] md:text-[#fff]'>
							+91 20 652 66070{' '}
						</p>
						<img
							className='absolute md:bottom-[15rem] md:left-[46rem]'
							src={mail}
							alt=''
						/>
						<p className='absolute md:bottom-[15rem] md:left-[50rem] md:text-white'>
							info@felixtechlabs.com
						</p>
						<img
							className='absolute md:bottom-[10rem] md:left-[46rem]'
							src={vectorlocation}
							alt=''
						/>
						<p className='absolute md:bottom-[8.75rem] md:left-[50rem] md:text-white'>
							3 Ideal Chambers, 2nd floor,Ideal Colony, <br /> Paud Road
							Kothrud, Pune
						</p>
					</div>
					<div className='relative'>
						<p className='absolute md:bottom-[22rem] md:text-white md:right-[10rem] '>
							<a
								href=''
								className='footerLink absolute md:w-[140px] md:hover:text-[23px] md:h-[33px] md:text-[#fff] md:font-dm md:text-[20px] md:font-[700]'
							>
								SERVICES
							</a>
						</p>
						<p className='absolute md:bottom-[22rem] md:text-white md:right-[10rem] '>
							<a
								href=''
								className='footerLink absolute md:top-14 md:hover:text-[23px] md:w-[140px] md:h-[33px] md:text-[#fff] md:font-dm md:text-[20px] md:font-[700]'
							>
								APPROACH
							</a>
						</p>
						<p className='absolute md:bottom-[22rem] md:text-white md:right-[10rem] '>
							<a
								href=''
								className='footerLink absolute md:top-[7rem] md:hover:text-[23px] md:w-[140px] md:h-[33px] md:text-[#fff] md:font-dm md:text-[20px] md:font-[700]'
							>
								WORK
							</a>
						</p>
						<p className='absolute md:bottom-[22rem] md:text-white md:right-[10rem] '>
							<a
								href=''
								className='footerLink absolute md:top-[10rem] md:hover:text-[23px] md:w-[140px] md:h-[33px] md:text-[#fff] md:font-dm md:text-[20px] md:font-[700]'
							>
								CONTACT
							</a>
						</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default Footer
