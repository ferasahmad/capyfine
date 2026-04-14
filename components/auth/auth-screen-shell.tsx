import { ReactNode } from "react";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { YStack } from "tamagui";

type AuthScreenShellProps = {
  children: ReactNode;
};

export function AuthScreenShell({ children }: AuthScreenShellProps) {
  const insets = useSafeAreaInsets();

  return (
    <YStack flex={1} backgroundColor="$background">
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={insets.top}
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
            paddingHorizontal: 20,
            paddingTop: insets.top + 16,
            paddingBottom: insets.bottom + 16,
          }}
          showsVerticalScrollIndicator={false}
        >
          <YStack
            width="100%"
            maxWidth={440}
            alignSelf="center"
            gap="$4"
            padding={16}
          >
            {children}
          </YStack>
        </ScrollView>
      </KeyboardAvoidingView>
    </YStack>
  );
}
