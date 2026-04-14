import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Text, XStack, YStack } from "tamagui";
import { wordOfTheDay } from "@/constants/mock-data";

export function WordOfTheDayCard() {
  return (
    <YStack
      backgroundColor="$mintCard"
      borderRadius={28}
      padding={24}
      gap="$4"
      boxShadow="0px 4px 12px rgba(0, 0, 0, 0.15)"
    >
      <XStack alignItems="center" justifyContent="space-between">
        <Text
          color="$cta"
          fontSize={11}
          fontWeight="800"
          letterSpacing={1}
          backgroundColor="#F9E3C8"
          paddingHorizontal="$3"
          paddingVertical="$1"
          borderRadius={9999}
        >
          WORD OF THE DAY
        </Text>
        <MaterialIcons name="auto-awesome" size={18} color="#C98942" />
      </XStack>

      <YStack gap="$3">
        <Text
          fontSize={26}
          fontWeight="800"
          color="$accent"
          letterSpacing={-0.7}
        >
          {wordOfTheDay.word}
        </Text>
        <Text
          fontSize={17}
          lineHeight={27}
          color="$color"
          fontStyle="italic"
          fontWeight="700"
        >
          {wordOfTheDay.definition}
        </Text>
        <Text fontSize={15} lineHeight={22} color="$textSecondary">
          {wordOfTheDay.example}
        </Text>
      </YStack>
    </YStack>
  );
}
