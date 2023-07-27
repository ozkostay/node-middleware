const express = require("express");
const { v4: uuid } = require("uuid");
const indexRouter = require('./routers/index');
const demoRouter = require('./routers/demo');

const app = express();
app.use(express.json());
app.use('/', indexRouter);
app.use('/file', demoRouter)

const serverPort = process.env.PORT || 3000;
const PORT = serverPort;
app.listen(PORT);
console.log(`=== Express запущен на ${serverPort} порту ===`);
