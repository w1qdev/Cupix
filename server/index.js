import express from 'express';
import cors from 'cors';


import { authEndpoints } from './api/index.js';


const app = express();

const PORT = 3001;


app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"]
}))

app.use(express.json());


app.get(`/api/${authEndpoints.REGISTRATION}`, (req, res) => {
    try {
        console.log(req?.body);

        return res.json(req?.body)
    } catch {
        console.log("something gone wrong");
        
        return res.json({
            "status": 500,
            "message": "something gone wrong"
        })
    }
})

app.listen(PORT, () => {
    console.log("Server has been started...");
})