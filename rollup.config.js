import typescript from 'rollup-plugin-typescript';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';
import resolve from 'rollup-plugin-node-resolve';
import json from 'rollup-plugin-json';
export default {
    input: './index.ts',
    output: {
        format: 'cjs',
        file: './dist-back/index.js',
    },
    plugins: [
        typescript({
            lib: ['ESNext'],
            target: 'es3',
        }),
        commonjs(),
        uglify(),
        resolve(),
        json(),
    ],
    external: [
        'express',
        'morgan',
        'body-parser',
        'path',
        'dotenv',
        'chalk',
        'mongoose',
        'jsonwebtoken',
        'bcrypt',
        '@hapi/joi',
        'lodash',
        'amphtml-validator',
    ],
};
