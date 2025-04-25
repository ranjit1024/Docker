import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://mongoNetwork1:27017/user', {
    
    } as mongoose.ConnectOptions);
    console.log('MongoDB connected!');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

export default connectDB;