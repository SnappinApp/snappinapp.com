import React, { createContext, Dispatch, ReactNode, useContext, useReducer } from 'react';

interface Props {
    children: ReactNode
}

interface MenuState {
    isOpen: boolean
}

type MenuAction = { type: 'TOGGLE_MENU' };

interface MenuContextType {
    state: MenuState;
    dispatch: Dispatch<MenuAction>;
}

// 1. Create the Menu context with an initial undefined value
const MenuContext = createContext<MenuContextType | undefined>(undefined);

// 2. Define the reducer function to manage menu state changes
const menuReducer = (state: MenuState, action: MenuAction) => {
    switch (action.type) {
        case 'TOGGLE_MENU':
            return { isOpen: !state.isOpen };
        default:
            return state;
    }
}

// 3. Define the MenuProvider component that wraps children with context
export const MenuProvider: React.FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(menuReducer, { isOpen: false });
    return (
        <MenuContext.Provider value={{ state, dispatch }}>
            {children}
        </MenuContext.Provider>
    )
}

// 4. Export useMenu
export const useMenu = (): MenuContextType => {
    const context = useContext(MenuContext)
    if (!context) {
        throw new Error('useMenu must be used within a MenuProvider');
    }
    return context;
};