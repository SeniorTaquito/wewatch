import express, { Request, Response, NextFunction } from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import routes from './routes';
import { port } from './config/config';
// import log from './utils/logger';


const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.use('/', routes);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(404).send(`${req.path} does not exist`);
})

app.listen(port, async () => {
    console.log(`listening on port ${port}`);
})
