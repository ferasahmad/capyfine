import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { YStack } from "tamagui";

import { CollectionList } from "@/components/library/collection-list";
import { WordOfTheDayCard } from "@/components/library/word-of-the-day-card";
import { myCollection } from "@/constants/mock-data";

const useEmptyCollection = false;

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();
  const collection = useEmptyCollection ? [] : myCollection;

  return (
    <YStack flex={1} backgroundColor="$background">
      <StatusBar style="dark" />
      <ScrollView
        contentContainerStyle={{
          paddingTop: 20,
          paddingBottom: insets.bottom + 32,
          paddingHorizontal: 20,
        }}
        showsVerticalScrollIndicator={false}
      >
        <YStack gap="$5">
          <Animated.View entering={FadeInDown.duration(600).delay(100)}>
            <WordOfTheDayCard />
          </Animated.View>

          <Animated.View entering={FadeInDown.duration(600).delay(200)}>
            <CollectionList collection={collection} />
          </Animated.View>
        </YStack>
      </ScrollView>
    </YStack>
  );
}
