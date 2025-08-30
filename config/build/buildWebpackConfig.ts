import path from "path";
import { BuildOptions } from "./types/config";
import webpack from 'webpack';
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildPlugins } from "./buildPlugins";
import { buildDevServer } from "./buildDevServer";


export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const { paths, mode, isDev } = options;


    return {
        mode: mode,
        entry: paths.entry,
        output: {
            path: paths.output,
            filename: '[name].[contenthash:8].js',
            clean: true,
        },
        devtool: isDev? 'inline-source-map' : undefined,
        devServer: isDev? buildDevServer(options) : undefined,
        cache: false,
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        plugins: buildPlugins(options),
    };
}