import mongoose, { Schema, Document } from "mongoose";

export interface ITodo extends Document {
    user: mongoose.Types.ObjectId;
    title: string;
    completed: boolean;
}

const TodoSchema: Schema: new Schema(
    
)