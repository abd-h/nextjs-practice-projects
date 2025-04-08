'use client'
import { createContext, useState } from 'react';

export const MobileMenueContext = createContext();

export function MobileMenueProvider({children}) {
    const [isMenueOpen, setIsMenueOpen] = useState(false);



    const toggleMenue = () => {
        setIsMenueOpen(!isMenueOpen);
    }

    const mainContext = {
        toggleMenue,
        isMenueOpen
    }

    return (
        <MobileMenueContext.Provider value={ { isMenueOpen, toggleMenue } }>
            {children}
        </MobileMenueContext.Provider>
    )
}