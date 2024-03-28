import webpack from 'webpack';
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildEnv, BuildOptions} from "./config/build/types/config";
import path from "path";

export default (env: BuildEnv) => {
    const PORT = env.port ||  3000;

    const options: BuildOptions = {
        mode: env.mode ||  'development',
        paths: {
            entry: path.resolve(__dirname, 'src', 'index.ts'),
            output: path.resolve(__dirname, 'dist'),
            html: path.resolve(__dirname, 'public', 'index.html')
        },
        isDev: false,
        port: PORT
    };

    const isDev = options.mode === 'development';

    options.isDev = isDev;

    const config: webpack.Configuration = buildWebpackConfig(options);

    return config;
}