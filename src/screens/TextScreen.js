import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View>
      <Text>Enter Name</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.textInput}
        value={name}
        onChangeText={arg => {
          setName(arg);
        }}
      />

      <Text style={styles.nameText}>My name is {name}</Text>

      <Text>Enter Password</Text>
      <TextInput
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.textInput}
        value={password}
        onChangeText={arg => {
          setPassword(arg);
        }}
      />

      <Text style={styles.nameText}>
        {password.length < 6
          ? "Password must be longer than 5 characters long"
          : null}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
  },
  nameText: {
    margin: 15,
  },
});

export default TextScreen;
