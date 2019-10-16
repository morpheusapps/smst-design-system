module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.story\.tsx$/,
    loaders: [
      {
        loader: require.resolve('@storybook/source-loader')
      }
    ],
    exclude: [/node_modules/],
    enforce: 'pre'
  });

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader')
      },
      {
        loader: require.resolve('react-docgen-typescript-loader')
      }
    ]
  });

  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
