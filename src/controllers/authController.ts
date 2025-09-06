import { Request, Response, NextFunction } from "express";
import { registerUser, loginUser } from "../services/authService";
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

export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body;
        const { token, user} = await loginUser(email, password);
        res.json({success:true, token, user})
    } catch ( err ) {
        next(err);
    }
};