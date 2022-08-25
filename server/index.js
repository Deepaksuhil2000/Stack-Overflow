import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors' 
import dotenv from 'dotenv';// if two server talking to each other they will through some error
                     // this error is cors

import userRoutes from './routes/users.js'
import questionRoutes from './routes/Questions.js'
import answerRoutes from './routes/Answers.js'

const app = express();
dotenv.config();
app.use(express.json({limit: "30mb", extended: true}))
app.use(express.urlencoded({limit: "30mb", extended: true}))
app.use(cors());

app.get('/',(req, res) => {
    res.send("This is a StackOverflow Clone API")
});

app.use('/user', userRoutes )             // it's url be like localhost:3000/users/
app.use('/questions', questionRoutes)    // it's url be like localhost:3000/questions/get
app.use('/answer', answerRoutes)

const PORT = process.env.PORT || 5000  
// if there is available port then use it or use 5000 port
// we use atlas as a database from mongodb for save our data on mongodb cloud storage itself and we can access our data fromt there

//to access the database and to modify the content we use mongoose

// const CONNECTION_URL = "mongodb+srv://admin:admin@stack-overflow-clone.bleab.mongodb.net/?retryWrites=true&w=majority"

const DATABASE_URL = process.env.CONNECTION_URL

mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => app.listen(PORT, () => {console.log(`Server running on port ${PORT}`)}))
        .catch((err) => console.log(err.message))

        