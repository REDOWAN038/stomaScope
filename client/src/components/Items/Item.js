import React from 'react'
// import "./item.css"

const Item = ({ item, onImageClick }) => {
    const handleImageClick = () => {
        onImageClick(item)
    }

    return (
        <div className='max-w-96 shadow-md rounded-xl'>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <img
                src={item.image} className='rounded-t-xl w-[350px] h-44 object-cover'
                onClick={handleImageClick}
            />
            <div className='m-3'>
                <div><h1 className='font-semibold tracking-wide'>{item.name}</h1></div>
                <div><p className='text-sm font-light text-gray-800 my-2'>Count: {item.count}</p> </div>
            </div>
        </div>
    )
}

export default Item