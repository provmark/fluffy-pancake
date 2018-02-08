module.exports = ({ file, options, env }) => ({
    plugins: {
        'postcss-cssnext': {
            features: {
                customProperties: {
                    variables: require(`./config/themes/${options.theme}/theme.js`)
                }
            }
        }
    }
})