module.exports = ({ file, options, env }) => ({
    plugins: {
        'postcss-cssnext': {
            features: {
                customProperties: {
                    variables: options.theme
                }
            }
        }
    }
})