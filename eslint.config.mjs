// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu({
  stylistic: {
    indent: 2, // 4, or 'tab'
    quotes: 'double', // or 'double'
    semi: true
  },
  typescript: true,
  vue: true,
  jsonc: false,
  yaml: false
})
