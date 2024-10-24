import { Stack } from "expo-router/stack";
import "../global.css"
import { StrictMode } from "react";

export default function RootLayout() {
  return (
    <StrictMode>
      <Stack>
        <Stack.Screen name="index" />
      </Stack>
    </StrictMode>
  );
}
