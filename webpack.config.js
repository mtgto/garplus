module.exports = {
  entry: {
    main: './scripts/main.js',
    background: './scripts/background.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist/scripts'
  }
}
