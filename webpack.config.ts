import webpack from 'webpack';
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildOptions} from "./config/build/types/config";
import path from "path";

const options: BuildOptions = {
    mode: 'development',
    paths: {
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        output: path.resolve(__dirname, 'dist'),
        html: path.resolve(__dirname, 'public', 'index.html')
    },
    isDev: false
};

const isDev = options.mode === 'development';

options.isDev = isDev;

const config: webpack.Configuration = buildWebpackConfig(options);

export default config;