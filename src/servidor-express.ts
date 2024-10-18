import express, { Request, Response } from "express"

const app = express()

const controlador  = (req: Request, res: Response) => {
    res.send(`esse é o meu primeiro servidor Node.js com Express`)
}

app.get('/', controlador);
app.listen(3000)