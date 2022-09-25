import { defineComponent } from 'vue'
import { ExtractPublicPropTypes } from '../_utils'
import '../../style/icon.scss'

const props = {
  name: String,
  size: Number,
  color: String
}

export type IconProps = ExtractPublicPropTypes<typeof props>

const Button = defineComponent({
  props,
  setup(props) {
    const { name, size, color } = props
    const iconStyle = {
      fontSize: `${size}px`,
      color
    }
    return () => <i class={['ti', `${name}`]} style={iconStyle}></i>
  }
})

export default Button
