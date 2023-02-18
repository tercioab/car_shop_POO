import { Request, Response, NextFunction } from 'express';
import { isValidObjectId } from 'mongoose';

export default function validateId(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { id } = req.params;
  if (!isValidObjectId(id)) return res.status(422).json({ message: 'Invalid mongo id' });
  next();
}