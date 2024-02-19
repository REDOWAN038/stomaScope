import React, { useState } from 'react'
import Layout from "../../components/Layout/Layout"
import Form from 'react-bootstrap/Form';
import axios from "axios"
import "./detect.css"

const Detect = () => {
    const [file, setFile] = useState("")
    const [image, setImage] = useState("")
    const [count, setCount] = useState(0)

    const uploadImage = async (e) => {
        // e.preventDefault()
        try {
            const name = file.name.split(".")[0]
            const formData = new FormData()
            formData.append("name", name)
            formData.append("image", file)

            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/file/upload`,
                formData, { withCredentials: true }
            )

            if (res?.data?.success) {
                setImage(res?.data?.payload?.file?.image)
                setCount(res?.data?.payload?.file?.count)
                // navigate("/history")
            }
        } catch (error) {

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
                    <li><button className="bg-sgreen-100 border-2 border-sgreen-100 text-xs text-white px-3 py-1 rounded-full mt-1" onClick={() => uploadImage()}>Submit</button></li>
                </ul>
                {
                    image && (
                        <div className='preview'>
                            <h1 className='height'>Stomata Count : {count}</h1>
                            <img src={image} alt="" className='image' />
                        </div>
                    )
                }

            </div>
        </Layout>
    )
}

export default Detect