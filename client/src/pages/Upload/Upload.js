import React, { useEffect, useState } from 'react'
import Layout from "../../components/Layout/Layout"
import Form from 'react-bootstrap/Form';
import axios from "axios"
import "./upload.css"
import SyncLoader from "react-spinners/SyncLoader"
import { saveAs } from "file-saver"
import { message } from "antd"
import FullImage from '../../components/Utils/FullImage';


const Upload = () => {
    const [file, setFile] = useState("")
    const [image, setImage] = useState("")
    const [video, setVideo] = useState("")
    const [name, setName] = useState("")
    const [count, setCount] = useState(0)
    const [loading, setLoading] = useState(false)
    const [fullImage, setFullImage] = useState("")
    const [type, setType] = useState("")

    const handleDownload = () => {
        saveAs(video, name)
        // message.success(`${name} downloaded`)
    }

    const showFullImage = () => {
        setFullImage(image)
    }

    const handleCloseModal = () => {
        setFullImage("");
    };

    const handleOptimizeVideo = (url) => {
        const optimizedUrl = url.replace("/upload", "/upload/f_auto:video,q_auto")
        setVideo(optimizedUrl)
        console.log(optimizedUrl);
    }


    const uploadFile = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            setImage("")
            setVideo("")
            setCount(0)

            const name = file.name.split(".")[0]
            const formData = new FormData()
            formData.append("name", name)
            formData.append("type", type)
            formData.append("filePath", file)

            const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/v1/file/upload`,
                formData, { withCredentials: true }
            )

            if (res?.data?.success) {
                setLoading(false)
                message.success("stomata detection completed")
                setName(res?.data?.payload?.file?.name)
                if (type === "0") {
                    setImage(res?.data?.payload?.file?.filePath)
                    setCount(res?.data?.payload?.file?.count)
                } else if (type === "1") {
                    console.log(res?.data?.payload?.file?.filePath);
                    handleOptimizeVideo(res?.data?.payload?.file?.filePath)
                }
            }
        } catch (error) {
            setLoading(false)
            message.error("something went wrong...")
        }
    }

    useEffect(() => {
        if (file) {
            file.type.split("/")[0] === "image" ? setType("0") : setType("1")
        }
    }, [file])

    return (
        <Layout>
            <div className="container mt-3">
                <ul className='flex gap-3'>
                    <li className='w-5/6'>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Control type="file" onChange={(e) => setFile(e.target.files[0])}
                                />
                            </Form.Group>
                        </Form>
                    </li>
                    <li><button className="bg-sgreen-100 border-2 border-sgreen-100 text-sm text-white px-3 py-1 rounded-full mt-1" onClick={(e) => uploadFile(e)}>Upload</button></li>
                </ul>
                <div className='flex justify-center	items-center'>
                    <SyncLoader
                        loading={loading}
                        color='#3E6553'
                    />
                </div>
                {
                    image && (
                        <div className='preview'>
                            <h1 className='height'>Stomata Count : {count}</h1>
                            <img src={image} alt="" className='file' onClick={() => showFullImage()} />
                            <button className="bg-sgreen-100 border-2 border-sgreen-100 text-sm text-white px-3 py-1 rounded-full mt-4" onClick={() => handleDownload()}>Download</button>
                        </div>
                    )
                }

                {
                    video && (
                        <div className="preview">
                            <video className='file' controls>
                                <source src={video} />
                            </video>
                            <button className="bg-sgreen-100 border-2 border-sgreen-100 text-sm text-white px-3 py-1 rounded-full mt-4" onClick={() => handleDownload()}>Download</button>
                        </div>
                    )
                }
            </div>

            {
                fullImage && <FullImage image={fullImage} onClose={handleCloseModal} />
            }
        </Layout>
    )
}

export default Upload