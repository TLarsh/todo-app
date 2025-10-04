import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface JwtPayload {
    id: string;
}

export const authMiddleware = (
    req: Request & { user? : string },
    res: Response,
    next: NextFunction
) => {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) return res.status(401).json({msg: "No token, Authorization denied!"});

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;
        req.user = decoded.id;
        next();
    } catch (err) {
        res.status(401).json({msg: "Invalid token"});
    }
}
