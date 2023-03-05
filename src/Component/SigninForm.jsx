import React from 'react'
import './SigninForm.css'
import logo from '../img/logo.png'
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineHeadsetMic } from "react-icons/md";

// import bgImage from '../Image/image.jpg'

const SigninForm = () => {
   return (
      <section className=' w-full p-2 
      lg:p-[50px] 
      md:p-[25px] 
      sm:p-5'>

         <div className='full-signin-div flex items-end justify-center
         gap-3
         lg:gap-12 
         md:gap-6 
         sm:gap-3 
         '>

            <div className='main-div flex'>

               {/* information page start */}
               <div className='information-page shadow shadow-black text-white bg-center bg-cover bg-no-repeat 
               p-[10px] h-[600px] w-full
               lg:p-[50px] lg:h-[782px] lg:w-[702px] 
               md:p-[25px] md:h-[700px] md:w-full 
               sm:p-[20px] sm:h-[600px] sm:w-full
               '>

                  <div className='
                  mb-[130px] 
                  lg:mb-[300px] 
                  md:mb-[250px] 
                  sm:mb-[150px]
                  '>
                     <img src={logo} alt="Logo" />
                  </div>


                  <h1 className=' mb-2 font-bold
                  lg:text-[42px] lg:w-[350px]
                  md:text-[35px] md:w-[350px]
                  sm:text-[28px] sm:w-[300px]
                  '>
                     Welcome To Invome
                  </h1>

                  <p className=' text-xs
                  lg:w-[595px] lg:text-base 
                  md:w-[350px] md:text-base
                  sm:w-[250px] sm:text-base
                  '>
                     It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                  </p>

                  {/* icons start */}
                  <div className='mb-10 mt-5 gap-[10px] flex items-center text-lg'>

                     <a className='p-3 bg-white bg-opacity-20 rounded-xl' href='@'>
                        <FaFacebookF />
                     </a>

                     <a href='@' className='p-3 bg-white bg-opacity-20 rounded-xl'>
                        <AiOutlineTwitter />
                     </a>

                     <a href='@' className='p-3 bg-white bg-opacity-20 rounded-xl'>
                        <FaLinkedinIn />
                     </a>

                  </div>
                  {/* icons start */}


                  <small className='text-xs sm:text-sm '>Privacy PolicyContact &copy; 20222 DexignLab</small>

               </div>
               {/* information page end */}


               {/* Sign in page start */}
               <div className='bg-white flex flex-col justify-center 
               h-[600px] w-full px-3
               lg:h-[782px] lg:w-fit lg:px-10 
               md:h-[700px] md:w-fit md:px-5 
               sm:h-[600px] sm:w-full sm:px-3
               '>

                  <div>
                     <h1 className='mb-1 font-bold
                     text-xl
                     lg:text-[35px]
                     md:text-[25px]
                     sm:text-[25px]
                     '>Sign in</h1>

                     <p className='mb-5 
                     text-xs
                     lg:text-base 
                     md:text-sm 
                     sm:text-xs
                     '>Sign in by entering information below</p>
                  </div>

                  <form action="signin">

                     <div className='mb-4'>
                        <label className='mb-2' htmlFor="email">Email</label>
                        <br />
                        <input className='w-full border-b-2 border-black py-4' type="email" placeholder='demo@example.com' />
                     </div>

                     <div>
                        <label className='mb-2' htmlFor="password">Password</label>
                        <br />
                        <input className='w-full border-b-2 border-black py-4 rounded-lg' type="password" placeholder='123456' />
                     </div>

                     <div className='flex gap-2 items-center rounded-lg mt-6 mb-8'>
                        <input type="checkbox" />
                        <span className='text-xs 
                        lg:text-base 
                        md:text-base 
                        sm:text-xs
                        '>
                           Remember my preference
                        </span>
                     </div>

                     <button className='mb-2 text-center w-full bg-[#44814E] text-white py-4 rounded-lg'>Sign in</button>

                     <a className='text-[#666666] text-center block
                     text-xs
                     lg:text-base 
                     md:text-base 
                     sm:text-xs
                     ' href="@">Don't have an account? <span className='text-[#44814E]'>Sign up</span></a>
                  </form>

               </div>
               {/* Sign in page end */}

            </div>

            {/* side button start */}
            <div className='icons-div'>
               <a className='mb-[10px] p-3 text-white flex items-center justify-center w-[50px] h-[50px] rounded-full' href="@">
                  <MdOutlineHeadsetMic />
               </a>

               <a className='p-3 text-white flex items-center justify-center w-[50px] h-[50px] rounded-full' href="@">
                  <AiOutlineShoppingCart />
               </a>
            </div>
            {/* side button end */}

         </div>

      </section>
   )
}

export default SigninForm