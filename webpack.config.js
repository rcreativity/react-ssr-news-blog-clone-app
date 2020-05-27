module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
        "exclude": /node_modules/,
      },
    ],
  },
};