import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const APP_NAME = process.env.APP_NAME || 'Express Server';

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ welcome: APP_NAME });
});

app.listen(PORT, () => {
    console.log(`${APP_NAME} is running on port ${PORT}`);
});