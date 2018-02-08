import { client } from 'universal-webpack/config'
import settings from './universal-webpack-settings-dark'
import configuration from './webpack.config.babel'

export default client(configuration[0], settings)
