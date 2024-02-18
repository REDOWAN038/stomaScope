import React from 'react'
// import "./item.css"

const Item = ({image, title, count}) => {
    return (
        <div className='max-w-96 shadow-md rounded-xl'>
            <img src={image} className='rounded-t-xl w-[350px] h-44 object-cover'/>
            <div className='m-3'>
                <div><h1 className='font-semibold tracking-wide'>{title}</h1></div>
                <div><p className='text-sm font-light text-gray-800 my-2'>Count: {count}</p> </div>
            </div>
        </div>
    )
}

export default Item