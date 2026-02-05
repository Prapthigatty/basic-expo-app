import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
} from "react-native";
import { useEffect, useState } from "react";
import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import Constants from "expo-constants";
import { getRandomActivity, getRandomDog } from "../services/freeApis";

/**
 * Notification behavior
 */
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowBanner: true,
    shouldShowList: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function HomeScreen({ navigation }: any) {
  const [activity, setActivity] = useState("");
  const [dogImage, setDogImage] = useState("");
  const [expoPushToken, setExpoPushToken] = useState("");

  /**
   * Register for push notifications ONCE
   */
  useEffect(() => {
    registerForPushNotificationsAsync().then((token) => {
      if (token) {
        setExpoPushToken(token);
        console.log("Expo Push Token:", token);
      }
    });
  }, []);

  /**
   * Fetch APIs + show local notification
   */
  const loadApis = async () => {
    try {
      const activityData = await getRandomActivity();
      const dogData = await getRandomDog();

      setActivity(activityData.activity);
      setDogImage(dogData.message);

      await Notifications.scheduleNotificationAsync({
        content: {
          title: "Surprise Ready 🎉",
          body: activityData.activity,
        },
        trigger: null, // immediate
      });
    } catch (error) {
      console.log("API Error:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>MyApp</Text>
      <Text style={styles.subHeader}>Welcome, Prapthi</Text>

      <View style={styles.grid}>
        <Card title="Profile" onPress={() => navigation.navigate("Profile")} />
        <Card title="Settings" onPress={() => {}} />
        <Card title="About" onPress={() => {}} />
        <Card title="Surprise Me" onPress={loadApis} />
        <Card title="Logout" onPress={() => navigation.replace("Login")} />
      </View>

      {activity !== "" && (
        <Text style={styles.activityText}>Activity: {activity}</Text>
      )}

      {dogImage !== "" && (
        <Image source={{ uri: dogImage }} style={styles.dogImage} />
      )}
    </View>
  );
}

/**
 * Push notification registration
 */
async function registerForPushNotificationsAsync(): Promise<string | undefined> {
  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
    });
  }

  if (!Device.isDevice) {
    alert("Must use physical device for push notifications");
    return;
  }

  const { status: existingStatus } =
    await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;

  if (existingStatus !== "granted") {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }

  if (finalStatus !== "granted") {
    alert("Notification permission not granted");
    return;
  }

  const projectId =
    Constants.expoConfig?.extra?.eas?.projectId ??
    Constants.easConfig?.projectId;

  if (!projectId) {
    alert("Project ID not found");
    return;
  }

  const token = (
    await Notifications.getExpoPushTokenAsync({ projectId })
  ).data;

  return token;
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
