const express = require('express');

const tasksRouter = require('./routes/tasks');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', tasksRouter);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);    
});
module.exports = app;
