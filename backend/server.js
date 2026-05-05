import express from 'express'
import dotenv from 'dotenv'
import router from './routes.js'
import cors from 'cors';
import { connectDB } from './db.js';

dotenv.config()

const app = express()
app.use(cors());
app.use(express.json());

app.use('/api', router)

const PORT = process.env.PORT || 3000


connectDB().then(() => {
  app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  });
});
