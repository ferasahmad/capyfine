import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { TamaguiProvider, Theme } from "tamagui";

import { useColorScheme } from "@/hooks/use-color-scheme";
import tamaguiConfig, { capyfinePalette } from "@/tamagui.config";

export const unstable_settings = {
  anchor: '(public)',
};

const navigationLight = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: capyfinePalette.lightAccent,
    background: capyfinePalette.lightBackground,
    card: capyfinePalette.lightSurface,
    text: capyfinePalette.lightTextPrimary,
    border: capyfinePalette.lightBorder,
    notification: capyfinePalette.lightCta,
  },
};

const navigationDark = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: capyfinePalette.darkAccent,
    background: capyfinePalette.darkBackground,
    card: capyfinePalette.darkSurface,
    text: capyfinePalette.darkTextPrimary,
    border: capyfinePalette.darkBorder,
    notification: capyfinePalette.darkCta,
  },
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const tamaguiTheme = isDark ? "dark" : "light";

  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme={tamaguiTheme}>
      <Theme name={tamaguiTheme}>
        <ThemeProvider value={isDark ? navigationDark : navigationLight}>
          <Stack
            screenOptions={{ headerShown: false }}
            initialRouteName="(public)">
            <Stack.Screen name="(public)" />
            <Stack.Screen name="(app)" />
          </Stack>
          <StatusBar style="auto" />
        </ThemeProvider>
      </Theme>
    </TamaguiProvider>
  );
}
