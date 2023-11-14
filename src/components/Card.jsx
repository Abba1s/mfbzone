import React from 'react'

const Card = ({title, pic}) => {
  return (
    <>


    <div className="card w-[280px] h-[342px] bg-primaryColor rounded-[16px] flex justify-between flex-col">
        <h3 className='text-center text-white mt-10 text-[18px] md:text-[20px] font-[600]'>{title}</h3>
        <img src={pic} alt="pic" />
    </div>
    
    
    
    
    </>
  )
}

export default Card