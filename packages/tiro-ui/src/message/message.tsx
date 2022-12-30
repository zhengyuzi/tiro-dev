import {
  defineComponent,
  onMounted,
  onUnmounted,
  PropType,
  Ref,
  ref,
  Transition,
  VNode
} from 'vue'
import { TiIcon } from '../icon'
import { MessageType } from './methods'

const props = {
  type: {
    type: String as PropType<MessageType>,
    default: ''
  },
  message: {
    type: String,
    default: ''
  },
  duration: {
    type: Number,
    default: 3000
  },
  clearable: {
    type: Boolean,
    default: false
  },
  icon: {
    type: Function as PropType<() => VNode>
  }
}

const Message = defineComponent({
  props,
  setup(props) {
    const visible = ref(false)
    const timer = ref<null | number>(null)
    const MessageRef: Ref<null | HTMLElement> = ref(null)

    onMounted(() => {
      visible.value = true
      timer.value = setTimeout(() => {
        visible.value = false
      }, props.duration)
    })

    const handleClick = () => {
      visible.value = false
      clearTimeout(timer.value as number)
    }

    onUnmounted(() => {
      clearTimeout(timer.value as number)
    })

    const types = {
      success: (
        <svg
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="5118"
          width="20"
          height="20"
        >
          <path
            d="M512 512m-448 0a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z"
            fill="#4CAF50"
            p-id="5119"
          ></path>
          <path
            d="M738.133333 311.466667L448 601.6l-119.466667-119.466667-59.733333 59.733334 179.2 179.2 349.866667-349.866667z"
            fill="#CCFF90"
            p-id="5120"
          ></path>
        </svg>
      ),
      info: (
        <svg
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3563"
          width="20"
          height="20"
        >
          <path
            d="M512 512m-448 0a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z"
            fill="#2196F3"
            p-id="3564"
          ></path>
          <path
            d="M469.333333 469.333333h85.333334v234.666667h-85.333334z"
            fill="#FFFFFF"
            p-id="3565"
          ></path>
          <path
            d="M512 352m-53.333333 0a53.333333 53.333333 0 1 0 106.666666 0 53.333333 53.333333 0 1 0-106.666666 0Z"
            fill="#FFFFFF"
            p-id="3566"
          ></path>
        </svg>
      ),
      warning: (
        <svg
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="5258"
          width="20"
          height="20"
        >
          <path
            d="M512 512m-448 0a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z"
            fill="#fd7338"
            p-id="5259"
            data-spm-anchor-id="a313x.7781069.0.i2"
            class="selected"
          ></path>
          <path
            d="M469.333333 469.333333h85.333334v234.666667h-85.333334z"
            fill="#FFFFFF"
            p-id="5260"
          ></path>
          <path
            d="M512 352m-53.333333 0a53.333333 53.333333 0 1 0 106.666666 0 53.333333 53.333333 0 1 0-106.666666 0Z"
            fill="#FFFFFF"
            p-id="5261"
          ></path>
        </svg>
      ),
      error: (
        <svg
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="13911"
          width="19"
          height="19"
        >
          <path
            d="M512 512m-448 0a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z"
            fill="#FA5151"
            p-id="13912"
          ></path>
          <path
            d="M557.3 512l113.1-113.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L512 466.7 398.9 353.6c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 512 353.6 625.1c-12.5 12.5-12.5 32.8 0 45.3 6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4L512 557.3l113.1 113.1c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4c12.5-12.5 12.5-32.8 0-45.3L557.3 512z"
            fill="#FFFFFF"
            p-id="13913"
          ></path>
        </svg>
      )
    }

    return () => (
      <Transition name="message-fade">
        {visible.value ? (
          <div
            class={[
              'ti-message',
              props.type ? `ti-message__${props.type}` : ''
            ]}
            ref={MessageRef}
          >
            {props.icon
              ? props.icon()
              : props.type
              ? types[props.type]
              : undefined}
            <span class="ti-message__inner">{props.message}</span>
            {props.clearable ? (
              <span onClick={handleClick}>
                <TiIcon class="clearable" name="ti-icon-close" size={16} />
              </span>
            ) : undefined}
          </div>
        ) : undefined}
      </Transition>
    )
  }
})

export default Message
