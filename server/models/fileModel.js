const mongoose = require("mongoose")
const fileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true
    },
    filePath: {
        type: String,
        required: [true, "Image or Video is required"]
    },
    type: {
        type: Number,
        enum: [0, 1]  // 0->image, 1->video
    },
    count: {
        type: Number,
        default: 0
    },
    uploader: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true })

module.exports = mongoose.model("File", fileSchema)