import { FlatList, StyleSheet, Text, View } from "react-native";
import { Thread } from "./MyThreads";
import { ThreadItem } from "./ThreadItem";

type ThreadsViewProps = { threads: Thread[] };
export const ThreadsView = ({ threads }: ThreadsViewProps) => {
  return (
    <View style={styles.wrapper}>
      <View>
        <Text>My Threads</Text>
      </View>

      <View style={styles.list}>
        <FlatList
          data={threads}
          renderItem={({ item }) => <ThreadItem thread={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    gap: 10,
  },
  list: {
    display: "flex",
    gap: 10,
  },
});
