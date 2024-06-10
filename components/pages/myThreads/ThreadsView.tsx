import { Button } from "@/components/ui/Button";
import { FlatList, Text, View } from "react-native";
import { Thread } from "./MyThreads";

type ItemProps = { title: string };
const Item = ({ title }: ItemProps) => (
  <View>
    <Text>{title}</Text>
  </View>
);

type ThreadsViewProps = { threads: Thread[] };
export const ThreadsView = ({ threads }: ThreadsViewProps) => {
  return (
    <View>
      <Text>My Threads</Text>
      <Button
        accessibilityText="Add a new thread"
        onPress={() => {}}
        text="Add"
      />
      <FlatList
        data={threads}
        renderItem={({ item }) => <Item title={item.dmcNumber} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
