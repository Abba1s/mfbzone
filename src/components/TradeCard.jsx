import React from 'react'

const TradeCard = ({title, pic}) => {
  return (
    <>


    <div className="card w-[280px] h-[342px] bg-primaryColor rounded-[16px] flex flex-col">
        <img src={pic} alt="pic" />
        <h3 className='text-center text-white mt-10 text-[18px] md:text-[20px] font-[600]'>{title}</h3>
    </div>
    
    
    
    
    </>
  )
}

export default TradeCard