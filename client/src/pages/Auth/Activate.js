import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import SyncLoader from "react-spinners/SyncLoader"


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
                navigate("/users/signin")
            }
        } catch (error) {
            setLoading(false)
            console.log(error);
        }
    }

    useEffect(() => {
        activateUser()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Layout>
            <div className='flex justify-center	items-center'>
                <h1 className='mt-5 text-lg'>Please Wait....</h1>
                <SyncLoader
                    loading={loading}
                    color='#3E6553'
                />
            </div>
        </Layout>
    )
}

export default Activate