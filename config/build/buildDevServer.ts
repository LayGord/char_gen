import { Configuration as DevServerConfifuration } from 'webpack-dev-server';
import { BuildEnv, BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions): DevServerConfifuration {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true,
        //hot: true,
        static: {
            directory: options.paths.static,
        },
        
    };
}