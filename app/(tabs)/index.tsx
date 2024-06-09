import { useState } from "react";
import { Alert, Button, Text, View } from "react-native";

type Thread = {
  id: string;
  name: string;
  hexColor: string;
  count?: number;
};

export default function index() {
  const testThread: Thread = {
    id: "1",
    name: "Test Thread",
    hexColor: "#FF0000",
  };
  const [threads, setThreads] = useState([testThread]);
  const onPressAddThread = () => {
    Alert.alert("Simple Button pressed");
  };

  const onPressIncreaseCount = () => {
    setThreads((prevThreads) =>
      prevThreads.map((thread) => ({
        ...thread,
        count: (thread.count ?? 0) + 1,
      }))
    );
  };

  const onPressDecreaseCount = () => {
    setThreads((prevThreads) =>
      prevThreads.map((thread) => ({
        ...thread,
        count: (thread.count ?? 0) - 1,
      }))
    );
  };

  return threads.length === 0 ? (
    <View>
      <Text>Add threads</Text>
      <Button
        onPress={onPressAddThread}
        title="Add Thread"
        color="#841584"
        accessibilityLabel="Add a new thread to your stash."
      />
    </View>
  ) : (
    <View>
      <Text>Your threads</Text>
      {threads.map((thread) => (
        <>
          <Text style={{ color: thread.hexColor }} key={thread.id}>
            {thread.name}
          </Text>
          <Text>{thread.count ?? ""}</Text>
        </>
      ))}
      <Button
        onPress={onPressIncreaseCount}
        title="+"
        color="#841584"
        accessibilityLabel="Increase thread count by 1"
      />
      <Button
        onPress={onPressDecreaseCount}
        title="-"
        color="#841584"
        accessibilityLabel="Decrease thread count by 1"
      />
    </View>
  );
}
