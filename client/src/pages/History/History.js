import React from 'react'
import Layout from "../../components/Layout/Layout"
import "./history.css"
import datas from "./data.js"
import Item from '../../components/Items/Item'

const History = () => {
    return (
        <Layout>
            <div className='history'>
                <h1>Your History</h1>
                <div className="history-items">
                    {
                        datas.map((data, idx) => {
                            return <Item key={idx} id={data.id} image={data.image} title={data.title} count={data.count} />
                        })
                    }
                </div>
            </div>
        </Layout>
    )
}

export default History