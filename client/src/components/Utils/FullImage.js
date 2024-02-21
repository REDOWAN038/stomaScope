import React from 'react'

const FullImage = ({ image, onClose }) => {
    const handleCloseModal = () => {
        onClose()
    }
    return (
        <div className="modal" >
            <span className="close" onClick={handleCloseModal}>&times;</span>
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img className="modal-content" src={image} alt="Full Image" />
        </div>
    )
}

export default FullImage