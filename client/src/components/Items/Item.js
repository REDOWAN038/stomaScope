import React from 'react'
import "./item.css"

const Item = (props) => {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow h-[300px]">
            <img className="rounded-t-lg" src={props.image} alt="" />
            <div className="pt-[20px] pb-[28px] px-[30px]">
                <h3 className="font-poppins text-black mb-[14px]">{props.title}</h3>
                <h3 className="font-poppins text-black mb-[14px]">Count : {props.count}</h3>
            </div>
        </div>
    )
}

export default Item