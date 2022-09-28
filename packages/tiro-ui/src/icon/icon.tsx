import { defineComponent, h, toRefs } from 'vue'
import { ExtractPublicPropTypes } from '../_utils'
import style from './icons.cssr'

style.mount({
  id: 'ti-icon'
})

const props = {
  name: String,
  size: Number,
  color: String
}

export type IconProps = ExtractPublicPropTypes<typeof props>

const Button = defineComponent({
  props,
  setup(props) {
    const { name, size, color } = toRefs(props)

    return () =>
      h('i', {
        class: ['ti', `${name.value}`],
        style: { fontSize: `${size.value}px`, color: color.value }
      })
  }
})

export default Button
