const express = require('express');
require('./config/mongoose');
const User = require('./models/user');

const PORT = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) => {
    console.log(req.ip);
    res.send('Hello World from express!')
});

app.get('/api/users', async (req, res) => {
    const users = await User.find({}).limit(10).exec();
    res.json({ users });
});
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
