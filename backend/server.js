const express = require('express');
const cors = require("cors");
const app = express()
const port = 3000

app.use(cors());
app.use(express.json());
const users = [];
app.post('/',(req, res)=>{
   const userData = req.body;
   users.push(userData);
   res.json({
    message:"user logged in successfully",
    data:userData
   })
})

app.get('/', (req, res) => {
    res.json(users)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})