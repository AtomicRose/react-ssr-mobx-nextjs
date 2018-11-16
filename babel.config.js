const presets = [
    [
        "@babel/env",
        {
            targets: {
                ie: "8",
                edge: "16",
                firefox: "44",
                chrome: "52",
                safari: "7",
            },
            useBuiltIns: "usage",
        },
    ],
    ["next/babel"]
];
const plugins = [
    ["@babel/plugin-proposal-decorators", {
        "legacy": true,
        // "decoratorsBeforeExport": true
    }],
    ["@babel/plugin-proposal-class-properties", {
        "loose": true
    }],
    ["import", {
        "libraryName": "antd",
        // if you want to use custom theme and set theme variables in less file. You should use style: true
        "style": true
         // if you just want use antd's default theme, you could just use its css style.
        // "style": 'css'
    }]
]
module.exports = { presets, plugins };