import { createContext } from "react";

export type User = {
    id: String,
    firstName: String,
    lastName: String,
    // email: String,
    username: String
}

export interface IUser {
        id: String;
        firstName: String;
        lastName: String;
        username: String;
}

export const UserContext = createContext({
    user: {
        id: '',
        firstName: '',
        lastName: '',
        username: ''
    } as IUser,
    setUser: (user: User) => {}
})