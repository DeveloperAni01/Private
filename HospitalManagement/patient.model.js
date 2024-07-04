import mongoose from  "mongoose";

const medical_recordSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
        },
        diagonesWith: {
            type: String,
            required: true,
        },
        addrress: {
            type: String,
            required: true,
        },
        age:{
            type: Number,
            required: true,
        },
        bloodGroup: {
            type: String,
            required: true,
        },
        gender:{
            type: String,
            required: true,
            enum: ["MALE", "FEMALE", "OTHER"],
            
        },
        admittedIn: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hospital',
            required: true,
        }
    }, {timestamps: true})


export const MedicalRecord = mongoose.model('MedicalRecord', medical_recordSchema);