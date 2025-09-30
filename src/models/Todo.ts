import mongoose, { Schema, Document } from "mongoose";

export interface ITodo extends Document {
    user: mongoose.Types.ObjectId;
    title: string;
    completed: boolean;
}

const TodoSchema: Schema = new Schema(
    {
        user: { type:mongoose.Types.ObjectId, ref:"User", required:true },
        title: { type: String, require: true },
        completed: { type: Boolean, default: false }
    },
    {timestamps: true},
);

export default mongoose.model<ITodo>("Todo", TodoSchema);