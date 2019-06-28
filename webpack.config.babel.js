import webpack from 'webpack';
import path from 'path';

export default {
    entry:{
        // fromEvent:'./operators/fromEvent/index.js',
        // combineLatest: './operators/combineLatest/index.js',
        // switch: './higher-order-observables/switch.js',
        // mergeAll: './higher-order-observables/mergeAll.js',
        // concatAll: './higher-order-observables/concatAll.js',
        // switchMap: './higher-order-observables/switchMap.js',
        // mergeMap: './higher-order-observables/mergeMap.js',
        // concatMap: './higher-order-observables/concatMap.js',
        window: './higher-order-observables/window.js',
    },
    output:{
        path: path.resolve(__dirname),
        publicPath:'/',
        filename:'bundle.js'
    },
    resolve:{
        extensions:['.js','.json']
    },
    module:{
        loaders:[{
            test: /\.js/,
            use:{
                loader:'babel-loader'
            }
        }]
    }
}
