import {
  defineComponent,
  onUnmounted,
  onMounted,
  PropType,
  Ref,
  ref,
  Slot,
  VNode,
  computed,
  CSSProperties
} from 'vue'
import style from './style/index.cssr'
import { TiIcon } from '../icon'
import { ExtractPublicPropTypes } from '../_utils'
import { draggable } from './draggable'
import {
  useResizeObserver,
  useEventListener,
  promiseTimeout
} from '@vueuse/core'

const props = {
  autoplay: {
    type: Boolean,
    default: false
  },
  interval: {
    type: Number,
    default: 3000
  },
  currentIndex: {
    type: Number,
    default: 0
  },
  showDots: {
    type: Boolean,
    default: true
  },
  direction: {
    type: String as PropType<'horizontal' | 'vertical'>,
    default: 'horizontal'
  },
  showArrow: {
    type: Boolean,
    default: false
  },
  dotType: {
    type: String as PropType<'dot' | 'line'>,
    default: 'dot'
  },
  mousewheel: {
    type: Boolean,
    default: false
  },
  draggable: {
    type: Boolean,
    default: false
  },
  trigger: {
    type: String as PropType<'click' | 'hover'>,
    default: 'click'
  },
  dotPlacement: {
    type: String as PropType<'top' | 'bottom' | 'left' | 'right'>,
    default: 'bottom'
  },
  effect: {
    type: String as PropType<'slide' | 'fade'>,
    default: 'slide'
  }
}

export type CarouselProps = ExtractPublicPropTypes<typeof props>

const Carousel = defineComponent({
  components: {
    TiIcon
  },
  directives: {
    draggable
  },
  props,
  setup(props, { slots, expose }) {
    const carouselInner = ref(null) as unknown as Ref<HTMLElement>
    const carouselItems = ref((slots.default as Slot)()[0].children as VNode[])
    const Index = ref(props.currentIndex)
    const isToggle = ref(false) // 是否在切换状态中
    let AutoPlay: number | undefined = undefined
    const duration = ref(0)
    const Events: Function[] = []

    onMounted(() => {
      style.mount({
        id: 'ti-carousel'
      })
      bindEvent()
      setAutoPlay()
    })

    const carouselInnerStyle = computed<CSSProperties>(() => {
      const transform = props.effect === 'slide' ? translate() : undefined
      const transitionDuration = `${duration.value}ms`
      return {
        transform,
        transitionDuration
      }
    })

    const inDuration = async () => {
      setDuration()
      await promiseTimeout(duration.value)
      clearDuration()
      handleBoundary()
    }

    const handleBoundary = async () => {
      if (Index.value >= 0 && Index.value < carouselItems.value.length) return
      Index.value = isBoundary(Index.value)
    }

    const isBoundary = (index: number) => {
      if (index === -1) {
        return carouselItems.value.length - 1
      } else if (index === carouselItems.value.length) {
        return 0
      } else {
        return index
      }
    }

    // 横向移动
    const handleHorizontal = () => {
      const x = carouselInner.value?.offsetWidth || 0
      return `translateX(-${x * (Index.value + 1)}px)`
    }

    // 竖向移动
    const handleVertical = () => {
      const y = carouselInner.value?.offsetHeight || 0
      return `translateY(-${y * (Index.value + 1)}px)`
    }

    const translate =
      props.direction === 'horizontal' ? handleHorizontal : handleVertical

    const handleTranslate = () => {
      carouselInner.value.style.transform = translate()
    }

    const setDuration = () => {
      duration.value = 300
      isToggle.value = true
    }

    const clearDuration = () => {
      duration.value = 0
      isToggle.value = false
    }

    const bindEvent = () => {
      useResizeObserver(document.body, handleTranslate)
      if (props.mousewheel) {
        // 监听鼠标滚轮
        ;['mousewheel', 'DOMMouseScroll'].map((item) => {
          const event = useEventListener(
            carouselInner.value,
            item,
            handleMousewheel
          )
          Events.push(event)
        })
      }
    }

    const handleMousewheel = (event: Event) => {
      const e = (event || window.event) as WheelEvent
      const isUp = e.deltaY ? e.deltaY < 0 : e.detail > 0
      isUp ? prev() : next()
    }

    const setAutoPlay = () => {
      if (!props.autoplay) return
      clearInterval(AutoPlay)
      AutoPlay = setInterval(() => change(1), props.interval)
    }

    const handleDot = (index: number) => {
      props.effect === 'slide' ? setBoundary(index) : (Index.value = index)
      inDuration()
      setAutoPlay()
    }

    const setBoundary = (index: number) => {
      if (
        index < 0 ||
        index === Index.value ||
        index >= carouselItems.value.length
      )
        return
      if (Index.value === 0 && index === carouselItems.value.length - 1) {
        Index.value = -1
      } else if (
        index === 0 &&
        Index.value === carouselItems.value.length - 1
      ) {
        Index.value = carouselItems.value.length
      } else {
        Index.value = index
      }
    }

    const change = (index: number) => {
      if (isToggle.value) return
      Index.value += index
      inDuration()
    }

    const prev = () => {
      change(-1)
      setAutoPlay()
    }

    const next = () => {
      change(1)
      setAutoPlay()
    }

    onUnmounted(() => {
      clearInterval(AutoPlay)
      if (props.mousewheel) Events.map((event) => event())
    })

    expose({
      prev,
      next
    })

    return () => (
      <div
        class={[
          'ti-carousel',
          `is-${props.direction}`,
          props.showArrow ? 'is-show-arrow' : ''
        ]}
      >
        <div
          class="ti-carousel__inner"
          ref={carouselInner}
          style={carouselInnerStyle.value}
          v-draggable={{
            isDraggable: props.draggable,
            direction: props.direction,
            prev,
            next
          }}
        >
          {carouselItems.value[carouselItems.value.length - 1]}
          {slots.default && slots.default()}
          {carouselItems.value[0]}
        </div>
        <div class="ti-carousel__arrows">
          <div class="ti-carousel__arrow" onClick={prev}>
            <ti-icon name="ti-icon-arrow-left" />
          </div>
          <div class="ti-carousel__arrow" onClick={next}>
            <ti-icon name="ti-icon-arrow-right" />
          </div>
        </div>
        <div
          class={[
            'ti-carousel__dots',
            `is-${props.dotType}`,
            `is-${props.dotPlacement}`
          ]}
        >
          {props.showDots &&
            carouselItems.value.map((_, index) => {
              return (
                <div
                  class={[
                    'ti-carousel__dot',
                    isBoundary(Index.value) === index ? 'is-active' : ''
                  ]}
                  key={index}
                  onClick={
                    props.trigger === 'click'
                      ? () => handleDot(index)
                      : undefined
                  }
                  onMouseover={
                    props.trigger === 'hover'
                      ? () => handleDot(index)
                      : undefined
                  }
                ></div>
              )
            })}
        </div>
      </div>
    )
  }
})

export default Carousel
