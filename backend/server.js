const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors()); // Enable CORS for all routes
app.listen(2030,()=>{
    console.log("Server listening on port 2030")
})