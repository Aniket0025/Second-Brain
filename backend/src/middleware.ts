import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

import { JWT_PASSWORD } from "./config.js";

export const userMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const header = req.headers['authorization'];   // fixed: req,headers → req.headers

    const decoded = jwt.verify(header as string, JWT_PASSWORD);  // fixed type

    if (decoded) {
        (req as any).userId = (decoded as any).id;  // fixed access
        next();
    } else {
        res.status(403).json({
            message: "you are not looged in"
        });
    }
};
