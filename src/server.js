import express from 'express';
import morgan from 'morgan';
import AuthRouter from './routes/AuthRouter';
import RegRouter from './routes/RegRouter';
// import apiRouter from './routes/apiRouter';

const PORT = 3000;
const app = express();

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', AuthRouter);
app.use('/registration', RegRouter);

// app.use('/api/v1', apiRouter);

app.listen(PORT, () => {
  console.log('server start on port ', PORT);
});
