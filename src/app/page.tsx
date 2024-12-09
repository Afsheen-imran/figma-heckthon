import React from 'react'
import Hero from './components/Hero'
import Hero1 from './components/Hero1'
import Hero2 from './components/Hero2'
import FromMenu from './components/FromMenu'
import Chef from './components/Chef'
import Testimonials from './components/testimonials'
import Hero5 from './components/Hero5'
import Hero6 from './components/Hero6'



const page = () => {
  return (
    <div>
      <Hero/>
      <Hero1/>
      <Hero2/>
          
    <FromMenu/>
    <Chef/>
   <Testimonials/>
   <Hero5/>
   <Hero6/>
   
    </div>
  )
}

export default page