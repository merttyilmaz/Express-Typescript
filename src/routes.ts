import { Express } from "express";

import getBookHandler from "./controllers/books.controllers";

const routes = (app: Express) => {
  app.get("/api/books/:bookId", getBookHandler);
};

export default routes;
