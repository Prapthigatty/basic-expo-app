import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>MyApp</Text>
      <Text style={styles.subHeader}>Welcome, User</Text>

      <View style={styles.grid}>
        <Card title="Profile" onPress={() => navigation.navigate("Profile")} />
        <Card title="Settings" onPress={() => {}} />
        <Card title="About" onPress={() => {}} />
        <Card title="Logout" onPress={() => navigation.replace("Login")} />
      </View>
    </View>
  );
}

function Card({ title, onPress }: any) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.cardText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F9FAFB",
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
  subHeader: {
    textAlign: "center",
    color: "#6B7280",
    marginBottom: 30,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "47%",
    height: 120,
    backgroundColor: "#9099f9",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  cardText: {
    fontSize: 16,
    fontWeight: "600",
  },
});
