import { Response } from "express";

export const successResponse = (res:Response, data:any, message="Success", code=200) => {
    return res.status(code).json({
        success: true,
        message,
        data,
    });
};

export const errorMessage = (res:Response, message= "Something went wrong", code=500) => {
    return res.status(code).json({
        success: false,
        message,
    })
}


