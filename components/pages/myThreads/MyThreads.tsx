import { useState } from "react";
import { FlatList, Text, View } from "react-native";

import { PageWrapper } from "../../ui/PageWrapper";
import { AddNewThread } from "./AddThread";
import { ThreadItem } from "./ThreadItem";

export type Thread = {
  id: string;
  name: string;
  dmcNumber: string;
  hexCode: string;
  count: number;
};
export function MyThreads() {
  const emptyThreads: Thread[] = [];
  const [threads, setThreads] = useState(emptyThreads);
  const hasThreads = threads.length > 0;
  const removeThread = (id: string) => {
    const updatedThreads = threads.filter((t) => t.id !== id);
    setThreads(updatedThreads);
  };

  return (
    <PageWrapper>
      <Text>{hasThreads ? "My Threads" : "No threads found"}</Text>
      <AddNewThread setThreads={setThreads} threads={threads} />

      {hasThreads && (
        <View style={{ height: "70%" }}>
          <FlatList
            data={threads}
            renderItem={({ item }) => (
              <ThreadItem thread={item} removeThread={removeThread} />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      )}
    </PageWrapper>
  );
}
