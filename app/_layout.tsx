import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import { TamaguiProvider, Theme } from "tamagui";

import { AuthProvider, useAuth } from "@/context/auth";
import { useColorScheme } from "@/hooks/use-color-scheme";
import tamaguiConfig, { capyfinePalette } from "@/tamagui.config";

SplashScreen.preventAutoHideAsync();

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

function RootNavigator() {
  const { session, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading) {
      SplashScreen.hideAsync();
    }
  }, [isLoading]);

  if (isLoading) {
    return null;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Protected guard={!!session}>
        <Stack.Screen name="(app)" />
      </Stack.Protected>
      <Stack.Protected guard={!session}>
        <Stack.Screen name="(public)" />
      </Stack.Protected>
    </Stack>
  );
}

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const tamaguiTheme = isDark ? "dark" : "light";

  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme={tamaguiTheme}>
      <Theme name={tamaguiTheme}>
        <ThemeProvider value={isDark ? navigationDark : navigationLight}>
          <AuthProvider>
            <RootNavigator />
            <StatusBar style="auto" />
          </AuthProvider>
        </ThemeProvider>
      </Theme>
    </TamaguiProvider>
  );
}
