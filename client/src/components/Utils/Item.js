import React, { useState } from 'react'
import { MoreVert } from '@material-ui/icons';
import { saveAs } from "file-saver"
import { message } from "antd"


const Item = ({ item, onFileClick, onDelete, type }) => {
    const [showDropdown, setShowDropdown] = useState(false)

    const handleDownload = () => {
        saveAs(item.filePath, item.name)
        // message.success(`${item.name} downloaded`)
        setShowDropdown(false)
    }

    const handleFileClick = () => {
        onFileClick(item)
    }

    const handleDelete = async () => {
        setShowDropdown(false)
        onDelete(item)
    }

    const handleDotsClick = () => {
        setShowDropdown(!showDropdown)
    }

    const getOptimizeUrl = (url) => {
        const optimizedUrl = url.replace("/upload", "/upload/f_auto:video,q_auto")
        return optimizedUrl
    }

    return (
        <div className='max-w-96 shadow-md rounded-xl'>
            {
                type === "images" && (
                    // eslint-disable-next-line jsx-a11y/alt-text
                    <img
                        src={item.filePath} className='rounded-t-xl w-[350px] h-44 object-cover hover:cursor-pointer'
                        onClick={handleFileClick}
                    />
                )
            }

            {
                type === "videos" && (
                    // eslint-disable-next-line jsx-a11y/alt-text
                    <video className='rounded-t-xl w-[350px] h-44 object-cover hover:cursor-pointer' onClick={handleFileClick}>
                        <source src={getOptimizeUrl(item.filePath)} />
                    </video>
                )
            }
            <div className='m-3'>
                {
                    type === "images" && (
                        <>
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
                        </>
                    )
                }

                {
                    type === "videos" && (
                        <>
                            <div className='flex justify-between relative'>
                                <h1 className='font-semibold tracking-wide'>{item.name}</h1>
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
                        </>
                    )
                }

            </div>
        </div>
    )
}

export default Item