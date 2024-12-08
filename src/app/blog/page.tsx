import Image from 'next/image';
import { SlCalender } from "react-icons/sl";
import { FaCommentSms } from "react-icons/fa6";

export default function BlogDetails(){
    return( 
        
 <div>
{/* 2nd div bg-Image */}


    <div>
<div className="relative w-screen h-[150px] mb-58 bg-gray-100">
      {/* Background Image with 30% Opacity */}
      <div className="absolute inset-0 opacity-60">
        <Image
          src="/img.png"
          alt="background"
          layout="fill"
          objectFit="cover"
        />
      </div>


</div>



              <div className='w-[1920px] flex justify-center h-[3450px] bg-black'> 
                {/* left side */}
                <div className='w-[872px] h-[845px] text-[#4F4F4F] mt-[130px] mx-[300px]'>
                        <Image 
                        src='/about1.jpg'
                        alt=''
                        width={872}
                        height={120}
                        />
                        <div className='flex mt-3 w-[23.97px] h-[24px] cursor-pointer'>
            <p className='w-[23.97px] h-[24px] cursor-pointer px-4 flex text-yellow-600'> <SlCalender/></p>
            <p className=' w-[267px[ h-[24px]  cursor-pointer px-2 text-blue-400'><FaCommentSms /></p>
            
        </div>
        <h1 className='font-bold text-2xl w-[504px] h-8  py-[46px] text-[#333333]'>10 Reasons To Do A Digital Detox challenge</h1>
        <p className='w-[872px] h-[96px] py-[30px] text-[#4F4F4F]'>Netus pretium tellus nulla commodo massa adipiscing in elementum magna congue condimentum placerat habitasse potenti ac orci a quisque tristique elementum et viverra at condimentum scelerisque eu mi. Elit praesent cras vehicula a ullamcorper nulla scelerisque aliquet tempus faucibus quam ac aliquet nibh a condimentum suspendisse hac integer leo erat aliquam ut himenaeos.</p>
        <br/>
        <p className='w-[872px] h-[96px] py-[30px] text-[#4F4F4F]'>Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis varius per a augue magna hac.
 Nec hac et vestibulum duis a tincidunt per a aptent interdum purus feugiat a id aliquet erat 
himenaeos nunc torquent euismod adipiscing adipiscing dui gravida justo.</p>


    <div className='w-[853px] h-[176px] bg-[#FF9F0D] items-center mt-[80px]'>
        <div className='w-[805px] h-[128px] text-[#4F4F4F] my-10 ml-6'>
            <Image 
            src='/tel.jpg'
            alt=''
            width={48}
            height={48}
            className='mt-[50px]'
            />
            
            <p className='w-[700px] text-[#ffff] ml-[50px] text-xl font-bold h-[128px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. </p>
            
            
        </div>

        
        <p className='w-[853px] h-[120px] left-0 text-[#4F4F4F]  mt-[100px]'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
            {/* paragraph + Image div */}

            <div className='w-[853px] flex h-[420px] mt-[60px]'>
                {/* paragraph div */}
                <div className='w-[420px] h-[236px]  text-[#4F4F4F] gap-3'>
                   <p className='w-[420px] gap-2 h-[236px]'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                   <p className='w-[420px] h-[168px] mt-5'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing </p>
                </div>

                {/* img div */}
                <div className='ml-4 w-[424px] h-[366px]'>
                    <Image 
                    src='/a.jpg'
                    alt=''
                    width={424}
                    height={366}
                    />
                </div>
            </div>
            <p className='w-[872px] h-[120px] mt-20 '>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
            <p className='w-[872px] h-[120px] mt-[50px]'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>  
            <Image 
            src='/c.jpg'
            alt=''
            width={872}
            height={60}
            className='mt-10'
            />

            {/* Comment Section */}

            <div className='w-[872px] h-[472px] mt-10'>
                <h1 className='text-2xl font-bold'>Comments - 03</h1>
                <div className='w-[872px] h-[472px] mt-10'>
                    <Image 
                    src='/coffe.jpg'
                    alt=''
                    width={872}
                    height={112}
                    className='cursor-pointer'
                    />

                    <Image 
                    src='/about2.jpg'
                    alt=''
                    width={672}
                    height={112}
                    className='ml-[200px] mt-5 cursor-pointer'
                    />
 
                   <Image 
                    src='/d.jpg'
                    alt=''
                    width={872}
                    height={112}
                    className='cursor-pointer mt-5'
                    />
                </div>
            </div>
             
               {/* Post a comment */}
            
            <div className='w-[872px] h-[424px] mt-5'>
                <h1 className='text-xl border-b-[1px] h-10 border-[#E0E0E0] font-bold'>Post a Comment</h1>
                <div className='w-[872px] mt-5 flex h-[80px]'>
                    <input 
                    placeholder='Name'
                    type='name'
                    className='w-[424px] text-lg text-[#4F4F4F] font-semibold border-[1px] px-3 border-[#E0E0E0] h-[56px]'
                    />

                   <input 
                    placeholder='Email'
                    type='email'
                    className='w-[424px] text-lg text-[#4F4F4F] border-[1px] font-semibold px-3 ml-3 border-[#E0E0E0] h-[56px]'
                    />
                </div>
                <input 
                placeholder='Write a Comment'
                type='text'
                className='leading-[24px] text-top h-[244px] w-[872px]  text-lg text-[#4F4F4F] border-[1px] font-semibold px-3  border-[#E0E0E0]'
                />

                <button className='w-[212px] h-[56px] ease-in-out duration-500 bg-[#FF9F0D] hover:bg-[#ffff] hover:text-[#4F4F4F] text-white mt-10'>Post a Comment</button>

            </div>
    </div>
              
                </div>
                
                {/* Right Side */}
                <div className='w-[424px] mt-[100px]  flex flec-col-2 h-[2501px]'>
        <div className='flex justify-center mt-8 w-[421.82px] border-1 h-[70px]'>

            <input 
            placeholder='Search Your Keyword'
            type="text"
            className='w-[350px] px-3 py-3 bg-zinc-100 border-lg border-gray-300 '
            />
            <button className='w-[76px] h-[69px] cursor-pointer justify-center bg-[#FF9F0D]'>     
           <Image 
            src='/im1.jpg'
            alt=''
            width={24}
            height={24}
            className='ml-6'
            />
            </button>

            

            </div>

            <Image 
            src='/pic3.png'
            alt=''
            width={424}
            height={423}
            className='mt-5'
            />
            <div className='justify-center mt-8 w-[423px] h-[592px] border-[1px] border-gray-400'>

            <h1 className='text-lg w-[200px] font-bold h-[28px] py-5 px-8'>Recent Posts</h1>
            
               <Image 
               src='/about1.png'
               alt=''
               width={323}
               height={107}
               className='ml-8 mt-5 cursor-pointer'
               />

               
               <Image 
               src='/let.jpg'
               alt=''
               width={323}
               height={107}
               className='ml-8 mt-5 cursor-pointer'
               />

               <Image 
               src='/starter.jpg'
               alt=''
               width={323}
               height={107}
               className='cursor-pointer mt-5 ml-8 '
               />

               
               <Image 
               src='/ramen.jpg'
               alt=''
               width={323}
               height={107}
               className='ml-8 mt-5 cursor-pointer'
               />


            </div>

            <div className='justify-center mt-8 w-[423px] h-[592px] border-[1px] border-gray-400'>

            <h1 className='text-lg w-[200px] h-[28p] py-5 px-8 font-bold'>Filter By Menu</h1>
            
               <Image 
               src='/zinger.jpg'
               alt=''
               width={323}
               height={62}
               className='ml-8 mt-5 cursor-pointer'
               />

               
               <Image 
               src='/'
               alt=''
               width={323}
               height={62}
               className='ml-8 mt-5 cursor-pointer'
               />

               <Image 
               src='/'
               alt=''
               width={323}
               height={62}
               className='cursor-pointer ml-8 mt-5'
               />

               
               <Image 
               src='/'
               alt=''
               width={323}
               height={62}
               className='ml-8 mt-5 cursor-pointer'
               />

               <Image 
               src='/'
               alt=''
               width={323}
               height={62}
               className='ml-8 mt-2 cursor-pointer'
               />


            </div>

            <div className='w-[423px] mt-10 h-[308px] border-[1px] border-gray-400'>
              <div className='w-[325px] h-[244px] py-10 ml-10 cursor-pointer' > 

              <Image 
              src='/'
              alt=''
              width={325}
              height={244}
              />
                 
              </div>
            </div>

            <div className='w-[422px] mt-10 border-[1px] border-[#E0E0E0] h-[316px]'>
              <div className='w-[362px] mt-7 ml-5 h-[252px] '>
              <div  className='flex w-[362px] h-[126px]'>                  <Image 
                   src='/'
                   alt=''
                   width={110}
                   height={92}
                   className='ml-2 cursor-pointer'
                   />

                  <Image 
                   src='/'
                   alt='img'
                   width={110}
                   height={92}
                   className='ml-2 cursor-pointer'
                   />
                   

                   <Image 
                   src='/'
                   alt='img'
                   width={110}
                   height={92}
                   className='ml-2 cursor-pointer'
                   />
                   
                   </div>

                   

                   <div  className='flex mt-5 w-[362px] h-[126px]'> 
                   <Image 
                   src='/'
                   alt=''
                   width={110}
                   height={92}
                   className='ml-2 cursor-pointer'
                   />

                  <Image 
                   src='/'
                   alt=''
                   width={110}
                   height={92}
                   className='ml-2 cursor-pointer'
                   />
                   

                   <Image 
                   src='/'
                   alt=''
                   width={110}
                   height={92}
                   className='ml-2 cursor-pointer'
                   />
                   
                   </div>
              </div>
            </div>

            <div className='mt-10 border-[1px] border-[] w-[422px] h-[158px] items-center'>
                <div className='w-[308px] mt-[25px] ml-10 h-[94px] items-center cursor-pointer'>
                  <h1 className='text-2xl font-bold'>Follow us</h1>
                    <Image 
                    src='/'
                    alt=''
                    width={308}
                    height={46.5}
                    className='mt-5'
                    />
                </div>
            </div>
            </div>
  
            </div>
            </div> 
            </div>
         )
         }