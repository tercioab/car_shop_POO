import { Request, Response, NextFunction } from 'express';

class ErrorHandler {
  public static execute = (error: Error, _req: Request, res: Response, next: NextFunction) => {
    res.status(500).json(error.message);
    next();
  };
}

export default ErrorHandler;