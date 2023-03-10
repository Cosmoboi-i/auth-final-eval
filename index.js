const express = require('express');
const { errorHandler } = require('./src/middlewares/errorHandler');
// const appRouter = require('./src/routes/app.routes');
const authRouter = require('./src/routes/auth.routes');
const PORT = process.env.PORT || 8888;
const cors = require('cors')

const app = express();
app.use(express.json());

// app.use('/', appRouter);
app.use(cors('*'))
app.use('/', authRouter);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`---Auth--- server is running on PORT: ${PORT}`);
});
