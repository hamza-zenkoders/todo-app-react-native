import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default Calculator = (val) => {
  const [output, setOutput] = useState("");
  const [input, setInput] = useState('0');

  const inputHandler = (val) => {
    setInput(input + val.toString());
  };

  const resetValue = () => {
    setInput(input.slice(0, input.length - 1));
    if (!input.trim()) setOutput("");
  };

  const resetAllValues = () => {
    setInput('0');
    setOutput("");
  };

  const calculateValue = () => {
    setOutput(eval(input));
  };

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Image />
        <Text style={styles.textWhite}>Menu</Text>
      </View>
      <View style={styles.middleSection}>
        <Text style={styles.inputEquation}>{output}</Text>
        <Text style={styles.outputEquation}>{input}</Text>
      </View>
      <View style={styles.bottomSection}>
        <View style={styles.buttonContainer}>
          <CustomButtom
            value={"AC"}
            color={"#5C5C5F"}
            inputHandler={resetValue}
            resetAllValues={resetAllValues}
          />
          <CustomButtom value={"+/-"} color={"#5C5C5F"} />
          <CustomButtom value={"%"} color={"#5C5C5F"} inputHandler={inputHandler} />
          <CustomButtom value={"/"} color={"#FF9F0A"} inputHandler={inputHandler} />
        </View>
        <View style={styles.buttonContainer}>
          <CustomButtom
            value={7}
            color={"#2A2A2C"}
            inputHandler={inputHandler}
          />
          <CustomButtom
            value={8}
            color={"#2A2A2C"}
            inputHandler={inputHandler}
          />
          <CustomButtom
            value={9}
            color={"#2A2A2C"}
            inputHandler={inputHandler}
          />
          <CustomButtom
            value={"X"}
            color={"#FF9F0A"}
            inputHandler={inputHandler}
          />
        </View>
        <View style={styles.buttonContainer}>
          <CustomButtom
            value={4}
            color={"#2A2A2C"}
            inputHandler={inputHandler}
          />
          <CustomButtom
            value={5}
            color={"#2A2A2C"}
            inputHandler={inputHandler}
          />
          <CustomButtom
            value={6}
            color={"#2A2A2C"}
            inputHandler={inputHandler}
          />
          <CustomButtom
            value={"-"}
            color={"#FF9F0A"}
            inputHandler={inputHandler}
          />
        </View>
        <View style={styles.buttonContainer}>
          <CustomButtom
            value={1}
            color={"#2A2A2C"}
            inputHandler={inputHandler}
          />
          <CustomButtom
            value={2}
            color={"#2A2A2C"}
            inputHandler={inputHandler}
          />
          <CustomButtom
            value={3}
            color={"#2A2A2C"}
            inputHandler={inputHandler}
          />
          <CustomButtom
            value={"+"}
            color={"#FF9F0A"}
            inputHandler={inputHandler}
          />
        </View>
        <View style={styles.buttonContainer}>
          <CustomButtom value={"X"} color={"#2A2A2C"} />
          <CustomButtom
            value={0}
            color={"#2A2A2C"}
            inputHandler={inputHandler}
          />
          <CustomButtom
            value={"."}
            color={"#2A2A2C"}
            inputHandler={inputHandler}
          />
          <CustomButtom
            value={"="}
            color={"#FF9F0A"}
            inputHandler={calculateValue}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    paddingTop: "10%",
    paddingInline: 8,
  },
  textWhite: {
    color: "white",
    fontSize: 30,
  },
  topSection: {
    borderWidth: 2,
    borderColor: "#000",
    height: "20%",
  },
  middleSection: {
    height: "20%",
    display: "flex",
    paddingTop: 25,
    paddingBottom: 15,
    paddingRight: 20,
    alignItems: "flex-end",
    gap: 5,
    fontSize: 16,
  },
  inputEquation: {
    fontSize: 25,
    color: "#8A8A90",
  },
  outputEquation: {
    fontSize: 50,
    color: "#fff",
  },
  bottomSection: {
    height: "55%",
    paddingVertical: 10,
    paddingHorizontal: 20,
    display: "flex",
    justifyContent: "space-around",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    borderRadius: "50%",
    height: 70,
    width: 70,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

const CustomButtom = ({ value, color, inputHandler, resetAllValues }) => {
  return (
    <TouchableOpacity
      style={{ ...styles.button, backgroundColor: color }}
      onPress={() => inputHandler(value === "X" ? "*" : value)}
      onLongPress={resetAllValues}
    >
      <Text style={styles.textWhite}>{value}</Text>
    </TouchableOpacity>
  );
};
