import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongodb/connect.js';
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));


app.get('/', async (req, res) => {
  res.status(200).json({
    message: 'Hello from Croppe',
  });
});


// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);





const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () => console.log('Server started on port 8080'));
  } catch (error) {
    console.log(error);
  }
};

startServer();