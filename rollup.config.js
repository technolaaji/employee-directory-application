import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from "rollup-plugin-uglify";
import resolve from 'rollup-plugin-node-resolve';
import json from 'rollup-plugin-json';
export default {
    input: './backend/index.ts',
    output: {
        format: 'cjs',
        file: './dist-back/index.js'
      },
    plugins: [
        typescript(),
        commonjs(),
        uglify(),
        resolve(),
        json()
    ],
    external: [ 'express', 'morgan', 'body-parser', 'path', 'dotenv', 'chalk', 'mongoose', 'jsonwebtoken', 'bcrypt', '@hapi/joi' ]
}