import React from 'react'

const FullImage = ({ file, onClose, type }) => {
    const handleCloseModal = () => {
        onClose()
    }
    return (
        <div className="modal" >
            <span className="close" onClick={handleCloseModal}>&times;</span>
            {
                type === "images" && (
                    // eslint-disable-next-line jsx-a11y/img-redundant-alt
                    <img className="modal-content" src={file} alt="Full Image" />
                )
            }
            {
                type === "videos" && (
                    <video className="modal-content" controls>
                        <source src={file} />
                    </video>
                )
            }
        </div>
    )
}

export default FullImage