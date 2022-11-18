import { Request, Response, NextFunction } from "express";

const getBookHandler = async (req: Request, res: Response) => {
  console.log(req.params);

  res.send(req.params);
};

export default getBookHandler;
