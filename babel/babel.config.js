// {
//     "presets": [
//         [
//             "@babel/preset-env",
//             {
//                 "modules": "commonjs",
//                 "useBuiltIns": "usage",
//                 "corejs": 3
//             }
//         ]
//     ]
// }
// .babel.js 配置详情
// 这是在 nodejs 配置中推荐的使用方式
const plugins = [
    ['@babel/plugin-transform-runtime', {
        corejs: 3
    }]
]

// 此处需要注意，当我们使用了 @babel/runtime-corejs2，原先的 corejs@3 便不需要使用了
const presets = [
    ['@babel/env']
]

export default { plugins, presets }