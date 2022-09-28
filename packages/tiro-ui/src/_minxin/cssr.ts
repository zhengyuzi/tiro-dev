import CSSRender from 'css-render'
import bem from '@css-render/plugin-bem'

const cssr = CSSRender()

const namespace = 'ti'

const plugin = bem({
  blockPrefix: `.${namespace}-`,
  elementPrefix: '__',
  modifierPrefix: '__'
})

cssr.use(plugin)

const { c } = cssr
const { cB, cE, cM } = plugin

export { c, cB, cE, cM }
