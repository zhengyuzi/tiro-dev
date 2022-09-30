import { defineComponent, h, onMounted, toRefs } from 'vue'
import { ExtractPublicPropTypes } from '../_utils'
import style from './icons.cssr'

const props = {
  name: String,
  size: Number,
  color: String
}

export type IconProps = ExtractPublicPropTypes<typeof props>

const Button = defineComponent({
  props,
  setup(props) {
    onMounted(() => {
      style.mount({
        id: 'ti-icon'
      })
    })

    const { name, size, color } = toRefs(props)

    return () =>
      h('i', {
        class: ['ti', `${name.value}`],
        style: { fontSize: `${size.value}px`, color: color.value }
      })
  }
})

export default Button
