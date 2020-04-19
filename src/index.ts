 import express from 'express';
 import { helloTs} from './routes'
 const app = express();

 app.get('/', helloTs)

 app.listen(3333);