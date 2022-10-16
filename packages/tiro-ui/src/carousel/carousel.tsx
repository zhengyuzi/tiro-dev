import {
  defineComponent,
  onBeforeUnmount,
  onMounted,
  Ref,
  ref,
  Slot,
  VNode
} from 'vue'
import style from './style/index.cssr'
import { TiIcon } from '../icon'

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
  }
}

const Carousel = defineComponent({
  components: {
    TiIcon
  },
  props,
  setup(props, { slots }) {
    const carouselInner = ref(null) as unknown as Ref<HTMLElement>
    const carouselDots = ref(null) as unknown as Ref<HTMLElement>
    const carouselItems = ref((slots.default as Slot)()[0].children as VNode[])
    const Index = ref(props.currentIndex)
    const isToggle = ref(false)
    let AutoPlay: number | undefined = undefined
    const duration = 300

    onMounted(() => {
      style.mount({
        id: 'ti-carousel'
      })
      handleToggle()
      bindEvent()
      setAutoPlay()
    })

    const handleToggle = (isDuration = true) => {
      if (isToggle.value || !carouselInner.value) return

      const carouselW = carouselInner.value?.offsetWidth || 0

      if (isDuration) setDuration()

      setTranslate(carouselW)

      setTimeout(() => {
        if (isDuration) clearDuration()

        if (Index.value === carouselItems.value.length - 1 || Index.value === 0)
          immediateToggle()
      }, duration)
    }

    const immediateToggle = () => handleToggle(false)

    const setTranslate = (x: number) => {
      carouselInner.value.style.transform = `translateX(-${
        x * (Index.value + 1)
      }px)`

      if (Index.value === -1) {
        Index.value = carouselItems.value.length - 1
      } else if (Index.value === carouselItems.value.length) {
        Index.value = 0
      }
    }

    const setDuration = () => {
      carouselInner.value.style.transitionDuration = `${duration}ms`
      isToggle.value = true
    }

    const clearDuration = () => {
      carouselInner.value.style.transitionDuration = '0ms'
      isToggle.value = false
    }

    const bindEvent = () => {
      const isFull = Boolean(carouselInner.value.parentElement?.style.width)
      if (isFull) window.addEventListener('resize', immediateToggle, false)
    }

    const setAutoPlay = () => {
      if (!props.autoplay) return
      clearInterval(AutoPlay)
      AutoPlay = setInterval(setNext, props.interval)
    }

    const handleDot = (e: Event) => {
      e = e || window.event
      const target = e.target as never
      const index = [].indexOf.call(carouselDots.value?.children, target)
      if (index < 0) return
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
      handleToggle()
      setAutoPlay()
    }

    const setLast = () => {
      if (isToggle.value) return
      Index.value -= 1
      handleToggle()
    }

    const setNext = () => {
      if (isToggle.value) return
      Index.value += 1
      handleToggle()
    }

    const handleLast = () => {
      setLast()
      setAutoPlay()
    }

    const handleNext = () => {
      setNext()
      setAutoPlay()
    }

    onBeforeUnmount(() => {
      window.removeEventListener('resize', immediateToggle, false)
      clearInterval(AutoPlay)
    })

    return () => (
      <div class="ti-carousel">
        <div class="ti-carousel__inner" ref={carouselInner}>
          {carouselItems.value[carouselItems.value.length - 1]}
          {slots.default && slots.default()}
          {carouselItems.value[0]}
        </div>
        <div class="ti-carousel__arrows">
          <div class="ti-carousel__arrow" onClick={handleLast}>
            <ti-icon name="ti-icon-arrow-left" />
          </div>
          <div class="ti-carousel__arrow" onClick={handleNext}>
            <ti-icon name="ti-icon-arrow-right" />
          </div>
        </div>
        <div class="ti-carousel__dots" ref={carouselDots} onClick={handleDot}>
          {carouselItems.value.map((_, index) => {
            return (
              <div
                class={[
                  'ti-carousel__dot',
                  Index.value === index ? 'is-active' : ''
                ]}
                key={index}
              ></div>
            )
          })}
        </div>
      </div>
    )
  }
})

export default Carousel
