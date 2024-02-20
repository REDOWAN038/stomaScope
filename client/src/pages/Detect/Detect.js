import React, { useState } from 'react'
import Layout from "../../components/Layout/Layout"
import Form from 'react-bootstrap/Form';
import axios from "axios"
import "./detect.css"
import SyncLoader from "react-spinners/SyncLoader"
import { saveAs } from "file-saver"

const Detect = () => {
    const [file, setFile] = useState("")
    const [image, setImage] = useState("")
    const [name, setName] = useState("")
    const [count, setCount] = useState(0)
    const [loading, setLoading] = useState(false)

    const handleDownload = () => {
        saveAs(image, name)
    }

    const uploadImage = async (e) => {
        // e.preventDefault()
        try {
            setLoading(true)
            setImage("")
            setCount(0)
            const name = file.name.split(".")[0]
            const formData = new FormData()
            formData.append("name", name)
            formData.append("image", file)

            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/file/upload`,
                formData, { withCredentials: true }
            )

            if (res?.data?.success) {
                setLoading(false)
                setImage(res?.data?.payload?.file?.image)
                setCount(res?.data?.payload?.file?.count)
                setName(res?.data?.payload?.file?.name)
            }
        } catch (error) {
            setLoading(false)
            console.log(error);
        }
    }

    return (
        <Layout>
            <div className="container mt-3">
                <ul className='md:flex gap-3 hidden'>
                    <li className='w-5/6'>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Control type="file" onChange={(e) => setFile(e.target.files[0])} />
                            </Form.Group>
                        </Form>
                    </li>
                    <li><button className="bg-sgreen-100 border-2 border-sgreen-100 text-xs text-white px-3 py-1 rounded-full mt-1" onClick={() => uploadImage()}>Upload</button></li>
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
                            <img src={image} alt="" className='image' />
                            {/* <div className='flex justify-center	items-center mt-3'> */}
                            <button className="bg-sgreen-100 border-2 border-sgreen-100 text-xs text-white px-3 py-1 rounded-full mt-2" onClick={() => handleDownload()}>Download</button>
                            {/* </div> */}
                        </div>
                    )
                }

            </div>
        </Layout>
    )
}

export default Detect