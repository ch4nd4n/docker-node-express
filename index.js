const express = require('express');

const PORT = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) => {
    console.log(req.ip);
    res.send('Hello World from express!')
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
