import CopyWebpackPlugin from "copy-webpack-plugin";
import Dotenv from "dotenv-webpack";
// import * as fs from "fs";
import path from "path";
// import { argv, env } from "process";
import { Configuration } from "webpack";

// type envObject = {
//   [key: string]: string,
// }

module.exports = () => {
  // const currentPath = path.join(__dirname);
  // const basePath = currentPath + "/.env";
  // const envPath = basePath + "." + process.env.ENVIRONMENT;
  // const finalPath = fs.existsSync(envPath) ? envPath : basePath;
  
  // const fileEnv = dotenv.config({ path: finalPath }).parsed;
  // const envKeys = Object.keys(fileEnv as envObject).reduce((prev: envObject, next: string) => {
  //   prev[`process.env.${next}`] = JSON.stringify((fileEnv as envObject)[next]);
  //   return prev;
  // }, {});

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
      new Dotenv({
        path: ".env"
      })
    ],
  };

  return config;
}
