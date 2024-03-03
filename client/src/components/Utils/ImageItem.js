import React, { useState } from 'react'
import { MoreVert } from '@material-ui/icons';
import { saveAs } from "file-saver"
import axios from 'axios';
import { message } from "antd"


const ImageItem = ({ item, onFileClick }) => {
    const [showDropdown, setShowDropdown] = useState(false)

    const handleDownload = () => {
        saveAs(item.filePath, item.name)
        setShowDropdown(false)
    }

    const handleFileClick = () => {
        onFileClick(item)
    }

    const handleDelete = async () => {
        const isConfirmed = window.confirm('Are you sure you want to delete this image?')
        if (isConfirmed) {
            try {
                const id = item._id
                const res = await axios.delete(`${process.env.REACT_APP_SERVER_URL}/api/v1/file/delete/images/${id}`, { withCredentials: true })

                if (res?.data?.success) {
                    message.success(`${item.name} deleted`)
                    window.location.reload()
                }
            } catch (error) {
                message.error("something went wrong. try again...")
            }
        }
    }

    const handleDotsClick = () => {
        setShowDropdown(!showDropdown)
    }

    return (
        <div className='max-w-96 shadow-md rounded-xl'>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <img
                src={item.filePath} className='rounded-t-xl w-[350px] h-44 object-cover hover:cursor-pointer'
                onClick={handleFileClick}
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
                                        <li className='p-1 text-sm cursor-pointer rounded hover:bg-sgreen-50' onClick={handleDelete}>Delete</li>
                                        <li className='p-1 text-sm cursor-pointer rounded hover:bg-sgreen-50' onClick={handleDownload}>Download</li>
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

export default ImageItem