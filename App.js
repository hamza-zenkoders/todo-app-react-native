import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function App() {
  const [todo, setTodo] = useState([]);
  const [curr, setCurr] = useState('');

  function pressHandler () {
    setTodo(prev => [...prev, curr]);
    setCurr('');
  }

  function deleteHandler (index) {
    setTodo(prev => prev.filter((todo, ind) => ind !== index));
  }

  return <View style={styles.container}>
      <View style={styles.singleLine}><TextInput value={curr} placeholder="Enter Todo" style={styles.input} onChangeText={setCurr} />
      <Button title="Add" onPress={pressHandler} />
      </View>
      <FlatList 
        data={todo}
        renderItem={({item, index}) => (
          <Text style={styles.item}>{index + 1} : {item} <Button title="Delete" onPress={() => deleteHandler(index)} /> 
          <Button title="Edit" onPress={() => deleteHandler(index)} /> </Text>
        )}
      />
    </ View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 100,
    paddingLeft: 20
  },
  singleLine: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10
  },
  item: {
    marginBlock: 10,
    display: 'flex',
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems:'center',
    fontWeight: 'bold',
  }
});
