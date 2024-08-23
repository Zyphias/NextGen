import express, { Request, Response } from "express";

class HelloWorldController {
    public async hello(req: Request, res: Response) {
        res.status(200).send("Hello World");
    }
}

const helloWorldRouter = express.Router();
const helloWorldController = new HelloWorldController();
helloWorldRouter.get("/", helloWorldController.hello);

export { helloWorldRouter };
