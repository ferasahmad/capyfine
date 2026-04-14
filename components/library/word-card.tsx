
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Pressable } from "react-native";
import { Button, Text, XStack, YStack } from "tamagui";

export type WordItem = {
  id: string;
  word: string;
  definition: string;
  example?: string;
  saved?: boolean;
  audioUrl?: string;
};

type WordCardProps = {
  item: WordItem;
  onAdd?: () => void;
};

export function WordCard({ item, onAdd }: WordCardProps) {
  return (
    <YStack
      backgroundColor="$primary"
      borderRadius={24}
      padding={20}
      gap="$2"
      borderWidth={1}
      borderColor="$border"
      boxShadow="0px 4px 12px rgba(0, 0, 0, 0.15)"
    >
      <XStack alignItems="center" justifyContent="space-between">
        <Text fontSize={18} fontWeight="800" color="$accent">
          {item.word}
        </Text>
        <Pressable
          hitSlop={12}
          onPress={() => {
            console.log("Play audio for", item.word);
          }}
          style={({ pressed }) => ({ opacity: pressed ? 0.6 : 1 })}
        >
          <MaterialIcons name="volume-up" size={24} color="#C98942" />
        </Pressable>
      </XStack>
      <YStack gap="$1" marginTop="$1">
        <Text fontSize={15} lineHeight={22} color="$textSecondary">
          {item.definition}
        </Text>
        {'example' in item && item.example && (
          <Text fontSize={14} lineHeight={20} color="$textSecondary" opacity={0.7} fontStyle="italic">
            {item.example}
          </Text>
        )}
      </YStack>

      {onAdd && (
        <Button
          marginTop="$3"
          size="$9"
          backgroundColor="$accent"
          pressStyle={{ backgroundColor: "$accentHover", scale: 0.98 }}
          icon={<MaterialIcons name="bookmark-add" size={20} color="white" />}
          onPress={onAdd}
          borderRadius={9999}
          boxShadow="0px 4px 12px rgba(0, 0, 0, 0.15)"
          justifyContent="center"
          alignItems="center"
          gap="$2"
        >
          <Text color="white" fontWeight="800" fontSize={16}>
            Add to Collection
          </Text>
        </Button>
      )}
    </YStack>
  );
}
