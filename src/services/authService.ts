// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import User, { IUser } from "../models/User";

// export const registerUser = async (username: string, email: string, password: string): Promise<{ token: string; user: IUser }> => {
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//         throw new Error("User already exists");
//     }
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = new User({ username, email, password: hashedPassword });
//     await newUser.save();

//     const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });

//     return { token, user: newUser };
// };


import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import User, {IUser} from "../models/User";

export const registerUser = async (username:string, email:string, paassword:string): Promise<{token:string; user:IUser}> => {
    const existingUser = await User.findOne({email});
    if (existingUser) {
        throw new Error("User already exist");
    }
    const hashedPassword = await bcrypt.hash(paassword, 10);
    const user =  new User({username,email,password:hashedPassword});
    await user.save();
    const token = jwt.sign({id:user._id}, process.env.JWT_SERCRET as string, {expiresIn:"1h"});

    return {token, user:user};
};


export const loginUser= async(email:string, password:string) => {
    const user = await User.findOne({email});
    if (!user) {
        const err:any = new Error("Invalid Credentials");
        err.statusCode = 401;
        throw err;
    };
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        const err:any = new Error("Invalid Credentials");
        err.statusCode = 401;
        throw err;
    }

    const token = jwt.sign({id:user.id}, process.env.JWT_SECRET as string);
    return {token, user};
}