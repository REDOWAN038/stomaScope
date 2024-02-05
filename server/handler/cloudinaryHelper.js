const getPublicId = async(imageUrl)=>{
    const segments = imageUrl.split("/")
    const lastSegment = segments.slice(-1)[0]
    const publicId = lastSegment.split(".")[0]
    return publicId
}

module.exports = {
    getPublicId
}