import React,{ useContext } from "react";
import { ThemeContext } from "../pages/users"

export function ThemedButton() {
    const theme = useContext(ThemeContext);
    {console.log('las props ',theme)}
    return (
    <button style={{ background: theme.background, color: theme.foreground }}>
        I am styled by theme context!
    </button>
    );
}