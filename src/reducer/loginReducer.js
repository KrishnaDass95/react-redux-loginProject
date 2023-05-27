import { LOGIN, LOGOUT } from "../actions/actionsType";

let initialState = {
    name: null,
    email: null,
    password: null,
}


const loginReducer = (state=initialState, actions) => {

    switch(actions.type){
        case LOGIN :
            return{...state, 
                name: actions.name,
                email: actions.email,
                password: actions.password
            };
        case LOGOUT :
            return initialState;
        default:
            return state;
    }

}

export default loginReducer;