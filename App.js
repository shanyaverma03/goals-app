import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import { useState } from "react";

import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [goalsList, setGoalsList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addGoalHandler = (goal) => {
    setGoalsList((prevGoalsList) => [
      ...prevGoalsList,
      { text: goal, id: Math.random().toString() },
    ]);
    setShowModal(false);
  };

  const deleteGoalHandler = (id) => {
    setGoalsList((prevGoalsList) =>
      prevGoalsList.filter((goalItem) => goalItem.id !== id)
    );
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };
  return (
    <View style={styles.appContainer}>
      <Button
        title="Add Goal"
        color="#5e0acc"
        onPress={() => setShowModal(true)}
      />
      {showModal && (
        <GoalInput
          addGoalHandler={addGoalHandler}
          showModal={showModal}
          onCloseModal={closeModalHandler}
        />
      )}
      <View style={styles.goalsContainer}>
        <FlatList
          data={goalsList}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteGoal={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => item.id}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
  },
});
