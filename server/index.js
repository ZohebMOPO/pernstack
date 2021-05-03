import cors from './middleware';


const express = require('express');
const app = express();

app.use(cors());


app.listen(3001, () => {
    console.log("Started")
})