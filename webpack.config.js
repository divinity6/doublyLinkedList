const path = require( 'path' );
// terser-webpack-plugin 플러그인 추가
const TerserPlugin = require('terser-webpack-plugin');
module.exports = {

    mode : "production",
    entry : {
        "dll-ts" : path.resolve( __dirname , "./src/index.ts" ),
        "dll-ts.min" : path.resolve( __dirname , "./src/index.ts" )
    },
    output : {
        filename: '[name].js',
        publicPath: '/',
        path : path.resolve( __dirname , 'dist' ),
        library: [ 'dll-ts' ],
        libraryTarget: 'umd',
    },
    resolve: {
        extensions: [ '.js' , '.ts' ]
    },
    module : {
        rules : [
            {
                test : /\.ts$/,
                use : [
                    {
                        loader: "babel-loader",
                        options : {
                            cacheDirectory : true,
                        }
                    },
                    {
                        loader: "ts-loader",
                        options : {
                            configFile : 'tsconfig.json'
                        }
                    }
                ]
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                include: /\.min\.js$/
            }),
        ],
    },
}

