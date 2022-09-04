import { createContext } from "react";

export type User = {
    id: String,
    firstName: String,
    lastName: String,
    // email: String,
    username: String
}

export const UserContext = createContext({
    user: {},
    setUser: (user: User) => {}
})