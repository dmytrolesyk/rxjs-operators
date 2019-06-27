import webpack from 'webpack';
import path from 'path';

export default {
    entry:{
        // fromEvent:'./operators/fromEvent/index.js',
        combineLatest: './operators/combineLatest/index.js'
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