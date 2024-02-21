import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import FadeLoader from "react-spinners/FadeLoader"


const Activate = () => {
    const [loading, setLoading] = useState(false)
    const { token } = useParams()
    const navigate = useNavigate()

    const activateUser = async () => {
        try {
            setLoading(true)
            const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/v1/users/activate`,
                {
                    token
                },
                {
                    withCredentials: true,
                }
            )

            if (res?.data?.success) {
                setLoading(false)
                alert(res?.data?.message)
                navigate("/users/signin")
            }
        } catch (error) {
            setLoading(false)
            if (error?.response?.status === 401) {
                alert(error?.response?.data?.message);
                navigate("/users/signup")
            } else {
                alert("something went wrong....")
            }
        }
    }

    useEffect(() => {
        activateUser()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Layout>
            <div className='flex justify-center	items-center'>
                <FadeLoader
                    loading={loading}
                    color='#3E6553'
                />
            </div>
        </Layout>
    )
}

export default Activate