import { Button } from "@/components/ui/Button";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Thread } from "./MyThreads";

type ItemProps = { thread: Thread; count?: number };
export const ThreadItem = ({ thread, count = 0 }: ItemProps) => {
  const [threadCount, setThreadCount] = useState(count);

  return (
    <View style={styles.wrapper}>
      <Text>
        {thread.dmcNumber} – {thread.name}
      </Text>
      <Text>Count: {threadCount}</Text>
      <View
        style={{ height: 20, width: 20, backgroundColor: thread.hexCode }}
      />
      <Button
        accessibilityText={`Increase thread amount to ${threadCount + 1}`}
        onPress={() => setThreadCount(threadCount + 1)}
        text="+"
      />
      <Button
        accessibilityText={`Decrease thread amount to ${threadCount - 1}`}
        onPress={() => setThreadCount(threadCount - 1)}
        text="-"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "row",
  },
});
