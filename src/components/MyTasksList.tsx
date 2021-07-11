import React from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet, FlatListProps } from 'react-native';
import {useColorTheme} from '../Contexts/ColorTheme';



function FlatListHeaderComponent() {
  const {nightMode} = useColorTheme();
  
  return (
    <View>
      <Text style={[styles.header, {color: nightMode
                                        ? '#67E480'
                                        : '#3D3D4D'}]}>Minhas tasks</Text>
    </View>
  )
}

interface MyTasksListProps {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
}

export function MyTasksList({ tasks, onLongPress, onPress }: MyTasksListProps) {
  const {nightMode} = useColorTheme();

  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            //TODO - use onPress, onLongPress and style props
            onPress={()=>onPress(item.id)}
            onLongPress={()=>onLongPress(item.id)}
            style={item.done 
                    ? [styles.taskButtonDone,{backgroundColor: nightMode 
                                                              ? 'rgba(68, 71, 90, 0.1)'
                                                              : 'rgba(25, 61, 223, 0.1)'}] 
                    : styles.taskButton
                  }
          >
            <View 
              testID={`marker-${index}`}
              //TODO - use style prop 
              style={item.done 
                      ? [styles.taskMarkerDone,{backgroundColor: nightMode
                                                              ? '#67E480'
                                                              : '#273FAD'}]
                      : [styles.taskMarker, {borderColor: nightMode
                                                        ? '#67E480'
                                                        : '#3D3D4D'}]
                    }
            />
            <Text 
              //TODO - use style prop
              style={item.done 
                      ? styles.taskTextDone
                      : [styles.taskText, {color: nightMode
                                                ? '#67E480'
                                                : '#3D3D4D'}]
                    }
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        )
      }}
      ListHeaderComponent={<FlatListHeaderComponent />}
      ListHeaderComponentStyle={{
        marginBottom: 20
      }}
      style={{
        marginHorizontal: 24,
        marginTop: 32
      }}
    />
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold'
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginRight: 10
  },
  taskText: {
    fontSize: 18
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    marginRight: 10
  },
  taskTextDone: {
    color: '#A09CB1',
    textDecorationLine: 'line-through',
    fontSize: 18
  }
})