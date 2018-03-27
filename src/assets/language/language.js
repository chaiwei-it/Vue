import cn from './zh-cn'
import en from './en'

const language = {
  cn,
  en,
  use: (vue) => {
    vue.prototype.$lang = language[window.localStorage.getItem('LANG') || 'cn']
  }
}

export default language

