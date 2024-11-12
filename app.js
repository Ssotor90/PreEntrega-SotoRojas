import express from 'express';
import { connectDB } from './config.js';
import mocksRouter from './src/routes/mocks.router.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json());
app.use('/api/mocks', mocksRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
