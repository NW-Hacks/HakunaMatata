import React from "react"
import NavigationItem from "./NavigationItem/NavigationItem"
import classes from "./NavigationItems.module.css"
import { UseStateValue } from "../../../store/StateProvider";

const navigationItems = () => {
    const [{user}] = UseStateValue();

    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem exact link="/">Home</NavigationItem>
            <NavigationItem link="/playground">Playground</NavigationItem>
            {user == null ?      
                <NavigationItem link="/u/login">Login</NavigationItem>
            :
                <NavigationItem link="/u/slogout">Logout</NavigationItem>
            }
            <NavigationItem link="/contact-us">Contact Us</NavigationItem>
        </ul>
    )
}

export default navigationItems