import { Button } from "@/components/ui/Button";
import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Thread } from "./MyThreads";

type NoThreadsViewProps = {
  addNewThread: React.Dispatch<React.SetStateAction<Thread[]>>;
  threads: Thread[];
};
export const NoThreadsView = ({
  addNewThread,
  threads,
}: NoThreadsViewProps) => {
  const [text, onChangeText] = useState("");
  const generateNewThread = (newThreadText: string) => {
    return {
      id: newThreadText,
      dmcNumber: newThreadText,
    };
  };
  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Add a new thread"
      />
      <Button
        accessibilityText="Add a new thread"
        onPress={() => addNewThread([...threads, generateNewThread(text)])}
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
