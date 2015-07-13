/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-07-09 22:55:21
 * @version $Id$
 */


module.exports = {
  entry:[
    './src/js/a1.js'
  ],
  output: {
    path: __dirname + '/assets/',
    publicPath: "/assets/",
    filename: 'bundle.js'
  },
  loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'react-hot!jsx-loader?harmony'
    }]
};


// var webpack = require('webpack');
// // var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

// module.exports = {
//     entry: {
//         a: './src/js/a1.js',
//         b: './src/js/a2.js'
//     },
//     output: {
//         path: __dirname,
//         filename: '[name].entry.js'
//     },
//     resolve: {
//         extensions: ['', '.js', '.jsx']
//     },
//     module: {
//         loaders: [{
//             test: /\.js$/,
//             loader: 'babel-loader'
//         }, {
//             test: /\.jsx$/,
//             loader: 'babel-loader!jsx-loader?harmony'
//         }]
//     },
//     plugins: [new webpack.optimize.MinChunkSizePlugin({
//     compress: {
//         warnings: false
//     }
// })]
// };
