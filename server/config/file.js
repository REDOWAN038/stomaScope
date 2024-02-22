const uploadFilePath = "public/images"
const uploadFileMaxSize = 20 * 1024 * 1024
const allowedFileTypes = ['image/jpg', 'image/jpeg', 'image/png', 'video/mp4', 'video/mov']

module.exports = {
    uploadFilePath,
    uploadFileMaxSize,
    allowedFileTypes
}
