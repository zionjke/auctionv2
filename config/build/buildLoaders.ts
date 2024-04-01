import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const {isDev} = options;

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    }

    const cssLoader =  {
            test: /\.s[ac]ss$/i,
            use: [
                isDev ? "style-loader" : MiniCssExtractPlugin.loader,
                {
                    loader: "css-loader",
                    options: {
                        modules: {
                            auto: (resPath: string) => resPath.includes('.module.'), // задаем условие, что если это не цсс модуль то он будет обрабатыватся как обычный цсс в сборке.
                            localIdentName: isDev // название файлов в сборке.
                                ? '[path][name]__[local]--[hash:base64:5]'
                                : '[hash:base64:8]',
                        },
                    }
                },
                "sass-loader",
            ],
        }

    return [
        typescriptLoader,
        cssLoader
    ];
}