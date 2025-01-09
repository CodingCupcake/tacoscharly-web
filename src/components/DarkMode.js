import React from "react";
import solPNG from "./icons/sol.png"
import lunaPNG from "./icons/luna.png"

const DarkMode = () =>{
    const [theme, setTheme] = React.useState(localStorage.getItem("theme")? localStorage.getItem("theme") : "light");
    const element = document.documentElement;

    React.useEffect(() => {
        if(theme === "dark"){
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }else{
            element.classList.add("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme]);

    const changeTheme = () => {
        if(theme === "light"){
        setTheme("dark");
        } else {
            setTheme("light");
        }
    };
    
    return(
        <div className="relative">
            <img src={lunaPNG} alt="" onClick={changeTheme} className="w-12 absolute -top-1 right-0 z-10 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300" />
            <img src={solPNG} alt="" onClick={changeTheme} className="w-12 absolute -top-1 right-0 z-10 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300" />
        </div> 
    )
}

export default DarkMode;
