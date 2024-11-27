import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";

export default function StopWatch() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [intervalId, setIntervalId] = useState(0);

  const startTimer = (flag) => {
    if (intervalId) {
    clearInterval(intervalId);
    setIntervalId(0);
    } else {
        const id = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000)
        setIntervalId(id);
    }
  }

  const resetTimer = () => {
    clearInterval(intervalId);
    setSeconds(0);
    setMinutes(0);
    setIntervalId(0);
  }

  useEffect(() => {
    if (seconds > 59) {
        setSeconds(0);
        setMinutes(prev => prev + 1);
    }
  }, [seconds])

  return (
    <View style={styles.container}>
      <View style={styles.time}>
        <Text style={styles.timeBoxes}>{minutes}</Text>
        <Text style={styles.timeBoxes}>{seconds}</Text>
      </View>
      <View style={styles.btnsWrapper}>
        <TouchableOpacity style={styles.btn} onPress={() => startTimer(intervalId ? true : false)}>
          <Text>{intervalId ? 'Pause' : 'Start'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={resetTimer}>
          <Text>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  time: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
},
timeBoxes: {
    borderWidth: 2,
    borderColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
    fontSize: 38
  },
  btnsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    paddingVertical: 40
  },
  btn: {
    borderWidth: 2,
    borderColor: '#000',
    width: 60,
    height: 60,
    borderRadius: '50%',
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
  }
});
