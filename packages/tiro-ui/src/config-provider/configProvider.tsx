import { computed, defineComponent, PropType, provide } from 'vue'

const props = {
  theme: {
    type: String as PropType<'light' | 'dark'>,
    default: 'light'
  }
}

const configProvider = defineComponent({
  props,
  setup(props, { slots }) {
    provide(
      'theme',
      computed(() => props.theme)
    )

    return () => (
      <div
        id="ti-config-provider"
        class={`${props.theme}-theme`}
        style={{ colorScheme: props.theme }}
      >
        {slots.default && slots.default()}
      </div>
    )
  }
})

export default configProvider
