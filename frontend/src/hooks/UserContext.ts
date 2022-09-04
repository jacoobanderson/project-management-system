import { createContext } from "react";

export type User = {
    id: String,
    // firstName: String,
    // lastName: String,
    // email: String,
    username: String
    // password: String
}

export const UserContext = createContext({
    user: {},
    setUser: (user: User) => {}
})