import development from './development'
import production from './production'

function config (mode = import.meta.env.MODE) {
  switch (mode) {
    case 'dev':
      return development
    case 'production':
      return production
    default:
      return development
  }
}

export default config
