import mongoose from  "mongoose";

const doctorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        salaray: {
            type: String,
            required: true,
        },
        qualifications:{
            type: String,
            required: true,
        },
        experienceInYear:{
            type: Number,
            default: 0,
        },
        worksIn: [
            {
                type:mongoose.Schema.Types.ObjectId,
                ref: 'Hospital', 
            }
        ]
    }, {timestamps: true})


export const Doctor = mongoose.model('Doctor', doctorSchema);