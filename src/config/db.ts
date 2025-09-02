import mongoose from 'mongoose';
import process = require('process');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI as string);
        console.log('MongoDB Connected');
    } catch (error) {
        console.error('DB Connection Error', error)
    }
};

export default connectDB;