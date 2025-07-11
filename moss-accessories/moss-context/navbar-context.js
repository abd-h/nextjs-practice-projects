'use client'
import { createContext, useState } from 'react';

// use for handling opening and closing navbar mobile hamburger menu
export const MobileMenueContext = createContext();

export function MobileMenueProvider({children}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentMenu, setCurrentMenu] = useState(null);
    const [menuHistory, setMenuHistory] = useState([]);



    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (!isMenuOpen) {
            setCurrentMenu(null);
            setMenuHistory([]);
        }
    }

    const handleNavItemClick = (item) => {
        if (item.content) {
            setMenuHistory([...menuHistory, currentMenu]);
            setCurrentMenu(item)
            
        }
        
    };

    const handleBack = () => {
        const prevMenu = menuHistory.pop();
        setCurrentMenu(prevMenu);
        setMenuHistory([...menuHistory]);
    }



    const mainContext = {
        toggleMenu,
        handleNavItemClick,
        handleBack,
        isMenuOpen,
        currentMenu,
        menuHistory
    }

    return (
        <MobileMenueContext.Provider value={ mainContext  }>
            {children}
        </MobileMenueContext.Provider>
    )
}