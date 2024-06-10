import { Button as ReactButton, StyleSheet, View } from "react-native";

type ButtonProps = {
  accessibilityText: string;
  disabled?: boolean;
  onPress: () => void;
  text: string;
};
export const Button = ({
  accessibilityText,
  disabled,
  onPress,
  text,
}: ButtonProps) => (
  <View style={styles.container}>
    <ReactButton
      accessibilityLabel={accessibilityText}
      disabled={disabled}
      onPress={onPress}
      title={text}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
});
