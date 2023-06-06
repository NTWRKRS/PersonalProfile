require('dotenv').config();

const express = require('express');

const mongoose = require('mongoose');

const cors = require('cors');

const app = express();

const homeRoute = require('./routes/home');

app.use(cors());

app.get("/",homeRoute);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});