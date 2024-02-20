import React, { useState } from 'react'
import { MoreVert } from '@material-ui/icons';
import "./item.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Item = ({ item, onImageClick, onDelete }) => {
    const [showDropdown, setShowDropdown] = useState(false)

    const handleImageClick = () => {
        onImageClick(item)
    }

    const handleDelete = async () => {
        setShowDropdown(false)
        onDelete(item)
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
                    <div>
                        <span className='cursor-pointer' onClick={handleDotsClick} ><MoreVert /></span>
                        {
                            showDropdown && (
                                <div className='bg-white w-28 shadow-lg absolute right-0'>
                                    <ul>
                                        <li className='p-1 text-sm cursor-pointer rounded hover:bg-blue-100' onClick={handleDelete}>Delete</li>
                                        <li className='p-1 text-sm cursor-pointer rounded hover:bg-blue-100'>Download</li>
                                    </ul>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item