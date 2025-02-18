const express = require('express');

const app = express();
const fake_db= "fake db. Just go with it"; 

app.get('/', (req,res) => {
    res.send('Welcome to a terrible Docker tutorial');
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Unfortunately listening on port http://localhost:${port}`);
});
