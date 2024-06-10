import { Button } from "@/components/ui/Button";
import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Thread } from "./MyThreads";

type AddNewThreadProps = {
  setThreads: React.Dispatch<React.SetStateAction<Thread[]>>;
  threads: Thread[];
};
export const AddNewThread = ({ setThreads, threads }: AddNewThreadProps) => {
  const [text, setText] = useState("");
  const generateNewThread = (newThreadText: string) => ({
    id: newThreadText,
    dmcNumber: "DMC123",
    name: newThreadText,
    hexCode: "#000000",
  });

  const handleAddThread = (newThread: string) => {
    setThreads([...threads, generateNewThread(newThread)]);
    setText("");
  };

  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="Add a new thread"
      />
      <Button
        accessibilityText="Add a new thread"
        onPress={() => handleAddThread(text)}
        text="Add"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "row",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
