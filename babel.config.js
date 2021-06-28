module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@assets': './assets',
          '@api': './src/api',
          '@context': './src/context',
          '@components': './src/components',
          '@layout': './src/layout',
          '@navigations': './src/navigations',
          '@screens': './src/screens',
          // '@redux': './src/redux',
        },
      },
    ],
  ],
};