import React from 'react'
import image from '../../assets/images/image 1.png'
import rectangle from '../../assets/images/Rectangle 43.png'
import arrowbg from '../../assets/images/Ellipse 16.png'
import icon from '../../assets/images/Arrorright.png'
import profile from '../../assets/images/Ellipse 14 (1).png'

const Whoarewe1 = ({click}) => {
  return (
    <>
      <div className='flex justify-center items-center '>
        <div className='!w-[821px]'>
        <img src={image} className='  !h-[445px] z-20' alt="" />

        </div>
        <div className='-ml-[32rem] w-[100%] h-[100vh] bg-[rgba(202,202,202,0.42)] flex justify-end items-center mx-auto -z-10'>
          <div className=' mr-[3rem] w-[588px] h-[300px] flex flex-col justify-center items-start'>
            <h2 className='w-[588px] text-[#000] text-[42px] font-[400] uppercase font-ch '>Turbo charge <span className='text-[48px] font-[400]'>your </span><span className='text-[#ed1c24] text-[65px] font-[600]'> BUsiness revenues</span></h2>
            <p className='w-[537px] text-[#000] text-[28px] font-[400] font-news'>Through our high calibre and holistic technology solutions</p>

          </div>
        </div>
      </div>
      <div className='max-w-[998px] mx-auto my-[12rem] space-y-[2rem] flex flex-col justify-center items-start '>
        <h2 className='text-[#ed1c24] font-news text-[48px] font-[700] uppercase'>who we are</h2>
        <p className='max-w-[998px] text-[#000] font-news text-[28px] font-[400]'>We are a full-time mobile and web application development company based in Pune, and we have specialist competencies in offering deeply personalized technology solutions to contribute towards your brand’s growth and digital visibility. </p>
      </div>

      <div className='max-w-[1024px] mx-auto my-[12rem] space-y-[2rem] flex flex-col justify-center items-start '>
        <h2 className='text-[#ed1c24] font-news text-[48px] font-[700] uppercase'>What we do</h2>
        <div className='flex justify-center items-center space-x-4 '>
          <div>
            <h3 className='w-[395px] text-[#000] font-news font-[400] text-[64px] leading-[154.453%]'>Mobile app development</h3>
            <p className='w-[378px] text-[#000] font-news text-[28px] font-[400]'>Rely on us for getting premium quality web applications developed to promote your business.</p>
          </div>
          <img src={rectangle} alt="" className='!w-[545px] !h-[341px] '/>
          <div className='relative' onClick={click}>
            <img src={arrowbg} className='w-[65px] h-[65px]' alt="" />
            <img src={icon} className='absolute top-5 left-5 h-[34px] w-[17px]' alt="" />
          </div>
        </div>
      </div>

      <div className='max-w-[1024px] mx-auto mt-[12rem] space-y-[2rem] flex flex-col justify-center items-start '>
        <h2 className='w-[509px] text-[#ed1c24] text-[48px] font-[700] font-news'>WHAT OUR CLIENTS SAY  </h2>
      </div>
        <div className='flex w-[1160px] mx-auto justify-evenly items-center my-[4rem]'>
          <div className='flex flex-col items-center justify-between space-y-5'>
            <img src={profile} alt="" />
            <h5 className='text-[#ed1c24] font-news text-[22px] font-[700]'>Viraj | CEO |  Fury Gold</h5>
          </div>
          <p className='max-w-[527px] text-[#000] font-news text-[24px] font-[400]'>“Been working with Anuj over a year now, our agency collaborate with many companies such as Pixeto to offer our clients best services. When our expertise in Growth Hacking and conversion optimization combines with Pixeto's web development skills, our clients have no chance but to love us more. We will delivery keep working with them many months.”
          </p>
        </div>
      
    </>
  )
}

export default Whoarewe1