import { TextInput, StyleSheet } from "react-native";

export default function CustomInput(props: any) {
  return (
    <TextInput
      {...props}
      style={styles.input}
      placeholderTextColor="#9CA3AF"
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    padding: 14,
    marginVertical: 8,
    fontSize: 15,
    backgroundColor: "#FFFFFF",
  },
});
