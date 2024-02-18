import React from 'react'
import Layout from "../../components/Layout/Layout"
import datas from "./data.js"
import Item from '../../components/Items/Item'

const History = () => {
    return (
        <Layout>
            <div className='flex flex-col justify-center items-center mt-20'>
                <h1 className='font-semibold text-2xl tracking-wide my-6'>Your History</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:w-large'>
                    {
                        datas.map((val, index) => (
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
