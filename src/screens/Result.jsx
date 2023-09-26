import React from 'react'
import Card from '../components/Card'



// circle component

function Circle(props) {
    return (
        <div className={`circle ${props.size} ${props.position}`}  ></div>
    )
}



export const Result = () => {
  return (
    <div className='bg-white'>
        {/* header with back and profile icon */}
        <div className="header">
            
            {/* style elemets */}
            < Circle size="big" position="top-left" />
            < Circle size="medium" position="top-right" />
            < Circle size="small" position="bottom-left" />
            < Circle size="medium" position="bottom-right" />
            

        </div>

       
    </div>
  )
}








