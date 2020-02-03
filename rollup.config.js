import { terser } from "rollup-plugin-terser";
import obfuscatorPlugin from 'rollup-plugin-javascript-obfuscator';

export default {
  input: "src/index.js",
  output: {
      format: "cjs",
      file: "dist/index.js"
  },
  plugins: [
    //terser(),
    obfuscatorPlugin({
      compact: true,
      renameGlobals: true,
      stringArrayEncoding: true
    })
  ]
};