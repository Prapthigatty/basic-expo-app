import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profile</Text>

      <Text>Name: Prapthi A</Text>
      <Text>Email: thisisprapthi@gmail.com</Text>
      <Text>Mobile: 9876543210</Text>

      <CustomButton title="Edit" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  header: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
});
