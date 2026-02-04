import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useState } from "react";
import { getRandomActivity, getRandomDog } from "../services/freeApis";

export default function HomeScreen({ navigation }: any) {
  const [activity, setActivity] = useState<string>("");
  const [dogImage, setDogImage] = useState<string>("");

  const loadApis = async () => {
    try {
      const activityData = await getRandomActivity();
      const dogData = await getRandomDog();
      const loadApis = async () => {
  console.log("Load APIs clicked");
};


      setActivity(activityData.activity);
      setDogImage(dogData.message);
    } catch (error) {
      console.log("API Error:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>MyApp</Text>
      <Text style={styles.subHeader}>Welcome, Prapthi</Text>

      <View style={styles.grid}>
        <Card title="Login" onPress={() => navigation.replace("Login")} />
        <Card title="Profile" onPress={() => navigation.navigate("Profile")} />
        <Card title="Settings" onPress={() => {}} />
        <Card title="About" onPress={() => {}} />
        <Card title="Logout" onPress={() => navigation.replace("Login")} />
        <Card title="Surprise Me" onPress={loadApis} />
      </View>

      {/* API OUTPUT */}
      {activity !== "" && (
        <Text style={styles.activityText}>
          Activity: {activity}
        </Text>
      )}

      {dogImage !== "" && (
        <Image source={{ uri: dogImage }} style={styles.dogImage} />
      )}
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
  activityText: {
  marginTop: 20,
  fontSize: 16,
  textAlign: "center",
  color: "#111827",
},
dogImage: {
  width: 200,
  height: 200,
  alignSelf: "center",
  marginTop: 15,
  borderRadius: 12,
},
});
