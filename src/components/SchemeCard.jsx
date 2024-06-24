import React from 'react'
import bag from "../assets/bag.png"
import wheel from "../assets/wheel.png"
import cup from "../assets/cup.png"


const Schemes=[{
    id:1,
    img:bag,
    text:"Buy any product from this scheme"
},{
    id:2,
    img:wheel,
    text:"Spin the wheel and get a lucky number"
},{
    id:3,
    img:cup,
    text:"If your number is chosen the prize is all yours"
}]

const SchemeCard = () => {
  return (
    <>
    <div>
        <div>
            <p className='text-[#374557] font-semibold ml-20 pt-4' >How Do Schemes Work</p>
        </div>
    <div className='bg-[#DEDFF3] w-full h-32 flex justify-center mt-8'>
      {
        Schemes.map((scheme)=>{
            return(
                <div key={scheme.id} className='max-w-xs rounded overflow-hidden   '>
  <div className='w-12 h-12 mx-auto mt-4 rounded-full overflow-hidden'>
    <img src={scheme.img} alt='bag' className='w-full h-full object-cover bg-white p-2'/>
  </div>
  <div className='text-center px-6 py-2'> {/* Reduced py-4 to py-2 */}
    <p className='text-[#374557] font-semibold text-lg mb-1'>{scheme.text}</p> {/* Reduced text-xl to text-lg and mb-2 to mb-1 */}
  </div>
</div>
            )
        })
      }

        </div>
    </div>
    </>
  )
}

export default SchemeCard