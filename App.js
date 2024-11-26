import Checkbox from "expo-checkbox";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const [todo, setTodo] = useState([]);
  const [curr, setCurr] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [index, setIndex] = useState(null);

  useEffect(() => {
    console.log(curr);
    console.log(todo);
  }, []);

  function pressHandler(flag, index) {
    if (!curr?.trim()) {
      alert("Please enter some text!");
      return;
    }

    if (flag) {
      const todoCopy = [...todo];
      todoCopy.filter((todo, ind) => {
        if (ind === index) {
          todo.item = curr;
        }
      });
      setTodo([...todoCopy]);
      setCurr("");
      setIsEditing(false);
    } else {
      setTodo((prev) => [{ item: curr.trim(), checked: false }, ...prev]);
      setCurr("");
    }
  }

  function deleteHandler(index) {
    const todoCopy = [...todo];
    todoCopy.splice(index, 1);
    setTodo([...todoCopy]);
    setIsEditing(false);
  }

  function editHandler(index) {
    setIsEditing(true);
    setIndex(index);
    setCurr(todo[index].item);
  }

  function setChecked(index) {
    const todoCopy = [...todo];
    todoCopy.filter((todo, ind) => {
      if (ind === index) todo.checked = !todo.checked;
    });
    setTodo([...todoCopy]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.todoList}>Todo List</Text>
      <TextInput
        value={curr}
        placeholder="Enter Todo"
        style={styles.input}
        onChangeText={setCurr}
      />
      {isEditing ? (
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => pressHandler(true, index)}
        >
          <Text style={styles.textInButton}>Edit</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => pressHandler(false, index)}
        >
          <Text style={styles.textInButton}>Add</Text>
        </TouchableOpacity>
      )}
      <View style={styles.hr}></View>
      <FlatList
        data={todo}
        renderItem={({ item, index }) => (
          <View style={styles.item}>
            <View style={styles.wrapperCheckbox}>
              <Checkbox
                style={styles.checkbox}
                value={item?.checked}
                onValueChange={() => setChecked(index)}
              />
              <Text
                style={{
                  textDecorationLine: item.checked ? "line-through" : "",
                }}
              >
                {item?.item?.slice(0, 18)}
                {item?.item?.length > 18 ? "..." : ""}
              </Text>
            </View>
            <View style={styles.buttonsInline}>
              <TouchableOpacity
                style={styles.btnMain}
                onPress={() => deleteHandler(index)}
              >
                {/* <Text style={styles.btnWhite}>Delete</Text> */}
                <Image
                  style={styles.image}
                  source={require("./assets/trash.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnMain}
                onPress={() => editHandler(index)}
              >
                {/* <Text style={styles.btnWhite}>Edit</Text> */}
                <Image
                  style={styles.image}
                  source={require("./assets/edit.png")}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 100,
    paddingInline: 20,
  },
  todoList: {
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
    margin: "auto",
    paddingBlock: 10,
  },
  input: {
    backgroundColor: "#dbe2ef",
    borderRadius: 6,
    paddingHorizontal: 15,
    height: 50,
  },
  addButton: {
    backgroundColor: "#3f72af",
    color: "white",
    marginBlock: 12,
    borderRadius: 6,
    padding: 10,
  },
  textInButton: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
  },
  hr: {
    borderBottomColor: "#777",
    borderBottomWidth: 1,
    marginBlock: 5,
  },
  singleLine: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  buttonsInline: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  btnWhite: {
    color: "#fff",
  },
  image: {
    width: 20,
    height: 20,
  },
  btnMain: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#000",
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: "50%",
  },
  item: {
    marginBlock: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    fontWeight: "bold",
    backgroundColor: "#dbe2ef",
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  wrapperCheckbox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  checkbox: {},
});
