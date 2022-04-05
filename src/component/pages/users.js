import React, { useContext } from "react"
import { LogingContext } from "../App"

export const User = () =>{

    const dataUser = useContext(LogingContext);

    
    return (
        <div>
            Mi nombre es {dataUser.name}
            <br/>
            Mi correo es {dataUser.email} 
            <br/>
            Estado {dataUser.auth ? 'activa' : 'in-activo'}
        </div>
    )
}

/*------------------------------------------------------------------------------------*/
/*
const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee"
    },
    dark: {
      foreground: "#ffffff",
      background: "#222222"
    }
  };
  
    export const ThemeContext = React.createContext(themes.light);
  
    export const User1 = () => {
        return (
            <ThemeContext.Provider value={themes.dark}>
                <Toolbar />
            </ThemeContext.Provider>
        );
    }
  
    /* function Toolbar(props) {
        return (
        <div>
            <ThemedButton />
        </div>
        );
    } */
 
 /*    function ThemedButton() {
        const theme = useContext(ThemeContext);
        {console.log('las props ',theme)}
        return (
        <button style={{ background: theme.background, color: theme.foreground }}>
            I am styled by theme context!
        </button>
        );
    } */