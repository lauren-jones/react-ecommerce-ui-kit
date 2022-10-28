import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import typescript from "rollup-plugin-typescript2";

export default [
  {
    input: "./src/index.ts",
    output: [
      {
        file: "dist/index.ts",
        format: "cjs",
        exports: "named",
        sourcemap: true,
        strict: false,
      },
    ],
    plugins: [
      postcss({
        plugins: [],
        minimize: true,
      }),
      babel({
        exclude: "node_modules**",
        presets: ["@babel/preset-react"],
      }),
      external(),
      resolve(),
      terser(),
    ],
  },
];
