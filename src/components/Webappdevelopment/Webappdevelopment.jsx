/** @format */

import React from 'react'
import opens from '../../assets/images/Open source-cuate (1) 1.png'
import bg1 from '../../assets/images/Ellipse 170.png'
import php from '../../assets/images/php.png'
import mongo from '../../assets/images/mongo.png'
import node from '../../assets/images/nodejs.png'
import python from '../../assets/images/python.png'
import java from '../../assets/images/java.png'
import ruby from '../../assets/images/Vector (1).png'
import gif from '../../assets/images/gif1.gif'
import ellipse from '../../assets/images/Ellipse 64.png'

import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

import image14 from '../../assets/images/image 14.png'
import animationui from '../../assets/images/75800-ios-ui-animation 1.png'
import group81 from '../../assets/images/Group 81.png'

const Webappdevelopment = () => {
	return (
		<>
			{/* mobile views */}
			<div className='md:hidden'>
				<div className='w-[193px] h-[27px] shrink-0 mx-auto mt-5 space-y-8'>
					<h2 className='text-[#ED1C24] font-dm text-[17px] not-italic font-[700] leading-normal'>
						Web app development
					</h2>
					<div className='relative ml-2'>
						<img className='z-10' src={opens} alt='' />
						<img className='absolute top-0 -z-10' src={bg1} alt='' />
					</div>
				</div>

				<div className='mt-[11rem] w-[275px] h-[85] mx-auto shrink-0 space-y-3'>
					<p className='text-[#000] font-dm text-[14px] not-italic font-[400] leading-normal'>
						With thousands of millions of web URLs existing on the Internet;
						don’t just make your company’s website add another value to the
						clutter.
					</p>
					<p className='text-[#000] font-dm text-[14px] not-italic font-[400] leading-normal'>
						Get in touch with to avail customized web app development services
						that can help your reach your target customers by applying correct
						strategies, effective content, and excellent blend of promotional
						campaigns. Establish a niche for your business because there is no
						one better than you at it!
					</p>

					<h2 className='text-[#000] font-dm text-[16px] not-italic font-[500] leading-normal'>
						Our competence on the backend side includes:
					</h2>
					<div className='flex justify-center space-x-4'>
						<img src={php} className='w-[41px] h-[39.016px] shrink-0' alt='' />
						<div>
							<p className='text-[#000] font-dm text-[14px] not-italic font-[400] leading-normal'>
								PHP (Hypertext Preprocessor) is known as a general-purpose
								scripting language that can be used to develop dynamic and
								interactive websites.
							</p>
						</div>
					</div>
					<div className='flex justify-center space-x-4'>
						<img src={node} className='w-[41px] h-[39.016px] shrink-0' alt='' />
						<div>
							<p className='text-[#000] font-dm text-[14px] not-italic font-[400] leading-normal'>
								Node.js is an open-source, cross-platform, back-end JavaScript
								runtime environment that runs on a JavaScript Engine and
								executes JavaScript code outside a web browser.
							</p>
						</div>
					</div>
					<div className='flex justify-center space-x-4'>
						<img src={java} className='w-[41px] h-[39.016px] shrink-0' alt='' />
						<div>
							<p className='text-[#000] font-dm text-[14px] not-italic font-[400] leading-normal'>
								Java is one of the most popular and widely used programming
								languages and platforms. It is highly scalable
							</p>
						</div>
					</div>
					<div className='flex justify-center space-x-4'>
						<img
							src={mongo}
							className='w-[41px] h-[39.016px] shrink-0'
							alt=''
						/>
						<div>
							<p className='text-[#000] font-dm text-[14px] not-italic font-[400] leading-normal'>
								MongoDB is an open source NoSQL database management program.
								NoSQL is used as an alternative to traditional relational
								databases.
							</p>
						</div>
					</div>
					<div className='flex justify-center space-x-4'>
						<img
							src={python}
							className='w-[41px] h-[39.016px] shrink-0'
							alt=''
						/>
						<div>
							<p className='text-[#000] font-dm text-[14px] not-italic font-[400] leading-normal'>
								Python programming language (latest Python 3) is being used in
								web development, Machine Learning applications, along with all
								cutting edge technology in Software Industry
							</p>
						</div>
					</div>
					<div className='flex justify-center space-x-4'>
						<img src={ruby} className='w-[41px] h-[39.016px] shrink-0' alt='' />
						<div>
							<p className='text-[#000] font-dm text-[14px] not-italic font-[400] leading-normal'>
								Ruby is a general-purpose, interpreted programming language that
								supports various programming paradigms such as procedural,
								functional, and object-oriented programming.
							</p>
						</div>
					</div>
				</div>
				<div className='w-[180px] h-[15px] shrink-0 mx-auto mt-10'>
					<h2 className='text-[#000] font-dm text-[14px] not-italic font-[700] leading-normal underline decoration-2 decoration-[gray]'>
						And on the front-end side
					</h2>
				</div>
			</div>

			{/* destop views */}
			<div className='hidden md:block'>
				<div className='relative'>
					{/* <img
					src={gif}
					className='absolute top-0 left-[2rem] -z-10 rotate-[89.472deg] w-[435.542px] h-[441.625px]'
					alt=''
				/>
				<img
					src={ellipse}
					className='absolute top-20 w-[393.396px] h-[268.043px] left-[2.5rem] -z-10 '
					alt=''
				/>
				<img
					src={gif}
					className='absolute top-[39rem] -left-[2.5rem] -z-10 rotate-[89.472deg] w-[435.542px] h-[381.625px]'
					alt=''
				/>
				<img
					src={ellipse}
					className='absolute top-[42rem] w-[363.396px] h-[268.043px] left-1 -z-10 '
					alt=''
				/> */}
					{/* <img src={gif} className='absolute top-[36rem] -right-[10rem] -z-10 rotate-[89.472deg] w-[435.542px] h-[381.625px] truncate' alt="" />
                <img src={ellipse} className='absolute top-[40rem] -right-[8rem] w-[363.396px] h-[268.043px] -z-10 truncate' alt="" />
                <img src={gif} className='absolute top-[72rem] -right-[6rem] -z-10 rotate-[89.472deg] w-[435.542px] h-[381.625px] truncate' alt="" />
                <img src={ellipse} className='absolute top-[75rem] -right-[4rem] w-[363.396px] h-[268.043px] -z-10 truncate ' alt="" /> */}

					<div className='flex flex-col justify-between items-center space-y-10 mt-48  mx-auto w-[90%]'>
						<h2 className='!w-[83%] h-[47px] ml-48 font-dm font-[500] text-[38px] leading-[49.48px] text-[#ed1c24]'>
							Web app development
						</h2>
						<div className='flex h-[290px] justify-center items-center '>
							<p className='w-[555px] ml-20 font-dm font-[400] text-[22px] leading-[28.64px]	'>
								With thousands of millions of web URLs existing <br /> on the
								Internet; don’t just make your company’s <br /> website add
								another value to the clutter. <br />
								<br />
								Get in touch with to avail customized web app development
								services that can help your reach your target customers by
								applying correct strategies, effective content, and excellent
								blend of promotional campaigns. Establish a niche for your
								business because there is no one better than you at it!
							</p>
							<div className='relative ml-10'>
								<img className='z-10' src={opens} alt='' />
								<img className='absolute top-0 -z-10' src={bg1} alt='' />
							</div>
						</div>
					</div>

					<div className='flex flex-col  justify-start items-center space-y-5 my-[4rem] w-[90%] mx-auto'>
						<h5 className='!w-[83%] h-[52px] ml-48 font-dm font-[500] text-[22px] leading-[28.64px]'>
							Our competence on the backend side includes:
						</h5>
						<div className='flex justify-center items-center space-x-14 ml-24'>
							<div className='flex flex-col w-[486px] space-y-5'>
								<div className='flex space-x-10 !justify-center'>
									<img src={php} className='w-[62px] h-[59px]' alt='' />
									<p className='w-[387px] font-dm font-[400] text-[18px] leading-[23.44px] '>
										PHP (Hypertext Preprocessor) is known as a general-purpose
										scripting language that can be used to develop dynamic and
										interactive websites.{' '}
									</p>
								</div>
								<div className='flex space-x-2 !justify-center items-center'>
									<img src={node} className='w-[96.46px] h-[105px]' alt='' />
									<p className='w-[387px] font-dm font-[400] text-[18px] leading-[23.44px]'>
										Node.js is an open-source, cross-platform, back-end
										JavaScript runtime environment that runs on a JavaScript
										Engine and executes JavaScript code outside a web browser.
									</p>
								</div>
								<div className='flex space-x-10 justify-center'>
									<img src={java} className='w-[66px] h-[88.81px]' alt='' />
									<p className='w-[387px] font-dm font-[400] text-[18px] leading-[23.44px]'>
										Java is one of the most popular and widely used programming
										languages and platforms. It is highly scalable
									</p>
								</div>
							</div>
							<div className='flex flex-col w-[486px] space-y-9'>
								<div className='flex justify-start space-x-2 '>
									<img src={mongo} className='w-[76.15px] h-[82.89px]' alt='' />
									<p className='w-[388px] font-dm font-[400] text-[18px] leading-[23.44px]'>
										MongoDB is an open source NoSQL database management program.
										NoSQL is used as an alternative to traditional relational
										databases.{' '}
									</p>
								</div>
								<div className='flex space-x-4 justify-start'>
									<img src={python} className='w-[66px] h-[66.94px]' alt='' />
									<p className='w-[385px] font-dm font-[400] text-[18px] leading-[23.44px]'>
										Python programming language (latest Python 3) is being used
										in web development, Machine Learning applications, along
										with all cutting edge technology in Software Industry
									</p>
								</div>
								<div className='flex space-x-7 justify-start'>
									<img src={ruby} className='w-[56px] h-[53px]' alt='' />
									<p className='w-[402px] font-dm font-[400] text-[18px] leading-[23.44px]'>
										Ruby is a general-purpose, interpreted programming language
										that supports various programming paradigms such as
										procedural, functional, and object-oriented programming.
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className='flex flex-col  justify-start items-center space-y-5 my-[4rem] w-[90%] mx-auto'>
						<h5 className='!w-[84.5%] h-[52px] ml-48 font-dm font-[500] text-[22px] leading-[28.64px]'>
							And on the front-end side:
						</h5>
						<div className='flex justify-center items-center space-x-14 ml-24'>
							<div className='flex flex-col w-[486px] space-y-5'>
								<div className='flex space-x-10 !justify-center'>
									<img src={php} className='w-[62px] h-[59px]' alt='' />
									<p className='w-[382px] font-dm font-[400] text-[18px] leading-[23.44px] '>
										HTML is at the core of every web page, regardless the
										complexity of a site or number of technologies involved.
										It's an essential skill for any web professional.
									</p>
								</div>
								<div className='flex space-x-2 !justify-center items-center'>
									<img src={node} className='w-[96.46px] h-[105px]' alt='' />
									<p className='w-[382px] font-dm font-[400] text-[18px] leading-[23.44px] '>
										Cascading Style Sheets fondly referred to as CSS is a simply
										designed language intended to simplify the process of making
										web pages presentable.
									</p>
								</div>
								<div className='flex space-x-10 justify-center'>
									<img src={java} className='w-[66px] h-[88.81px]' alt='' />
									<p className='w-[382px] font-dm font-[400] text-[18px] leading-[23.44px]'>
										JavaScript is a famous scripting language used to create
										magic on sites to make the site interactive for the user. It
										is used to enhance the functionality of a website.
									</p>
								</div>
								<div className='flex space-x-10 justify-center'>
									<img src={java} className='w-[66px] h-[88.81px]' alt='' />
									<p className='w-[359px] font-dm font-[400] text-[18px] leading-[23.44px]'>
										AngularJs is used to create interactive components of a
										website. It is a highly preferred framework, due to its
										effectiveness, simplicity.
									</p>
								</div>
							</div>
							<div className='flex flex-col w-[510px] space-y-5'>
								<div className='flex justify-start space-x-2 '>
									<img src={mongo} className='w-[76.15px] h-[82.89px]' alt='' />
									<p className='!w-[438px] font-dm font-[400] text-[18px] leading-[23.44px]'>
										Amazon Web Services is a subsidiary of Amazon that provides
										on-demand cloud computing platforms and APIs to individuals,
										companies, and governments, on a metered pay-as-you-go
										basis.
									</p>
								</div>
								<div className='flex space-x-4 justify-start'>
									<img src={python} className='w-[66px] h-[66.94px]' alt='' />
									<p className='w-[428px] font-dm font-[400] text-[18px] leading-[23.44px]'>
										React Native is an open-source UI software framework created
										by Meta Platforms, Inc. It is used to develop applications
										for Android, Android TV, iOS, macOS, tvOS, Web, Windows
									</p>
								</div>
								<div className='flex space-x-7 justify-start'>
									<img src={ruby} className='w-[56px] h-[53px]' alt='' />
									<p className='w-[403px] font-dm font-[400] text-[18px] leading-[23.44px]'>
										{' '}
										It is used more and more to be the foundation and the
										primary driving force of web development and application
										development, from desktops to tablets and smartphones.
									</p>
								</div>
								<div className='flex space-x-7 justify-start'>
									<img src={ruby} className='w-[56px] h-[53px]' alt='' />
									<p className='w-[403px] font-dm font-[400] text-[18px] leading-[23.44px]'>
										Flutter is Google's portable UI toolkit for crafting
										beautiful, natively compiled applications for mobile, web,
										and desktop from a single codebase.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div>
					<h2 className='w-[6.9375rem] mt-32 h-[2.9375rem] ml-[15rem]  text-[#ED1C24] font-dm text-[2.375rem] font-[500]'>
						Work
					</h2>
					<OwlCarousel
						items={1.4}
						className='owl-theme mt-16 ml-20 w-[1400px]'
						loop
						margin={0}
					>
						{/* first card */}
						<div
							class='item'
							className=' !bg-[#ed1c24]  w-[932px] h-[373px] rounded-[28px]'
						>
							<div className='flex '>
								<div className='flex space-y-1 flex-col items-start px-20 py-12 justify-between '>
									<h2 className='-mt-9  w-[7.5rem] h-[2.3125rem] text-[#fff] font-dm text-[32px] font-[500]'>
										V-Sales
									</h2>
									<p className=' text-[#fff] font-dm text-[18px] font-[400]'>
										UI/UX development
										<span className='text-[3rem] p-0 m-0 '> . </span>
										<span className='list-disc text-[#fff] font-dm text-[1.125rem] font-[400]'>
											{' '}
											Web development
										</span>
									</p>

									{/* <ul  className='list-disc w-[9.6875rem] h-[1.1875rem] text-[#fff] font-dm text-[1.125rem] font-[400]'>
                    <li>Web development</li>
                  </ul> */}

									<p className='w-[28.0625rem] h-[12.3125rem]  text-[#fff] font-dm text-[18px] font-[400]'>
										V-sales is the best for your business it saves your time &
										money without any technical knowledge. Simple way to Track
										Unlimited Sales, Profit, Stock, Generate Invoice, CRM, POS &
										much more.Smartly designed for small-business owners and
										entrepreneurs. This is the most effective way to track all
										of your daily sales information.
									</p>

									<button className='ml-[2rem] -mt-[5rem] w-[5.375rem] h-[0.9375rem] text-[#fff] font-dm text-[1rem] font-[400] '>
										Read more
									</button>
								</div>
								<div
									className='w-[281.25px] h-[153px] flex justify-center
							items-center mt-20 mr-5 '
								>
									<img src={group81} alt='' />
								</div>
							</div>
						</div>
						{/* second card */}
						<div
							class='item'
							className=' !bg-[#101942]  w-[932px] h-[373px] rounded-[28px]'
						>
							<div className='flex '>
								<div className='flex space-y-1 flex-col items-start px-20 py-12 justify-between '>
									<h2 className='-mt-9  w-[7.5rem] h-[2.3125rem] text-[#fff] font-dm text-[32px] font-[500]'>
										V-Sales
									</h2>
									<p className=' text-[#fff] font-dm text-[18px] font-[400]'>
										UI/UX development
										<span className='text-[3rem] p-0 m-0 '> . </span>
										<span className='list-disc text-[#fff] font-dm text-[1.125rem] font-[400]'>
											{' '}
											Web development
										</span>
									</p>

									{/* <ul  className='list-disc w-[9.6875rem] h-[1.1875rem] text-[#fff] font-dm text-[1.125rem] font-[400]'>
                    <li>Web development</li>
                  </ul> */}

									<p className='w-[28.0625rem] h-[12.3125rem]  text-[#fff] font-dm text-[18px] font-[400]'>
										V-sales is the best for your business it saves your time &
										money without any technical knowledge. Simple way to Track
										Unlimited Sales, Profit, Stock, Generate Invoice, CRM, POS &
										much more.Smartly designed for small-business owners and
										entrepreneurs. This is the most effective way to track all
										of your daily sales information.
									</p>

									<button className='ml-[2rem] -mt-[5rem] w-[5.375rem] h-[0.9375rem] text-[#fff] font-dm text-[1rem] font-[400] '>
										Read more
									</button>
								</div>
								<div
									className='w-[281.25px] h-[153px] flex justify-center
							items-center mt-20 mr-5 '
								>
									<img src={group81} alt='' />
								</div>
							</div>
						</div>
						{/* third card */}
						<div
							class='item'
							className=' !bg-[#ed1c24]  w-[932px] h-[373px] rounded-[28px]'
						>
							<div className='flex '>
								<div className='flex space-y-1 flex-col items-start px-20 py-12 justify-between '>
									<h2 className='-mt-9  w-[7.5rem] h-[2.3125rem] text-[#fff] font-dm text-[32px] font-[500]'>
										V-Sales
									</h2>
									<p className=' text-[#fff] font-dm text-[18px] font-[400]'>
										UI/UX development
										<span className='text-[3rem] p-0 m-0 '> . </span>
										<span className='list-disc text-[#fff] font-dm text-[1.125rem] font-[400]'>
											{' '}
											Web development
										</span>
									</p>

									{/* <ul  className='list-disc w-[9.6875rem] h-[1.1875rem] text-[#fff] font-dm text-[1.125rem] font-[400]'>
                    <li>Web development</li>
                  </ul> */}

									<p className='w-[28.0625rem] h-[12.3125rem]  text-[#fff] font-dm text-[18px] font-[400]'>
										V-sales is the best for your business it saves your time &
										money without any technical knowledge. Simple way to Track
										Unlimited Sales, Profit, Stock, Generate Invoice, CRM, POS &
										much more.Smartly designed for small-business owners and
										entrepreneurs. This is the most effective way to track all
										of your daily sales information.
									</p>

									<button className='ml-[2rem] -mt-[5rem] w-[5.375rem] h-[0.9375rem] text-[#fff] font-dm text-[1rem] font-[400] '>
										Read more
									</button>
								</div>
								<div
									className='w-[281.25px] h-[153px] flex justify-center
							items-center mt-20 mr-5 '
								>
									<img src={group81} alt='' />
								</div>
							</div>
						</div>
						{/* four card */}
						<div
							class='item'
							className=' !bg-[#101942]  w-[932px] h-[373px] rounded-[28px]'
						>
							<div className='flex '>
								<div className='flex space-y-1 flex-col items-start px-20 py-12 justify-between '>
									<h2 className='-mt-9  w-[7.5rem] h-[2.3125rem] text-[#fff] font-dm text-[32px] font-[500]'>
										V-Sales
									</h2>
									<p className=' text-[#fff] font-dm text-[18px] font-[400]'>
										UI/UX development
										<span className='text-[3rem] p-0 m-0 '> . </span>
										<span className='list-disc text-[#fff] font-dm text-[1.125rem] font-[400]'>
											{' '}
											Web development
										</span>
									</p>

									{/* <ul  className='list-disc w-[9.6875rem] h-[1.1875rem] text-[#fff] font-dm text-[1.125rem] font-[400]'>
                    <li>Web development</li>
                  </ul> */}

									<p className='w-[28.0625rem] h-[12.3125rem]  text-[#fff] font-dm text-[18px] font-[400]'>
										V-sales is the best for your business it saves your time &
										money without any technical knowledge. Simple way to Track
										Unlimited Sales, Profit, Stock, Generate Invoice, CRM, POS &
										much more.Smartly designed for small-business owners and
										entrepreneurs. This is the most effective way to track all
										of your daily sales information.
									</p>

									<button className='ml-[2rem] -mt-[5rem] w-[5.375rem] h-[0.9375rem] text-[#fff] font-dm text-[1rem] font-[400] '>
										Read more
									</button>
								</div>
								<div
									className='w-[281.25px] h-[153px] flex justify-center
							items-center mt-20 mr-5 '
								>
									<img src={group81} alt='' />
								</div>
							</div>
						</div>
					</OwlCarousel>
					<div className='flex justify-start items-center ml-[8rem] '>
						<button className='hover:bg-[#ed1c24]  hover:text-[white] w-[315px] h-[52px] rounded-[22px] border-[1.5px] border-[#ed1c24] text-[#000000] text-[20px] font-dm font-[400]'>
							View more
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default Webappdevelopment
