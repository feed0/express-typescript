// # 1 HTTP Request Methods (GET, POST, ALL)

import express, {Request, Response} from "express";

// Create an express application
const app = express();

// Middleware
app.use(express.json());

// 1. GET
// Return a text response to the client
app.get('/', (req: Request, res: Response) => {
    res.send("Hello World!\n");
});

// Return a JSON response to the
app.get('/', (req: Request, res: Response) => {
    res.json({
        success: true,
        name: "Felipe O.",
        message: "Hello World!"
    });
});

// Redirect to another URL
app.get('/', (req: Request, res: Response) => {
    res.redirect('https://www.openai.com');
});

// 2. POST
// Returns the body of the actual request
app.post('/api/data', (req: Request, res: Response) => {
    console.log(req.body);
    res.sendStatus(200);
});

// 3. ALL
// Returns a status code 200 for any request type
app.all('/api/all', (req: Request, res: Response) => {
    res.sendStatus(200);
});

// Express Router _______________________________________________________________________________________
app.listen(3000, () => {
    console.log('Server is running on port http://localhost:3000');
});
