import { View, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";

function GoalInput({ addGoalHandler }) {
  const [goal, setGoal] = useState("");

  const goalChangeHandler = (enteredGoal) => {
    setGoal(enteredGoal);
  };

  const submitGoalHandler = () => {
    addGoalHandler(goal);
    setGoal("");
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Add goal"
        onChangeText={goalChangeHandler}
        value={goal}
      />
      <Button title="Add Goal" onPress={submitGoalHandler} />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
