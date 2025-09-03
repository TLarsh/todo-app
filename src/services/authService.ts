import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User, { IUser } from "../models/User";

export const registerUser = async (username: string, email: string, password: string): Promise<{ token: string; user: IUser }> => {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new Error("User already exists");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });

    return { token, user: newUser };
};

// export { registerUser };