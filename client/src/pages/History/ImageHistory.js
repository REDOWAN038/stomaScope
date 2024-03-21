import React, { useEffect, useState } from 'react'
import Layout from "../../components/Layout/Layout"
import axios from "axios"
import InfiniteScroll from "react-infinite-scroll-component"
import { message } from "antd"
import FullImage from '../../components/Utils/FullImage'
import ImageItem from '../../components/Utils/ImageItem'


const ImageHistory = () => {
    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [total, setTotal] = useState(0)
    const [fullImage, setFullImage] = useState("")

    const getUserHistory = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/v1/users/history/images`, {
                params: {
                    page: currentPage,
                },
                withCredentials: true
            })


            if (res?.data?.success) {
                setCurrentPage(currentPage + 1)
                setData([...data, ...res?.data?.payload?.history])
                setTotal(res?.data?.payload?.total)
            }
        } catch (error) {
            message.error("check your internet connection.")
        }
    }

    // const getOptimizeUrl = (url) => {
    //     const optimizedUrl = url.replace("/upload", "/upload/f_auto:video,q_auto")
    //     return optimizedUrl
    // }

    const showFullImage = (item) => {
        setFullImage(item.filePath)
    }

    const handleCloseModal = () => {
        setFullImage("");
    };

    useEffect(() => {
        getUserHistory()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Layout>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='font-semibold text-2xl tracking-wide my-6 mb-16'>Your Upload History</h1>
                <InfiniteScroll
                    dataLength={data.length}
                    next={getUserHistory}
                    hasMore={data.length < total}
                    loader={<h4 style={{ textAlign: 'center', marginTop: '10px' }}>Loading...</h4>}
                >
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:w-large'>
                        {
                            data.map((item, index) => (
                                <ImageItem
                                    key={index}
                                    item={item}
                                    onFileClick={showFullImage}
                                />
                            ))
                        }
                    </div>
                </InfiniteScroll>
            </div>

            {
                fullImage && <FullImage image={fullImage} onClose={handleCloseModal} />
            }
        </Layout>
    )
}

export default ImageHistory
