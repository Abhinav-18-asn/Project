import mongoose from 'mongoose'

export const connectDB = async()=>{
    await mongoose.connect(
      "mongodb+srv://abhinavsinghnegi56:sJrC4ejgPwIvRQ4Y@cluster0.yu9nnqm.mongodb.net/food-del"
    ).then(()=>{
        console.log("DB connected")
    })
}