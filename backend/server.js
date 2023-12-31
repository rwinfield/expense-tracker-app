const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');//connects to mongodb database

const dotenv = require('dotenv').config({ path: './.env' });

const app = express();
const port = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const expensesRouter = require('./routes/expenses');
const usersRouter = require('./routes/users');

app.use('/expenses', expensesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});