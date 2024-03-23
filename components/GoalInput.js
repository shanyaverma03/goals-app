import { View, TextInput, Button, StyleSheet, Modal } from "react-native";
import { useState } from "react";

function GoalInput({ addGoalHandler, showModal, onCloseModal }) {
  const [goal, setGoal] = useState("");

  const goalChangeHandler = (enteredGoal) => {
    setGoal(enteredGoal);
  };

  const submitGoalHandler = () => {
    addGoalHandler(goal);
    setGoal("");
  };
  return (
    <Modal visible={showModal} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Add goal"
          onChangeText={goalChangeHandler}
          value={goal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={submitGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCloseModal} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    padding: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "80%",
    padding: 8,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
