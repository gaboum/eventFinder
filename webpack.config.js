const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');

    return {
        entry: ['babel-polyfill', './src/app.js'],
        output: {
            path: path.resolve(__dirname, './public/scripts'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                use: CSSExtract.extract({
                    use : [
                        {
                            loader : 'css-loader',
                            options : {
                                sourceMap : true // source map for css in development
                            }
                        },
                        {
                            loader : 'sass-loader',
                            options : {
                                sourceMap : true
                            }
                        },
                        {
                            loader: "jshint-loader"
                        }
                    ]
                })

            },{
                test: /\.(gif|png|jpe?g|svg|webp)$/i,
                loaders: [
                    'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack-loader'
                ]
            }
            ]
        },
        plugins : [
            CSSExtract,
        ],
        devtool: isProduction ? 'source-map' : 'cheap-eval-source-map', // source map for locating a bug in source files, not in the bundle
        devServer: {
            contentBase: path.join(__dirname, "public"),
            publicPath: "/scripts/",
            historyApiFallback: true // this line is for client-side routing
        },
    }
}