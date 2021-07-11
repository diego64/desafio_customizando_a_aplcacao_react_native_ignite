import React from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';
import {useColorTheme} from '../Contexts/ColorTheme';
import { ThemeSwitch } from './ThemeSwitch';

export function Header() {
  const {nightMode} = useColorTheme();

  return (
    <>
      <View style={[styles.header,{backgroundColor: nightMode
                                                  ? '#483C67'
                                                  : '#273FAD'},
      ]}>
        <Text style={[styles.headerText, 
                      {color: nightMode 
                            ? '#E1E1E6'
                            : '#FFF'}]}>to.</Text>
        <Text style={[styles.headerText, 
                      {fontFamily: 'Poppins-SemiBold' }, 
                      {color: nightMode 
                            ? '#E1E1E6'
                            : '#FFF'}]}>do</Text>
      </View>
      <View style={styles.swither}>
        <ThemeSwitch/>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 24,
    fontFamily: 'Poppins-Regular',
  },
  swither:{
    position: 'absolute',
    marginTop: 30,
    marginLeft: 345,
    flexDirection: 'column',
    alignItems: 'center',
    
  }
});
