import { View, Text, StyleSheet } from "react-native";
import { useEffect } from "react";

export default function SplashScreen({ navigation }: any) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Login"); // OR Home if already logged in
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>MyApp</Text>
      <Text style={styles.tagline}>Smart. Simple. Secure.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
  },
  tagline: {
    marginTop: 10,
    color: "#389be6",
  },
});
