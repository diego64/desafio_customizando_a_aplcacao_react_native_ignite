import React, { useState } from 'react';
import { Image, Platform, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

import checkIcon from '../assets/icons/Check.png';
import {useColorTheme} from '../Contexts/ColorTheme';

interface TodoInputProps {
  addTask: (task: string) => void;
}

export function TodoInput({ addTask }: TodoInputProps) {
  const [task, setTask] = useState('');
  const {nightMode} = useColorTheme();

  function handleAddNewTask() {
    addTask(task);
    setTask('');
  }

  return (
    <View style={[styles.inputContainer, Platform.OS === 'ios' 
                                          ? styles.inputIOSShadow 
                                          : styles.inputAndroidShadow ,{ 
                                          backgroundColor: nightMode
                                                          ? '#34313D'
                                                          : '#F5F4F8'}
                                        
    ]}>
      <TextInput 
        style={[styles.input,{backgroundColor: nightMode 
                                              ? '#34313D'
                                              : "#F5F4F8"},
                              {color: nightMode 
                                    ? '#A09CB1'
                                    : '#34313D' }]} 
        placeholder="Adicionar novo todo..."
        placeholderTextColor={nightMode 
                              ? '#A09CB1'
                              : '#34313D'}
        returnKeyType="send"
        //TODO - use onPress, onLongPress and onSubmitEditing props
        value={task}
        onChangeText={setTask}
        onSubmitEditing={() => handleAddNewTask()}
      />
      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={0.7}
        style={[styles.addButton,{backgroundColor: nightMode 
                                                ? '#988BC7'
                                                : '#3FAD27'}]}
        //TODO - use onPress props
        onPress={() => handleAddNewTask()}
      >
        <Image source={checkIcon} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    borderRadius: 5,
    marginTop: -25,
    marginHorizontal: 35,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    paddingLeft: 12,
    fontSize: 18,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  inputIOSShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  inputAndroidShadow: {
    elevation: 5
  },
  addButton: {
    height: 50,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});