const express = require('express');
const app = express();
app.use(express.json());
require("dotenv").config();

const taskRoutes = require('./src/routes/taskRoutes');

app.get('/', (req, res) => {
    res.send("Welcome to Task Manger!!")
});

app.use('/tasks', taskRoutes);

// Start the server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
