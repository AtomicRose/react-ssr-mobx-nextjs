module.exports = {
    plugins: [
        require('postcss-preset-env')({
            browserslist: [
                '> 1%',
                'last 2 versions', 
                'not ie <= 8',
                'not dead'
            ]
        })
    ]
}