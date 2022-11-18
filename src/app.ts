import express, { NextFunction, Request, Response } from "express";
import helmet from "helmet";

import routes from "./routes";

const app = express();

app.use(helmet());

app.use(express.json());

app
  .route("/")
  .get((req: Request, res: Response) => {
    res.send("You made a GET request");
  })
  .post((req: Request, res: Response) => {
    res.send("You made a POST request");
  })
  .put((req: Request, res: Response) => {
    res.send("You made a PUT request");
  });

const throwsError = async () => {
  throw new Error("Error");
};

app.get("/error", async (req: Request, res: Response, next: NextFunction) => {
  try {
    await throwsError();

    res.sendStatus(200);
  } catch (error) {
    res.status(400).send(error);
  }
});

routes(app);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
