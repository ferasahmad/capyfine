import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import { Pressable } from "react-native";
import { Button, Text, XStack, YStack } from "tamagui";
import { myCollection } from "@/constants/mock-data";
import { WordCard, WordItem } from "./word-card";

type CollectionListProps = {
  collection: readonly WordItem[];
};

export function CollectionList({ collection }: CollectionListProps) {
  if (collection.length === 0) {
    return (
      <YStack
        alignItems="center"
        justifyContent="center"
        paddingTop={56}
        gap="$5"
      >
        <YStack
          width={72}
          height={72}
          borderRadius={9999}
          backgroundColor="$primary"
          alignItems="center"
          justifyContent="center"
          shadowColor="$color"
          shadowOpacity={0.02}
          shadowRadius={8}
          shadowOffset={{ width: 0, height: 2 }}
          elevation={1}
        >
          <MaterialIcons name="playlist-add" size={30} color="#7A7065" />
        </YStack>

        <YStack alignItems="center" gap="$2" maxWidth={320}>
          <Text
            fontSize={26}
            fontWeight="800"
            color="$color"
            textAlign="center"
            letterSpacing={-0.7}
          >
            Expand your lexicon
          </Text>
          <Text
            fontSize={16}
            lineHeight={24}
            color="$textSecondary"
            textAlign="center"
          >
            Your collection is a sanctuary for words that resonate with your
            soul.
          </Text>
        </YStack>

        <Button
          unstyled
          backgroundColor="$accent"
          pressStyle={{ backgroundColor: "$accentHover", scale: 0.98 }}
          borderRadius={9999}
          paddingVertical={18}
          paddingHorizontal={28}
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          gap="$3"
          minWidth={240}
          shadowColor="$accent"
          shadowOffset={{ width: 0, height: 4 }}
          shadowOpacity={0.15}
          shadowRadius={8}
          elevation={2}
        >
          <MaterialIcons name="add" size={20} color="white" />
          <Text color="white" fontSize={18} fontWeight="700">
            Add New Word
          </Text>
        </Button>
      </YStack>
    );
  }

  return (
    <YStack gap="$4">
      <XStack alignItems="center" justifyContent="space-between">
        <Text fontSize={20} fontWeight="800" color="$color" letterSpacing={-0.3}>
          My Collection
        </Text>
        <Pressable hitSlop={8} onPress={() => router.push("/all-words" as any)}>
          <Text fontSize={15} fontWeight="700" color="$accent">
            View all
          </Text>
        </Pressable>
      </XStack>

      <YStack gap="$3">
        {collection.map((item) => (
          <WordCard key={item.id} item={item} />
        ))}
      </YStack>
    </YStack>
  );
}
