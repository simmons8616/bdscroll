/**
 * @file webpack基础配置文件
 * @author simmons8616(simmons0616@gmail.com)
 */

const path = require('path');
const fs = require('fs');

const {getBabelConfig} = require('./utils');
const babelConf = getBabelConfig();

module.exports = {
    context: path.join(__dirname, '..'),
    entry: {
        main: './examples/main.jsx'
    },
    resolve: {
        modules: [
            path.resolve(__dirname, '..', 'node_modules')
        ],
        alias: {
            // 路由页面入口
            examples: path.join(__dirname, '..', 'examples')
        },
        extensions: ['.js', '.jsx', '.css', '.scss']
    },
    output: {
        publicPath: '/bdscroll/dist/dev/',
        path: path.resolve(__dirname, '..', 'dist', 'dev'),
        filename: 'js/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: babelConf.presets,
                        plugins: babelConf.plugins
                    }
                },
                exclude: ['node_modules']
            },
            {
                test: /\.jsx$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: babelConf.presets.concat(['react']),
                        plugins: babelConf.plugins
                    }
                }
            }
        ]
    }
};