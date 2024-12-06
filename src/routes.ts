// # 2 Chaining Request Methods

import express, {Request, Response} from "express";

// Create an express application
const app = express();

// Middleware
app.use(express.json());

// Index Route
app.route('/')
    .get((req: Request, res: Response) => {
        const message = "GET Request\n";
        console.log(message);
        res.status(200).send(message);
    })
    .post((req: Request, res: Response) => {
        const message = "POST Request\n";
        console.log(message);
        res.status(200).send(message);
    })
    .put((req: Request, res: Response) => {
        const message = "PUT Request\n";
        console.log(message);
        res.status(200).send(message);
    })
    .delete((req: Request, res: Response) => {
        const message = "DELETE Request\n";
        console.log(message);
        res.status(200).send(message);
    })
    .all((req: Request, res: Response) => {
        const message = "ALL Request\n";
        console.log(message);
        res.status(200).send(message);
    });

// Express Router _______________________________________________________________________________________
app.listen(3000, () => {
    console.log('Server is running on port http://localhost:3000');
});
