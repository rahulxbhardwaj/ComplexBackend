import mongoose from 'mongoose'
import connectDB from './src/db/index.js'


connectDB();






  
// ;(async () => {
//   try{
//     const MONGODB_URI = process.env['MONGODB_URI']
//   await mongoose.connect(`MONGODB_URI/${DB_NAME}`) 
//   }catch(error){
//     console.error("Error",error);
//     throw error
//   }
// })()