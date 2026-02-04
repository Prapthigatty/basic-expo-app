import { View, Text, StyleSheet } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

export default function RegisterScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>

      <CustomInput placeholder="Name" />
      <CustomInput placeholder="Email or Mobile" />
      <CustomInput placeholder="Password" secureTextEntry />
      <CustomInput placeholder="Confirm Password" secureTextEntry />

      <CustomButton
        title="Register"
        onPress={() => navigation.replace("Login")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center" },
});
