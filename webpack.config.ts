import CopyWebpackPlugin from "copy-webpack-plugin";
import dotenv from "dotenv";
import path from "path";
import { Configuration, DefinePlugin } from "webpack";

type envObject = {
  [key: string]: string,
}

const env = dotenv.config().parsed;
const envKeys = Object.keys(env as envObject).reduce((prev: envObject, next: string) => {
  prev[`process.env.${next}`] = JSON.stringify((env as envObject)[next]);
  return prev;
}, {});

const config: Configuration = {
  entry: "./src/main.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      { 
        test: /\.(png|jp(e*)g|svg|gif)$/, 
        type: "asset/resource",
      }
    ],
  },
  mode:
    (process.env.NODE_ENV as "production" | "development" | undefined) ??
    "development",
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: "public" }],
    }),
    new DefinePlugin(envKeys)
  ],
};

export default config;
