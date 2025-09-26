import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssextractPlugin from "mini-css-extract-plugin";
import path from "path";
import webpack from "webpack";
import { BuildOptions, BuildPaths } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";


export function buildPlugins({paths, isDev}: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            // devсервер ищет index.html, не находит и плакает. Для dev-сборки имя оставлю index.html
            filename: 'index.html',
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: isDev
        }),
    ]
}