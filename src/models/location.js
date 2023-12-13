import mongoose from "mongoose";

const locationSchema = mongoose.Schema({
    latitude: { type: Number,required: true },
    longitude: { type: Number, required: true },
    location_photo_url: {type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true}
})

export default mongoose.model("Loacation",locationSchema )