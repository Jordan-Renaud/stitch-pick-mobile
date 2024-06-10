import { PageWrapper } from "@/components/ui/PageWrapper";
import { useState } from "react";
import { Text } from "react-native";
import { AddNewThread } from "./AddThread";
import { ThreadsView } from "./ThreadsView";

export type Thread = {
  id: string;
  name: string;
  dmcNumber: string;
  hexCode: string;
};
export function MyThreads() {
  const emptyThreads: Thread[] = [];
  const [threads, setThreads] = useState(emptyThreads);
  const hasThreads = threads.length > 0;
  return (
    <PageWrapper>
      <Text>{hasThreads ? "My Threads" : "No threads found"}</Text>
      <AddNewThread setThreads={setThreads} threads={threads} />

      {hasThreads && <ThreadsView threads={threads} />}
    </PageWrapper>
  );
}
