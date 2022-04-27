require("dotenv").config();
require("./db.config").connect();
const express = require('express');
const app = express();
app.use(express.json())
const heroRouter = require("./routes/hero")
const savedPersonsRouter = require("./routes/savedPersons");

app.use("/hero", heroRouter)
app.use("/savedPersons", savedPersonsRouter)

app.get('/', (request, response) => response.send('Hello World!'))
app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}!`))