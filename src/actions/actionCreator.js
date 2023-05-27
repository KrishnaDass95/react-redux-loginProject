import { LOGIN,LOGOUT } from "./actionsType"

export const login = (name, email, password) => {
    return {
        type : LOGIN,
        payload: {
        name,
        email,
        password
        }
    }
}

export const logout = () => {
    return {
        type: LOGOUT
    }
}