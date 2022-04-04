import React, { useContext } from "react"
import UserContext from "../context/userContext";

/**/
import { Toolbar } from "../ejemplo/toolbar";

import {MyContext} from "./bookings";

export const User1 = () =>{
    
    //cons este hook accedemos al dato del context
    //console.log(MyContext)
    const date = useContext(MyContext);
    {console.log('las props ',date)}
    console.log(date);

    return (
        <div>
            Soy User con {date.name}
            <br/>
            Soy User con {date.email}
        </div>
    )
}

/*------------------------------------------------------------------------------------*/

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
  
    export const User = () => {
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