import { Request, Response } from "express";
import { createTodo, getTodos, updateTodo, deleteTodo } from "../services/todoService";


export const create = async(req:any, res:Response) => {
    try {
        const todo = await createTodo(req.user, req.body.title);
        res.status(201).json({success:true, todo});
    } catch (err:any) {
        res.status(400).json({success:false, msg:err.message})
    }
};