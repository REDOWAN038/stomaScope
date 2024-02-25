import React from 'react'
import "./fullFile.css"

const FullVideo = ({ video, onClose }) => {
    const handleCloseModal = () => {
        onClose()
    }
    return (
        <div className="modal" >
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <video className="modal-content" controls>
                <source src={video} />
            </video>
        </div>
    )
}

export default FullVideo