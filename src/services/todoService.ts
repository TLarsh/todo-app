import Todo from "../models/Todo";

export const createTodo = async (userId: string, title: string) => {
    const todo = new Todo ({user:userId, title});
    return await todo.save();
};

export const getTodos = async (userId: string) => {
    return await Todo.find({user: userId});
};

export const updateTodo = async (userId: string, todoId: string, data: any) => {
    return await Todo.findOneAndUpdate({ _id: todoId, user: userId }, { $set: data }, { new: true });

};

export const deleteTodo = async (userId: string, todoId: string) => {
    return await Todo.findOneAndDelete({ _id: todoId,  user: userId });
}