import { Request, Response, NextFunction } from "express";
import { registerUser } from "../services/authService";
import { successResponse } from "../utils/response";

export const register = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { username, email, password } = req.body;
        const { token, user } = await registerUser(username, email, password);
        return successResponse(res, { token, user }, "User Registered.", 201);
    } catch (err) {
        next(err);
    }
};