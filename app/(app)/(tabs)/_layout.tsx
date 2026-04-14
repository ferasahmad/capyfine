import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router, Tabs } from "expo-router";
import { Pressable, Text } from "react-native";

import { HapticTab } from "@/components/haptic-tab";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { capyfinePalette } from "@/tamagui.config";

function logout() {
  router.replace("/(public)/login");
}

export default function AuthedTabLayout() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const accent = isDark
    ? capyfinePalette.darkAccent
    : capyfinePalette.lightAccent;
  const headerFg = isDark
    ? capyfinePalette.darkTextPrimary
    : capyfinePalette.lightTextPrimary;
  const headerBg = isDark
    ? capyfinePalette.darkSurface
    : capyfinePalette.lightSurface;

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: isDark
          ? capyfinePalette.darkAccent
          : capyfinePalette.lightAccent,
        tabBarInactiveTintColor: isDark
          ? capyfinePalette.darkTextSecondary
          : capyfinePalette.lightTextSecondary,
        headerShown: true,
        headerTitle: "",
        headerShadowVisible: false,
        headerStyle: { backgroundColor: headerBg },
        headerLeft: () => (
          <Text
            style={{
              fontSize: 18,
              fontWeight: "700",
              color: accent,
              marginLeft: 16,
              letterSpacing: 0.3,
            }}
          >
            Capyfine
          </Text>
        ),
        headerRight: () => (
          <Pressable
            onPress={logout}
            hitSlop={12}
            accessibilityRole="button"
            accessibilityLabel="Log out"
            style={{ marginRight: 16, padding: 4 }}
          >
            <MaterialIcons name="logout" size={22} color={headerFg} />
          </Pressable>
        ),
        tabBarButton: HapticTab,
        tabBarStyle: {
          backgroundColor: isDark
            ? capyfinePalette.darkPrimary
            : capyfinePalette.lightPrimary,
          borderTopColor: isDark
            ? capyfinePalette.darkBorder
            : capyfinePalette.lightBorder,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Find",
          tabBarIcon: ({ color }) => (
            <MaterialIcons size={22} name="search" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          title: "My Words",
          tabBarIcon: ({ color }) => (
            <MaterialIcons size={22} name="bookmark" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
