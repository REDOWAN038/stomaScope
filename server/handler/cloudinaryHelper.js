const getPublicId = async (fileUrl) => {
    const segments = fileUrl.split("/")
    const lastSegment = segments.slice(-1)[0]
    const publicId = lastSegment.split(".")[0]
    return publicId
}

module.exports = {
    getPublicId
}