import React, { useState } from 'react'
import { MoreVert } from '@material-ui/icons';
import { saveAs } from "file-saver"
import axios from 'axios';
import { message } from "antd"


const VideoItem = ({ item, onFileClick }) => {
    const [showDropdown, setShowDropdown] = useState(false)

    const getOptimizeUrl = (url) => {
        const optimizedUrl = url.replace("/upload", "/upload/f_auto:video,q_auto")
        return optimizedUrl
    }

    const handleDownload = () => {
        saveAs(item.filePath, item.name)
        // message.success(`${item.name} downloaded`)
        setShowDropdown(false)
    }

    const handleFileClick = () => {
        onFileClick(item)
    }

    const handleDelete = async () => {
        const isConfirmed = window.confirm('Are you sure you want to delete this video?')
        if (isConfirmed) {
            try {
                const id = item._id
                const res = await axios.delete(`${process.env.REACT_APP_SERVER_URL}/api/v1/file/delete/videos/${id}`, { withCredentials: true })

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
            <video className='rounded-t-xl w-[350px] h-44 object-cover hover:cursor-pointer' onClick={handleFileClick}>
                <source src={getOptimizeUrl(item.filePath)} />
            </video>

            <div className='m-3'>
                <div className='flex justify-between relative'>
                    <h1 className='font-semibold tracking-wide'>{item.name}</h1>
                    <div>
                        <span className='cursor-pointer' onClick={handleDotsClick} ><MoreVert /></span>
                        {
                            showDropdown && (
                                <div className='bg-white w-28 shadow-lg absolute right-0'>
                                    <ul>
                                        <li className='p-1 text-base cursor-pointer rounded hover:bg-sgreen-50 text-center' onClick={handleDelete}>Delete</li>
                                        <li className='p-1 text-base cursor-pointer rounded hover:bg-sgreen-50 text-center' onClick={handleDownload}>Download</li>
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

export default VideoItem