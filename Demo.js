import { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default Demo = () => {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    const btnHandler1 = () => {
        setCounter1(prev => prev + 1);
    }

    const btnHandler2 = () => {
        setCounter2(prev => prev + 1);
    }

    useEffect(() => {
        // if (counter1 > 10) setCounter1(0);
        // if (counter2 > 10) setCounter2(0);
        if (counter1 === 10 && counter2 === 10) {
            setCounter1(0);
            setCounter2(0);
        }
    }, [counter1, counter2])

  return (
    <View style={styles.container}>
        <Text style={{ fontSize: 20, marginBottom: 20 }}>{counter1}</Text>
      <TouchableOpacity style={styles.btnMain} onPress={btnHandler1}>
        <Text style={{ color: "#fff", fontSize: 20 }}>Counter</Text>
      </TouchableOpacity>
        <Text style={{ fontSize: 20, marginTop: 20, marginBottom: 20 }}>{counter2}</Text>
      <TouchableOpacity style={styles.btnMain} onPress={btnHandler2}>
        <Text style={{ color: "#fff", fontSize: 20 }}>Timer</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  btnMain: {
    backgroundColor: "teal",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 6,
  },
});
