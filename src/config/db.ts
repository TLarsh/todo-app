import mongoose from 'mongoose';


const connectDB = async () => {
    try {
        // console.log('MONGO_URI:', process.env.MONGO_URI); // Debugging line
        await mongoose.connect(process.env.MONGO_URI as string);
        console.log('MongoDB Connected');
    } catch (error) {
        console.error('DB Connection Error', error);
        process.exit(1);
    }
};

export default connectDB;