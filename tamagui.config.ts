import { animations, fonts, media, mediaQueryDefaultActive, shorthands } from '@tamagui/config/v3';
import { createTamagui, createTokens } from 'tamagui';

/**
 * Raw palette — single place for hex values. Themes reference these via tokens.
 * Use this for non-Tamagui APIs (e.g. React Navigation).
 */
export const capyfinePalette = {
  lightBackground: '#FBF6EE',
  lightSurface: '#FFFCF8',
  lightPrimary: '#F4EDE2',
  lightSecondary: '#E7DCCB',
  lightTextPrimary: '#433C35',
  lightTextSecondary: '#7A7065',
  lightTextPlaceholder: '#B6AB9D',
  lightAccent: '#667A58',
  lightAccentHover: '#58694B',
  lightCta: '#C98942',
  lightCtaHover: '#B17839',
  lightBorder: '#EEE2D3',
  lightInputBorder: '#E9DFD2',
  lightError: '#C96F67',
  /** Soft mint surface (e.g. featured cards) */
  lightMintCard: '#EEF4E1',

  darkBackground: '#211E1A',
  darkSurface: '#2A2622',
  darkPrimary: '#393228',
  darkSecondary: '#4A4238',
  darkTextPrimary: '#F3EDE3',
  darkTextSecondary: '#C2B6A7',
  darkTextPlaceholder: '#8F8376',
  darkAccent: '#91A57D',
  darkAccentHover: '#81946E',
  darkCta: '#D49A57',
  darkCtaHover: '#B98549',
  darkBorder: '#453E35',
  darkInputBorder: '#534B41',
  darkError: '#D98982',
  /** Dark equivalent of light mint card */
  darkMintCard: '#2C3328',

  success: '#88A86E',
  warning: '#D7A25B',
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
  mintCard: tokens.color.lightMintCard,
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
  mintCard: tokens.color.darkMintCard,
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
