import { NavLink } from "react-router-dom";
import css from "./header.module.css";

export const Header = () => {
    return (
        <div className={css.header}>
            <NavLink style={({ isActive }) => { return { color: isActive ? 'orange': 'black'}}} className={css.link} to='/phonebook'>PHONEBOOK</NavLink>
            <NavLink style={({ isActive }) => { return { color: isActive ? 'orange': 'black'}}} className={css.link} to='/signup'>Sign Up</NavLink>
            <NavLink style={({ isActive }) => { return { color: isActive ? 'orange': 'black'}}} className={css.link} to='/login'>Login</NavLink>
        </div>
    )
}