import mongoose from  "mongoose";

const medical_recordSchema = new mongoose.Schema(
    {
        patientName:{
            type: String,
            required: true,
        },
        diagonis:{
            type: String,
            required: true,
        },
        doctorName:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Doctor',
            required: true,
        },
        hospitalName:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hospital',
            required: true,
        },
        prescription:{
            type: String,
            required: true,
        },
        
    }, {timestamps: true})


export const MedicalRecord = mongoose.model('MedicalRecord', medical_recordSchema);