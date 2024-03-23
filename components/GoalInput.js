import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
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
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Add goal"
          onChangeText={goalChangeHandler}
          value={goal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={submitGoalHandler}
              color="coral"
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCloseModal} color="magenta" />
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
    padding: 16,
    backgroundColor: "pink",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 6,
    backgroundColor: "white",
    color: "grey",
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
  image: {
    width: 100,
    height: 100,
  },
});
