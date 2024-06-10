import { useEffect, useState } from "react";
import { Text, View } from "react-native";

import { Button } from "../../ui/Button";
import { Thread } from "./MyThreads";
import { styles } from "./ThreadItem.styles";

type ItemProps = { thread: Thread; removeThread: (threads: string) => void };
export const ThreadItem = ({ thread, removeThread }: ItemProps) => {
  const [threadCount, setThreadCount] = useState(thread.count);

  useEffect(() => {
    if (threadCount <= 0) {
      removeThread(thread.id);
    }
  });
  return (
    <View style={styles.wrapper}>
      <View style={styles.threadNameContainer}>
        <View style={styles.dmc}>
          <Text>DMC {thread.dmcNumber}</Text>
        </View>
        <Text>{thread.name}</Text>
      </View>

      <View
        style={{ height: 20, width: 200, backgroundColor: thread.hexCode }}
      />
      <View style={styles.countContainer}>
        <Text>Count: {threadCount}</Text>
        <View style={styles.buttonContainer}>
          <Button
            accessibilityText={`Decrease thread amount to ${threadCount - 1}`}
            onPress={() => setThreadCount(threadCount - 1)}
            text="-"
          />
          <Button
            accessibilityText={`Increase thread amount to ${threadCount + 1}`}
            onPress={() => setThreadCount(threadCount + 1)}
            text="+"
          />
        </View>
      </View>
    </View>
  );
};
