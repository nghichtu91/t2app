module.exports = {
  assets: ["./static/fonts"],
  dependencies: {
    "react-native-vector-icons": {
      platforms: {
        android: null, // disable Android platform, other platforms will still autolink if provided
        ios: null,
      },
    },
  },
};
