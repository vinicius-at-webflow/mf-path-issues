const { ModuleFederationPlugin } = require("@module-federation/enhanced");

module.exports = {
  entry: () => ({}),
  output: {
    path: __dirname + "/dist",
    publicPath: "https://localhost:3000/",
  },
  mode: "production",
  plugins: [
    new ModuleFederationPlugin({
      name: "remote",
      filename: "remoteEntry.js",
      manifest: true,
      exposes: {
        "./test-1": "./src/path/test-1.js",
        "./test-2": "./src/path with spaces/test-2.js",
      },
    }),
  ],
};
