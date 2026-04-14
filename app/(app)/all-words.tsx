import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Pressable, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text, XStack, YStack, useTheme } from "tamagui";

import { WordCard } from "@/components/library/word-card";
import { myCollection } from "@/constants/mock-data";

export default function AllWordsScreen() {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const iconColor = theme.color.val as string;
  
  return (
    <YStack flex={1} backgroundColor="$background">
      <StatusBar style="dark" />
      
      <YStack
        paddingTop={insets.top + 8}
        paddingBottom={16}
        paddingHorizontal={20}
        backgroundColor="$surface"
        borderBottomWidth={1}
        borderBottomColor="$border"
      >
        <XStack alignItems="center" gap="$4">
          <Pressable
            hitSlop={12}
            onPress={() => router.back()}
            style={({ pressed }) => ({ opacity: pressed ? 0.6 : 1 })}
          >
            <MaterialIcons name="arrow-back" size={26} color={iconColor} />
          </Pressable>
          <Text fontSize={22} fontWeight="800" color="$color" letterSpacing={-0.4}>
            All Words
          </Text>
        </XStack>
      </YStack>

      <ScrollView
        contentContainerStyle={{
          padding: 20,
          paddingBottom: insets.bottom + 32,
        }}
        showsVerticalScrollIndicator={false}
      >
        <YStack gap="$3">
          {myCollection.map((item) => (
            <WordCard key={item.id} item={item} />
          ))}
        </YStack>
      </ScrollView>
    </YStack>
  );
}
