module.exports = {
  persets: [
    [
      '@babel/preset-env',
      {
        node: 'current',
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: ['@babel/plugin-syntax-dynamic-import'],
  cacheDirectory: true,
};
