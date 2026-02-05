import AppNavigator from "./src/Navigation/AppNavigator";
import * as Notifications from "expo-notifications";

export default function App() {
  return <AppNavigator />;
}

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

