import { Stack } from "expo-router/stack";
import "../global.css"
import { StrictMode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <StrictMode>
      <SafeAreaView className="flex-1">
        <Stack>
          <Stack.Screen name="index" />
        </Stack>
      </SafeAreaView>
    </StrictMode>

  );
}
