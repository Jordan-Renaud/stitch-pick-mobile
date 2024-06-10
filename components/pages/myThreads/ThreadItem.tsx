import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Button } from "../../ui/Button";
import { Thread } from "./MyThreads";

type ItemProps = { thread: Thread; removeThread: (threads: string) => void };
export const ThreadItem = ({ thread, removeThread }: ItemProps) => {
  const [threadCount, setThreadCount] = useState(thread.count);

  useEffect(() => {
    if (threadCount <= 0) {
      removeThread(thread.id);
    }
  });
  return (
    <View style={{ display: "flex", flexDirection: "row" }}>
      <View style={styles.dmc}>
        <Text>DMC {thread.dmcNumber}</Text>
      </View>
      <Text>{thread.name}</Text>
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
  dmc: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: 30,
    borderColor: "black",
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
});
