import React, { useEffect } from 'react'
import Layout from '../../components/Layout/Layout'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const Activate = () => {
    const { token } = useParams()
    const navigate = useNavigate()

    const activateUser = async () => {
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/users/activate`,
                {
                    token
                },
                {
                    withCredentials: true,
                }
            )

            if (res?.data?.success) {
                navigate("/api/v1/users/signin")
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        activateUser()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Layout>
            <h1 className='text-center mt-5'>Activation is in process....</h1>
        </Layout>
    )
}

export default Activate