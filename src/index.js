const express = require("express");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
const routes = require("./routes");
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
const password = process.env.MONGO_DB;
console.log(password);
const url = `mongodb+srv://root:${password}@cluster0.3y7juta.mongodb.net/?retryWrites=true&w=majority`

app.get('/', (req, res) => {
    return res.send('Hello world');
})

routes(app)

mongoose.connect(url)
    .then(() => {
        console.log('Connect Db success');
    })
    .catch(() => {
        console.log('Connect Db failed');
    })

app.listen(port, () => {
    console.log('Server is running on port:  ', + port);
});