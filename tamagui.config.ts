import { animations, fonts, media, mediaQueryDefaultActive, shorthands } from '@tamagui/config/v3';
import { createTamagui, createTokens } from 'tamagui';

/**
 * Raw palette — single place for hex values. Themes reference these via tokens.
 * Use this for non-Tamagui APIs (e.g. React Navigation).
 */
export const capyfinePalette = {
  lightBackground: '#F9F7F3',
  lightSurface: '#FFFFFF',
  lightPrimary: '#E8DCCB',
  lightSecondary: '#C7B8A3',
  lightTextPrimary: '#2E2E2E',
  lightTextSecondary: '#6F6F6F',
  lightTextPlaceholder: '#A8A29E',
  lightAccent: '#6D8B74',
  lightAccentHover: '#5E7865',
  lightCta: '#F2A65A',
  lightCtaHover: '#D98C3F',
  lightBorder: '#E5E0D8',
  lightInputBorder: '#D6D0C7',
  lightError: '#D96C6C',

  darkBackground: '#1F1F1D',
  darkSurface: '#2A2A28',
  darkPrimary: '#BFB2A3',
  darkSecondary: '#8E857A',
  darkTextPrimary: '#ECEAE6',
  darkTextSecondary: '#B5B0A8',
  darkTextPlaceholder: '#7A746B',
  darkAccent: '#7FAF8A',
  darkAccentHover: '#6F9E7A',
  darkCta: '#E59A52',
  darkCtaHover: '#C97F3C',
  darkBorder: '#3A3936',
  darkInputBorder: '#44423E',
  darkError: '#E07A7A',

  success: '#7FB77E',
  warning: '#E9B44C',
} as const;

const tokens = createTokens({
  color: { ...capyfinePalette },
  space: {
    0: 0,
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    5: 20,
    6: 24,
    7: 32,
    8: 40,
    9: 48,
    10: 64,
    true: 16,
  },
  size: {
    0: 0,
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    5: 20,
    6: 24,
    7: 32,
    8: 40,
    9: 48,
    10: 64,
    true: 16,
  },
  radius: {
    0: 0,
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    true: 8,
  },
  zIndex: {
    0: 0,
    1: 100,
    2: 200,
    3: 300,
    4: 400,
    5: 500,
  },
});

const lightTheme = {
  background: tokens.color.lightBackground,
  surface: tokens.color.lightSurface,
  primary: tokens.color.lightPrimary,
  secondary: tokens.color.lightSecondary,
  /** Default text (Tamagui `Text` default) */
  color: tokens.color.lightTextPrimary,
  textPrimary: tokens.color.lightTextPrimary,
  textSecondary: tokens.color.lightTextSecondary,
  textPlaceholder: tokens.color.lightTextPlaceholder,
  accent: tokens.color.lightAccent,
  accentHover: tokens.color.lightAccentHover,
  cta: tokens.color.lightCta,
  ctaHover: tokens.color.lightCtaHover,
  border: tokens.color.lightBorder,
  borderColor: tokens.color.lightBorder,
  inputBackground: tokens.color.lightSurface,
  inputBorder: tokens.color.lightInputBorder,
  success: tokens.color.success,
  error: tokens.color.lightError,
  warning: tokens.color.warning,
} as const;

const darkTheme = {
  background: tokens.color.darkBackground,
  surface: tokens.color.darkSurface,
  primary: tokens.color.darkPrimary,
  secondary: tokens.color.darkSecondary,
  color: tokens.color.darkTextPrimary,
  textPrimary: tokens.color.darkTextPrimary,
  textSecondary: tokens.color.darkTextSecondary,
  textPlaceholder: tokens.color.darkTextPlaceholder,
  accent: tokens.color.darkAccent,
  accentHover: tokens.color.darkAccentHover,
  cta: tokens.color.darkCta,
  ctaHover: tokens.color.darkCtaHover,
  border: tokens.color.darkBorder,
  borderColor: tokens.color.darkBorder,
  inputBackground: tokens.color.darkSurface,
  inputBorder: tokens.color.darkInputBorder,
  success: tokens.color.success,
  error: tokens.color.darkError,
  warning: tokens.color.warning,
} as const;

export const themes = {
  light: lightTheme,
  dark: darkTheme,
} as const;

export const config = createTamagui({
  tokens,
  themes,
  fonts,
  animations,
  media,
  shorthands,
  settings: {
    mediaQueryDefaultActive,
    defaultFont: 'body',
    fastSchemeChange: true,
    shouldAddPrefersColorThemes: true,
  },
});

type AppConfig = typeof config;

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default config;
