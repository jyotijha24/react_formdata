import React from 'react'

function Card({img,name,email}) {
  return (
    <>
      <div className='w-[200px] border p-2 bg-neutral-300  text-center  '>
        <img  className='w-10 h-10 rounded-full inline ' src={img}></img>
       <div className='text-sm '>
         <p className='font-bold mt-1'>{name}</p>
        <p>{email}</p>
        <p className='mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
       </div>
      </div>
    </>
  )
}

export default Card
