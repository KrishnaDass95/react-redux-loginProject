import { useSelector, useDispatch } from "react-redux";
import { LOGOUT } from "../actions/actionsType";
import { useNavigate } from "react-router-dom";

export const Profile = () => {

    const loginState = useSelector(state => state);
    const dispatch = useDispatch();
    console.log('login', loginState);
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch({type : LOGOUT})
        navigate('/');


    }
    return (
        <div className="container">
            <h1>Profiles page </h1>
            <h2>Full Name: {loginState.name}</h2>
            <h2>Email: {loginState.email}</h2>
            <h2>Password: {loginState.password}</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

