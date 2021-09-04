const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: "development",
  entry: './src/index.js',
  plugins: [
    new Dotenv()
  ],
  optimization: {
    nodeEnv: 'development',
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
};
