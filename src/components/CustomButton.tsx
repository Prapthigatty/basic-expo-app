import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function CustomButton({ title, onPress }: any) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#288ece",
    paddingVertical: 14,
    borderRadius: 12,
    marginVertical: 10,
  },
  text: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
});
