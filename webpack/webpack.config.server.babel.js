import { server } from 'universal-webpack/config'
import settings from './universal-webpack-settings'
import getBrandedWebPackConfiguration from './webpack.config.babel'

console.log('Theme Name: ', process.env.THEME_NAME);
export default server(getBrandedWebPackConfiguration(process.env.THEME_NAME), settings)
