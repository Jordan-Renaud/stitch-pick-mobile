import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    display: "flex",
    gap: 20,
  },
  threadNameContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 5,
    width: 200,
  },
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
  countContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 5,
    width: 200,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
