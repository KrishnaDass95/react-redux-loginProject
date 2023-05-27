import { LOGIN, LOGOUT } from "../actions/actionsType";

let initialState = {
    name: "",
    email: "",
    password: "",
}


const loginReducer = (state=initialState, actions) => {

    switch(actions.type){
        case LOGIN :
            return{...state, 
                name: actions.payload.name,
                email: actions.payload.email,
                password: actions.payload.password
            };
        case LOGOUT :
            return initialState;
        default:
            return state;
    }

}

export default loginReducer;