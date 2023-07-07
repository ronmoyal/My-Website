import express from 'express';
import cors from 'cors';
import sendEmail from './ContactMe.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.options('/contact', cors()); // Handle OPTIONS request

app.post('/contact', sendEmail);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
