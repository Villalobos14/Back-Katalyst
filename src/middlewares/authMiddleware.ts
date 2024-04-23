import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { NextFunction, Request, Response } from "express";

dotenv.config();

const secretKey: any = process.env.JWT_SECRET as string;

export const authMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const token = req.header("Authorization");

    if (!token) {
        return res.status(401).json({
            error: "unauthorized",
        });
    }

    try {
        const decode = jwt.verify(token, secretKey);

        (req as any).userId = decode;

        next();
    } catch (error) {
        return res.status(401).json({
            error: "unauthorized",
        });
    }
};
