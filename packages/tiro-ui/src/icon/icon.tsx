import { defineComponent } from 'vue'
import '../../style/icon.scss'

const props = {
  name: String,
  size: Number,
  color: String
}

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
