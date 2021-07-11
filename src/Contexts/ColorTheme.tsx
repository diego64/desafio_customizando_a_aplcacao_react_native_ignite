import React, { createContext, useContext, useState } from 'react';
import { View } from 'react-native';

interface IColorThemeContext{
    nightMode: boolean;
    setNightMode: (arg: boolean) => void
}

const ColorThemeContext = createContext({} as IColorThemeContext);

export const ColorThemeProvider: React.FC = ({ children }) => {
    const [ nightMode, setNightMode ] = useState(false);

    return (
        <ColorThemeContext.Provider
            value={{
                nightMode,
                setNightMode
            }}
        >
            <View style={{flex: 1, 
                        backgroundColor: nightMode
                                        ?  '#191622' 
                                        :  '#FFFFFF'}}>
            { children }
            </View>
        </ColorThemeContext.Provider>
    );
}

export function useColorTheme(){
    return useContext(ColorThemeContext);
}