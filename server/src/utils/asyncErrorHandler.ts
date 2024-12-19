import { NextFunction, Request, Response } from "express";

const asyncErrorHandler = (
  requestHandler: (req: Request, res: Response, next: NextFunction) => void
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err: unknown) =>
      next(err)
    );
  };
};

export { asyncErrorHandler };
