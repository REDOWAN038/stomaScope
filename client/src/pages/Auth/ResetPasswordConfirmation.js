import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import FadeLoader from "react-spinners/FadeLoader"
import { message } from "antd"


const ResetPasswordConfirmation = () => {
    const [loading, setLoading] = useState(false)
    const { token } = useParams()
    const navigate = useNavigate()

    const resetUserPassword = async () => {
        try {
            setLoading(true)
            const res = await axios.put(`${process.env.REACT_APP_SERVER_URL}/api/v1/users/reset-password-confirmation`,
                {
                    token
                },
                {
                    withCredentials: true,
                }
            )

            if (res?.data?.success) {
                setLoading(false)
                message.success(res?.data?.message)
                navigate("/users/signin")
            }
        } catch (error) {
            setLoading(false)
            if (error?.response?.status === 401 || error?.response?.status === 404) {
                message.error(error?.response?.data?.message);
                navigate("/users/signup")
            } else {
                message.error("something went wrong....")
            }
        }
    }

    useEffect(() => {
        resetUserPassword()
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

export default ResetPasswordConfirmation