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

export const list = async(req:any, res:Response) => {
    try {
        const todos = await getTodos(req.user);
        res.status(200).json({succcess:true, todos});
    } catch (err:any) {
        res.status(400).json({success:false, msg:err.message});
    }
};

export const update = async(req:any, res:Response) => {
    try {
        const todo = await updateTodo( req.user, req.params.id, req.body );
        if (!todo) return res.status(404).json({ success:false, msg:"Todo not found" });
        res.json({ success:true, todo})
    } catch (err:any) {
        res.status(400).json({ success:false, msg:err.message});
    }
};

export const remove = async (req: any, res: Response) => {
  try {
    const todo = await deleteTodo(req.user, req.params.id);
    if (!todo) return res.status(404).json({ success: false, msg: "Todo not found" });
    res.json({ success: true, msg: "Todo deleted" });
  } catch (err: any) {
    res.status(400).json({ success: false, msg: err.message });
  }
};