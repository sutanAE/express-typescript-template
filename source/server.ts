import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { router } from './router/router';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;


app.use(express.json())

app.use("/api", router)

app.get('/', (req: Request, res: Response) => {
  res.send(
    {message: 'hello world!'}
  );
});







app.get('*', function(req, res){
  res.status(404).send({status: 404, message: "not found"});
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});