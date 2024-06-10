import { PageWrapper } from "@/components/ui/PageWrapper";
import { useState } from "react";
import { NoThreadsView } from "./NoThreadsView";
import { ThreadsView } from "./ThreadsView";

export type Thread = { id: string; dmcNumber: string };
export function MyThreads() {
  const emptyThreads: Thread[] = [];
  const [threads, setThreads] = useState(emptyThreads);
  return (
    <PageWrapper>
      {threads.length > 0 ? (
        <ThreadsView threads={threads} />
      ) : (
        <NoThreadsView addNewThread={setThreads} threads={threads} />
      )}
    </PageWrapper>
  );
}
