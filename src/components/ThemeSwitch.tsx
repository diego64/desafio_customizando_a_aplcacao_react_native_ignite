import React, { useState } from "react";
import { Text, View, Switch, StyleSheet, TouchableOpacity } from "react-native";
import {useColorTheme} from '../Contexts/ColorTheme';

import Icon from 'react-native-vector-icons/Feather'

export function ThemeSwitch(){
  const {nightMode, setNightMode} = useColorTheme();
  
  
  const toggleSwitch = () => {
    setNightMode(!nightMode)
  }

  return (
    <View>
      <TouchableOpacity 
        onPress={toggleSwitch} 
        style={[styles.container, {backgroundColor: nightMode
                                                  ? '#988BC7'
                                                  : '#3FAD27'}]}
      >
        <Icon
          name={nightMode ? 'moon' : 'sun'}
          size={20}
          color= "#FFFF"
          style={{fontWeight: 'bold'}}
        />
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    borderRadius: 15,
    width: 30,
    height: 30,
    alignItems:'center',
    justifyContent: 'center'
  },

});
