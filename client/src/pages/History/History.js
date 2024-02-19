import React, { useEffect, useState } from 'react'
import Layout from "../../components/Layout/Layout"
import datas from "./data.js"
import Item from '../../components/Items/Item'
import axios from "axios"

const History = () => {
    const [data, setData] = useState([])

    const getUserHistory = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/users/upload-history`, { withCredentials: true }
            )


            if (res?.data?.success) {
                setData(res?.data?.payload?.history)
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getUserHistory()
    }, [])

    return (
        <Layout>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='font-semibold text-2xl tracking-wide my-6'>Your History</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:w-large'>
                    {
                        data.map((val, index) => (
                            <Item
                                key={index}
                                {...val}
                            />
                        ))
                    }
                </div>
            </div>
        </Layout>
    )
}

export default History
