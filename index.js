
import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import morgan from 'morgan';

import compute from './logic.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();

app.use(express.json());
app.use(morgan('dev'));

const port = 3000;

app.post('/bfhl', (req, res) => {

    try {
        const data = req.body.data;

        console.log(data);
         
        if (!data || !Array.isArray(data)) {
            return res.status(400).json({ 
                is_success: false, 
                message: "Invalid request: 'data' key must be an array." 
        });
        }

        const processedData = compute(data);
        
        const response = {
            is_success: true,
            user_id: "john_doe_17091999",
            email: "john@xyz.com",
            roll_number: "ABCD123",
            ...processedData 
        };

        return res.status(200).json(response);

    } catch(error)
    {
        return res.status(500).json({ is_success: false, message: "Error" });
    }
})



app.listen(port, () => {
    console.log(`Server runnning on port ${port}`);
})

