import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

export default function LoginScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <CustomInput placeholder="Email or Mobile" />
      <CustomInput placeholder="Password" secureTextEntry />

      <CustomButton
        title="Login"
        onPress={() => navigation.replace("Home")}
      />

      <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
  <Text style={styles.link}>Forgot Password?</Text>
</TouchableOpacity>


      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={styles.link}>New user? Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center" },
  link: { textAlign: "center", marginTop: 15, color: "#007AFF" },
});
