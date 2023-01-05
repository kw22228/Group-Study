module.exports = function (env) {
  const name = env.dev ? 'dev' : 'prod';
  return require(`./webpack/webpack.${name}.js`);
};
