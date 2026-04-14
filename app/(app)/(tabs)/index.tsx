import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ActivityIndicator, Keyboard, TextInput } from "react-native";
import Animated, { FadeInDown, Layout } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text, XStack, YStack, useTheme } from "tamagui";

import { WordCard, WordItem } from "@/components/library/word-card";

export default function AuthedHomeScreen() {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const iconColor = theme.accent.val as string;
  const textColor = theme.color.val as string;
  const placeholderColor = theme.textPlaceholder.val as string;
  const secondaryColor = theme.textSecondary.val as string;
  
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<WordItem | null>(null);

  const handleSearch = async () => {
    const trimmedQuery = query.trim().toLowerCase();
    if (!trimmedQuery) return;

    Keyboard.dismiss();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${trimmedQuery}`
      );
      
      const data = await response.json();

      if (!response.ok) {
        if (data.title && data.message) {
           throw new Error(data.message);
        }
        throw new Error("Failed to fetch definition.");
      }

      // Parse dictionary data safely
      const rawEntry = data[0];
      const meanings = rawEntry?.meanings || [];
      const firstMeaning = meanings[0];
      const definitions = firstMeaning?.definitions || [];
      const firstDefinition = definitions[0];
      
      let exampleText;
      for (const meaning of meanings) {
        for (const def of meaning.definitions || []) {
          if (def.example) {
            exampleText = `Example: "${def.example}"`;
            break;
          }
        }
        if (exampleText) break;
      }
      
      const phoneticWithAudio = rawEntry.phonetics?.find(
        (p: any) => p.audio && p.audio.length > 0
      );

      if (!firstDefinition) {
        throw new Error("No definition found for this word.");
      }

      const parsedItem: WordItem = {
        id: rawEntry.word || trimmedQuery,
        word: rawEntry.word || trimmedQuery,
        definition: firstDefinition.definition || "No definition available.",
        example: exampleText,
        audioUrl: phoneticWithAudio ? phoneticWithAudio.audio : undefined,
      };

      setResult(parsedItem);
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCollection = () => {
    // TODO: Connect this to actual global store or backend
    console.log("Saving word to collection:", result?.word);
  };

  return (
    <YStack
      flex={1}
      backgroundColor="$background"
      paddingTop={insets.top + 16}
      paddingBottom={insets.bottom + 24}
      paddingHorizontal={28}
    >
      <StatusBar style="dark" />
      <YStack 
        flex={1} 
        justifyContent={result || loading || error ? "flex-start" : "center"} 
        paddingTop={result || loading || error ? 30 : 0} 
        paddingBottom={96}
      >
        <YStack gap="$7">
          <Animated.View entering={FadeInDown.duration(600).delay(100)} layout={Layout.springify()}>
            <YStack gap="$2">
              <Text
                fontSize={30}
                fontWeight="800"
                color="$color"
                lineHeight={42}
                letterSpacing={-0.8}
              >
                Collect words you love
              </Text>
              <Text fontSize={17} color="$textSecondary" lineHeight={24}>
                Search for language that resonates with you and add it to your
                growing list.
              </Text>
            </YStack>
          </Animated.View>

          <Animated.View entering={FadeInDown.duration(600).delay(200)} layout={Layout.springify()}>
            <XStack
              alignItems="center"
              gap="$3"
              backgroundColor="$surface"
              borderRadius={25}
              paddingHorizontal="$5"
              height={60}
              borderWidth={1}
              borderColor={error ? "#d9534f" : "$inputBorder"}
              boxShadow="0px 4px 12px rgba(0, 0, 0, 0.1)"
            >
              <MaterialIcons name="search" size={24} color={iconColor} />
              <TextInput
                style={{ flex: 1, fontSize: 17, color: textColor }}
                placeholder="Search for a word..."
                placeholderTextColor={placeholderColor}
                returnKeyType="search"
                autoCapitalize="none"
                autoCorrect={false}
                value={query}
                onChangeText={setQuery}
                onSubmitEditing={handleSearch}
              />
              {query.length > 0 && (
                <MaterialIcons
                  name="close"
                  size={20}
                  color={secondaryColor}
                  onPress={() => {
                    setQuery("");
                    setResult(null);
                    setError(null);
                  }}
                  suppressHighlighting
                />
              )}
            </XStack>
          </Animated.View>

          {loading && (
             <Animated.View entering={FadeInDown.duration(400)} layout={Layout.springify()}>
                <YStack padding={40} alignItems="center">
                  <ActivityIndicator size="large" color={iconColor} />
                </YStack>
             </Animated.View>
          )}

          {error && !loading && (
             <Animated.View entering={FadeInDown.duration(400)} layout={Layout.springify()}>
                <YStack padding={20} alignItems="center" gap="$3">
                  <MaterialIcons name="error-outline" size={32} color="#d9534f" />
                  <Text color="$textSecondary" textAlign="center" fontSize={16} lineHeight={24}>
                    {error}
                  </Text>
                </YStack>
             </Animated.View>
          )}

          {result && !loading && !error && (
            <Animated.View entering={FadeInDown.duration(600)} layout={Layout.springify()}>
              <WordCard item={result} onAdd={handleAddToCollection} />
            </Animated.View>
          )}
        </YStack>
      </YStack>
    </YStack>
  );
}
