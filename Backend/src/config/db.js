import mongoose from 'mongoose';
const connectDB = async () => {
  const uri = process.env.MONGO_URI || process.env.MONGODB_URI;
  if (!uri) {
    console.error('MongoDB connection string is missing. Set MONGO_URI or MONGODB_URI in your .env');
    // Don't exit here so the server can start for non-DB workflows, but warn loudly
    return;
  }

  try {
    // Mongoose v6+ ignores useNewUrlParser/useUnifiedTopology options, but keeping for backward compatibility
    await mongoose.connect(uri, {
      // options kept intentionally minimal
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message || error);
    // exit because DB is likely required for the app
    process.exit(1);
  }
};

export default connectDB;

// import mongosee from 'mongoose';
// const connectDB = asyuc () => {
//     try {
//         await mongoose.connect(process.env.MONGODB_URL, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//     } catch (error) {
//         console.error('Error connecting to MongoDB:', error);
//         process.exit(1);
//     }
// };

// export default connectDB;   
