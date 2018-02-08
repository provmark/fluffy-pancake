import { client } from 'universal-webpack/config'
import settings from './universal-webpack-settings-light'
import configuration from './webpack.config.babel'

export default client(configuration[1], settings)