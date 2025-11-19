import React from 'react'
import playstore from '../../assets/images/playstore-icon-big.png'
import appstore from '../../assets/images/appstore-icon-big.png'
import facebook from '../../assets/images/facebook.webp'
import insta from '../../assets/images/instagram.webp'
import linkedin from '../../assets/images/linkedin.webp'
import twitter from '../../assets/images/twitter.webp'
import youtube from '../../assets/images/youtube.webp'
export default function Footer() {
  return (
    <>
      <div className='w-[100%] bg-[#F8F8FF]'>
        <div className='max-w-[1330px] mx-auto py-11  justify-between flex-wrap flex'>
          <div className='px-3'>
            <h2 className='text-[32px] font-normal'>
              Shop Non-Stop on 
            </h2>
            <p className='text-[18px] pt-3 text-[rgb(97,97,115)]  pb-6'>
              Trusted by more than 1 Crore Indians <br />
              Cash on Delivery | Free Delivery
            </p>
            <div className='flex gap-4'>
              <div className=''>
                <img src={playstore} className=' w-[191px]' alt="" />
              </div>
              <div className=''>
                <img src={appstore} className=' w-[191px]' alt="" />
              </div>

            </div>

          </div>
          <div className='md:block hidden'>
            <ul className='text-[18px] flex font-semibold  flex-col gap-5 text-[rgb(97,97,115)]'>
              <li>Careers</li>
              <li>Become a supplier</li>
              <li>Hall of Fame</li>
              <li>Sitemap</li>
            </ul>
          </div>
          <div className='md:block hidden'>
            <ul className='text-[18px] flex font-semibold  flex-col gap-5 text-[rgb(97,97,115)]'>
              <li>
                Legal and Policies
              </li>
              <li>

                 Tech Blog
              </li>
              <li>
                Notices and Returns

              </li>


            </ul>
          </div>
          <div className='md:block hidden'>
            <ul>
              <li className='text-[20px] font-semibold'>
                Reach out to us
              </li>
              <li className='flex gap-4 py-4'>
                <img className='w-[24px]' src={facebook} alt="" />
                <img className='w-[24px]' src={insta} alt="" />
                <img className='w-[24px]' src={youtube} alt="" />
                <img className='w-[24px]' src={linkedin} alt="" />
                <img className='w-[24px]' src={twitter} alt="" />
              </li>
            </ul>
          </div>
          <div className='basis-[19%] md:block hidden'>
            <h3 className='text-[20px] font-semibold'>
              Contact Us
            </h3>
            <p className='text-[12px] py-4'>
              Fashnear Technologies Private Limited, <br />
              CIN: U74900KA2015PTC082263 <br />
              3rd Floor, Wing-E, Helios Business Park,Kadubeesanahalli Village,
              Varthur Hobli, Outer Ring Road Bellandur, Bangalore, Bangalore South, Karnataka, India, 560103<br />
              E-mail address: query@.com<br />
              © 2015-2024 .com
            </p>
          </div>
        </div>
      </div>

    </>
  )
}
