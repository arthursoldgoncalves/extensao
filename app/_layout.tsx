import { Stack } from "expo-router";

import LoginScreen from "./loginPage";

export default function RootLayout() {
  return (
    <Stack initialRouteName="loginPage">
      <Stack.Screen name="loginPage"/>
    </Stack>
  );
}
