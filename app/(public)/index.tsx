import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Pressable } from "react-native";
import Animated, {
  Easing,
  FadeIn,
  FadeInDown,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button, Circle, Text, YStack } from "tamagui";

function BouncingIcon() {
  const translateY = useSharedValue(0);
  useEffect(() => {
    translateY.value = withRepeat(
      withSequence(
        withTiming(-8, { duration: 1500, easing: Easing.inOut(Easing.ease) }),
        withTiming(0, { duration: 1500, easing: Easing.inOut(Easing.ease) })
      ),
      -1,
      true
    );
  }, [translateY]);
  const style = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));
  return (
    <Animated.View style={style}>
      <Circle
        size={80}
        backgroundColor="$mintCard"
        shadowColor="$accentHover"
        shadowOpacity={0.2}
        shadowRadius={16}
        shadowOffset={{ width: 0, height: 8 }}
        elevation={8}
      >
        <Feather name="feather" size={36} color="#667A58" />
      </Circle>
    </Animated.View>
  );
}
export default function WelcomeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <YStack
      flex={1}
      backgroundColor="$background"
      paddingTop={insets.top + 32}
      paddingBottom={insets.bottom + 24}
      paddingHorizontal={32}
      justifyContent="space-between"
    >
      <StatusBar style="dark" />
      <YStack alignItems="center" gap="$5" paddingTop="$4">
        <Animated.View entering={FadeInDown.duration(800).delay(100)}>
          <YStack alignItems="center" gap="$4">
            <BouncingIcon />
            <Text
              fontSize={18}
              fontWeight="700"
              color="$accent"
              letterSpacing={1.5}
              textTransform="uppercase"
            >
              Capyfine
            </Text>
          </YStack>
        </Animated.View>

        <Animated.View entering={FadeInDown.duration(800).delay(300)}>
          <YStack alignItems="center">
            <Text
              fontSize={40}
              fontWeight="800"
              color="$color"
              textAlign="center"
              lineHeight={48}
              letterSpacing={-1}
            >
              Grow your words,
            </Text>
            <Text
              fontSize={40}
              fontWeight="800"
              color="$color"
              textAlign="center"
              lineHeight={48}
              letterSpacing={-1}
              marginTop="$-1"
            >
              <Text
                fontStyle="italic"
                color="$accent"
                fontWeight="800"
                fontSize={40}
              >
                one day
              </Text>{" "}
              at a time
            </Text>
          </YStack>
        </Animated.View>

        <Animated.View entering={FadeIn.duration(1000).delay(500)}>
          <Text
            fontSize={17}
            lineHeight={26}
            color="$textSecondary"
            textAlign="center"
            marginTop="$2"
            maxWidth={320}
          >
            Transform vocabulary building into a restorative ritual. Find
            sanctuary in your daily growth.
          </Text>
        </Animated.View>
      </YStack>

      <Animated.View entering={FadeInDown.duration(800).delay(700)}>
        <YStack gap="$5" width="100%">
          <Button
            unstyled
            backgroundColor="$accent"
            pressStyle={{ backgroundColor: "$accentHover", scale: 0.98 }}
            borderRadius={9999}
            paddingVertical={18}
            paddingHorizontal={24}
            width="100%"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            shadowColor="$accent"
            shadowOffset={{ width: 0, height: 6 }}
            shadowOpacity={0.3}
            shadowRadius={16}
            elevation={4}
            onPress={() => router.push("/create-account")}
          >
            <Text color="white" fontSize={18} fontWeight="700">
              Start Journey
            </Text>
            <Feather name="arrow-right" size={20} color="white" />
          </Button>
          <Pressable
            onPress={() => router.push("/login")}
            style={({ pressed }) => ({
              alignSelf: "center",
              opacity: pressed ? 0.7 : 1,
            })}
          >
            <Text fontSize={16} color="$textSecondary" textAlign="center">
              Already have an account?{" "}
              <Text color="$accent" fontWeight="700">
                Log in
              </Text>
            </Text>
          </Pressable>
        </YStack>
      </Animated.View>
    </YStack>
  );
}
