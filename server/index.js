import express from 'express';
import cors from 'cors';
import { authEndpoints } from './api/index.js';
import mongoose from 'mongoose';
import User from './models/user.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';


const app = express();

const PORT = 3001;
const bcryptSalt = 8
const DB_URI = "mongodb://127.0.0.1/Cupix"


app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"]
}))

app.use(express.json());


app.post(`/api/${authEndpoints.REGISTRATION}`, async (req, res) => {
    try {
        const { nickname, password, avatar, link, personal_info } = req.body

        const hashedPassword = await bcrypt.hash(password, bcryptSalt)
        const isUserExists = await User.findOne({link})

        if (isUserExists) {
            // user with this nickname already created
            return res.status(200).json({
                message: "something gone wrong, try later"
            })
        }

        const user = User({ ...req.body, password: hashedPassword })

        user.save()
        .then(result => {
            console.log("new user has been created")
            res.status(200).json({
                message: "new user has been created successfully",
                body: result
            })
        })
        .catch(error => {
            console.error(`new user hasn't been created, some error: \n${error.message}`)
            res.status(400).json({
                message: "new user hasn't been created successfully",
                body: error
            })
        })
        
    } catch {
        console.log("something gone wrong");
        
        res.json({
            "status": 500,
            "message": "something gone wrong"
        })
    }
})


const startApp = async () => {
    try {
        await mongoose.connect(DB_URI)
        .then(result => console.log("Database has been successfully connected..."))
        .catch(error => console.error(error));

        app.listen(PORT, () => {
            console.log("Server has been successfully started...");
        })
    } catch (e) {
        new Error(`Server has been closed! Some error... \n${e.message}`)
    }
}

startApp()