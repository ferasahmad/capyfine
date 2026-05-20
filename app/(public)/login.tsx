import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ActivityIndicator, Pressable } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import { Button, Input, Text, YStack, useTheme } from "tamagui";

import { AuthScreenShell } from "@/components/auth/auth-screen-shell";
import { useAuth } from "@/context/auth";

export default function LoginScreen() {
  const theme = useTheme();
  const iconColor = theme.textPlaceholder.val as string;
  const { signIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSignIn = async () => {
    if (!email.trim() || !password) {
      setError("Please enter your email and password.");
      return;
    }
    setLoading(true);
    setError(null);
    const { error: signInError } = await signIn(email, password);
    if (signInError) {
      setError(signInError);
      setLoading(false);
    }
    // On success, the root layout guard swaps to the authenticated stack.
  };

  return (
    <AuthScreenShell>
      <StatusBar style="dark" />
      <Animated.View entering={FadeInDown.duration(600).delay(100)}>
        <YStack gap="$1" alignItems="center" marginBottom="$2">
          <Text fontSize={32} fontWeight="800" color="$color" textAlign="center" letterSpacing={-0.5}>
            Welcome Back
          </Text>
          <Text fontSize={16} color="$textSecondary" textAlign="center">
            Continue your journey of words.
          </Text>
        </YStack>
      </Animated.View>

      <Animated.View entering={FadeInDown.duration(600).delay(200)}>
        <YStack gap="$1">
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
              value={email}
              onChangeText={setEmail}
            />
            <YStack position="absolute" left={16} pointerEvents="none">
              <Feather name="mail" size={20} color={iconColor} />
            </YStack>
          </YStack>
        </YStack>
      </Animated.View>

      <Animated.View entering={FadeInDown.duration(600).delay(300)}>
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
              value={password}
              onChangeText={setPassword}
              returnKeyType="go"
              onSubmitEditing={handleSignIn}
            />
            <YStack position="absolute" left={16} pointerEvents="none">
              <Feather name="lock" size={20} color={iconColor} />
            </YStack>
          </YStack>
          <Pressable
            onPress={() => {}}
            hitSlop={8}
            style={({ pressed }) => ({
              alignSelf: "flex-end",
              marginTop: 8,
              opacity: pressed ? 0.7 : 1,
            })}
          >
            <Text fontSize={14} fontWeight="600" color="$cta">
              Forgot password?
            </Text>
          </Pressable>
        </YStack>
      </Animated.View>

      {error && (
        <Animated.View entering={FadeInDown.duration(400)}>
          <Text color="#d9534f" fontSize={14} textAlign="center">
            {error}
          </Text>
        </Animated.View>
      )}

      <Animated.View entering={FadeInDown.duration(600).delay(400)}>
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
          opacity={loading ? 0.7 : 1}
          disabled={loading}
          onPress={handleSignIn}
        >
          {loading ? (
            <ActivityIndicator color="white" />
          ) : (
            <>
              <Text color="white" fontSize={18} fontWeight="700">
                Sign In
              </Text>
              <Feather name="arrow-right" size={20} color="white" />
            </>
          )}
        </Button>
      </Animated.View>

      <Animated.View entering={FadeInDown.duration(600).delay(500)}>
        <Pressable
          onPress={() => router.push("/create-account")}
          style={({ pressed }) => ({
            alignSelf: "center",
            marginTop: 16,
            opacity: pressed ? 0.7 : 1,
          })}
        >
          <Text fontSize={15} color="$textSecondary" textAlign="center">
            New to Capyfine?{" "}
            <Text color="$accent" fontWeight="700">
              Create an account
            </Text>
          </Text>
        </Pressable>
      </Animated.View>
    </AuthScreenShell>
  );
}
