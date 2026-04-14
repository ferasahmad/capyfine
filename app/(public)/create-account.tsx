import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Pressable } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import { Button, Input, Text, YStack, useTheme } from "tamagui";

import { AuthScreenShell } from "@/components/auth/auth-screen-shell";

function goToAuthedTabs() {
  router.replace("/(app)/(tabs)");
}

export default function CreateAccountScreen() {
  const theme = useTheme();
  const iconColor = theme.textPlaceholder.val as string;

  return (
    <AuthScreenShell>
      <StatusBar style="dark" />
      <Animated.View entering={FadeInDown.duration(600).delay(100)}>
        <YStack gap="$1" alignItems="center" marginBottom="$2">
          <Text fontSize={24} fontWeight="800" color="$color" textAlign="center" letterSpacing={-0.5}>
            Create Account
          </Text>
          <Text fontSize={16} color="$textSecondary" textAlign="center">
            Start your journey of words.
          </Text>
        </YStack>
      </Animated.View>

      <Animated.View entering={FadeInDown.duration(600).delay(200)}>
        <YStack gap="$1">
          <Text fontSize={14} fontWeight="600" color="$color" marginLeft="$2">
            Full Name
          </Text>
          <YStack justifyContent="center">
            <Input
              paddingLeft={44}
              placeholder="Alex Reader"
              placeholderTextColor="$textPlaceholder"
              backgroundColor="$surface"
              borderWidth={1}
              borderColor="$inputBorder"
              focusStyle={{ borderColor: "$accent", borderWidth: 2 }}
              borderRadius={9999}
              height={56}
              paddingRight={20}
              fontSize={16}
              color="$color"
              autoCapitalize="words"
            />
            <YStack position="absolute" left={16} pointerEvents="none">
              <Feather name="user" size={20} color={iconColor} />
            </YStack>
          </YStack>
        </YStack>
      </Animated.View>

      <Animated.View entering={FadeInDown.duration(600).delay(300)}>
        <YStack gap="$1" marginTop="$2">
          <Text fontSize={14} fontWeight="600" color="$color" marginLeft="$2">
            Email Address
          </Text>
          <YStack justifyContent="center">
            <Input
              paddingLeft={44}
              placeholder="hello@example.com"
              placeholderTextColor="$textPlaceholder"
              backgroundColor="$surface"
              borderWidth={1}
              borderColor="$inputBorder"
              focusStyle={{ borderColor: "$accent", borderWidth: 2 }}
              borderRadius={9999}
              height={56}
              paddingRight={20}
              fontSize={16}
              color="$color"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
            <YStack position="absolute" left={16} pointerEvents="none">
              <Feather name="mail" size={20} color={iconColor} />
            </YStack>
          </YStack>
        </YStack>
      </Animated.View>

      <Animated.View entering={FadeInDown.duration(600).delay(400)}>
        <YStack gap="$1" marginTop="$2">
          <Text fontSize={14} fontWeight="600" color="$color" marginLeft="$2">
            Password
          </Text>
          <YStack justifyContent="center">
            <Input
              paddingLeft={44}
              placeholder="••••••••"
              placeholderTextColor="$textPlaceholder"
              backgroundColor="$surface"
              borderWidth={1}
              borderColor="$inputBorder"
              focusStyle={{ borderColor: "$accent", borderWidth: 2 }}
              borderRadius={9999}
              height={56}
              paddingRight={20}
              fontSize={16}
              color="$color"
              secureTextEntry
            />
            <YStack position="absolute" left={16} pointerEvents="none">
              <Feather name="lock" size={20} color={iconColor} />
            </YStack>
          </YStack>
        </YStack>
      </Animated.View>

      <Animated.View entering={FadeInDown.duration(600).delay(500)}>
        <Button
          unstyled
          backgroundColor="$accent"
          pressStyle={{ backgroundColor: "$accentHover", scale: 0.98 }}
          borderRadius={9999}
          paddingVertical={18}
          paddingHorizontal={24}
          marginTop="$3"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          gap="$3"
          shadowColor="$accent"
          shadowOffset={{ width: 0, height: 4 }}
          shadowOpacity={0.25}
          shadowRadius={12}
          elevation={4}
          onPress={goToAuthedTabs}
        >
          <Text color="white" fontSize={18} fontWeight="700">
            Create Account
          </Text>
          <Feather name="arrow-right" size={20} color="white" />
        </Button>
      </Animated.View>

      <Animated.View entering={FadeInDown.duration(600).delay(600)}>
        <Pressable
          onPress={() => router.push("/login")}
          style={({ pressed }) => ({
            alignSelf: "center",
            marginTop: 16,
            opacity: pressed ? 0.7 : 1,
          })}
        >
          <Text fontSize={15} color="$textSecondary" textAlign="center">
            Already have an account?{" "}
            <Text color="$accent" fontWeight="700">
              Login
            </Text>
          </Text>
        </Pressable>
      </Animated.View>
    </AuthScreenShell>
  );
}
