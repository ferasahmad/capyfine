const { getDefaultConfig } = require("expo/metro-config");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// macOS can block Watchman on some paths (e.g. Desktop); use Node watcher instead.
config.resolver.useWatchman = false;

module.exports = config;
