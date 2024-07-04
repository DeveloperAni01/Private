import mongoose from  "mongoose";

const medical_recordSchema = new mongoose.Schema(
    {
        name: {
            type:String,
            required: true,
        },
        address:{
            type:String,
            required: true,
        },
        

    }, {timestamps: true})


export const Hospital = mongoose.model('Hospital', medical_recordSchema);