import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';

const app = express();

dotenv.config();

app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use(cors());


app.use('/posts', postRoutes);

app.get('/', ( req, res) => {
    res.send("Hello to memp.me");
});

const CONNECTION_URL = 'mongodb://amitpandit:Apple321@cluster0-shard-00-00.e0aut.mongodb.net:27017,cluster0-shard-00-01.e0aut.mongodb.net:27017,cluster0-shard-00-02.e0aut.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-von5gz-shard-0&authSource=admin&retryWrites=true&w=majority';
const PORT= process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server Running on port :${PORT}`)))
    .catch((error) => console.log(error.message) );

// mongoose.set('useFindAndModify', false);

