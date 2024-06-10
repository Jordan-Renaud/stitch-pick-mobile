import { SafeAreaView, StyleSheet } from "react-native";

export const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return <SafeAreaView style={styles.wrapper}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    top: 20,
  },
});
