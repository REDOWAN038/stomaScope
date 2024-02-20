import React, { useState } from 'react'
import { MoreVert } from '@material-ui/icons';
import "./item.css"

const Item = ({ item, onImageClick, onDotsClick }) => {
    const [showDropdown, setShowDropdown] = useState(false)

    const handleImageClick = () => {
        onImageClick(item)
    }

    const handleOptionClick = (option) => {
        alert(`${option} selected`);
        setShowDropdown(false);
    }

    const handleDotsClick = () => {
        setShowDropdown(!showDropdown)
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
                <div className='flex justify-between relative'>
                    <p className='text-sm font-light text-gray-800 my-2'>Count: {item.count}</p>
                    <span className='cursor-pointer' onClick={handleDotsClick}><MoreVert /></span>
                    {showDropdown && (
                        <div className="dropdown">
                            <div onClick={() => handleOptionClick('delete')}>Delete</div>
                            <div onClick={() => handleOptionClick('download')}>Download</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Item