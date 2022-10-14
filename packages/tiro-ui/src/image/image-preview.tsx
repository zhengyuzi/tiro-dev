import { defineComponent, onMounted, Ref, ref } from 'vue'
import { TiIcon } from '../icon'
import { dragImg } from '../_directives'
import { ExtractPublicPropTypes } from '../_utils'

const props = {
  zIndex: Number,
  src: String,
  alt: String,
  closeOnPressEscape: Boolean
}

export type ImagePreviewProps = ExtractPublicPropTypes<typeof props>

const ImagePreview = defineComponent({
  directives: {
    dragImg
  },
  props,
  setup(props, { emit }) {
    const toolbar = ref(null) as unknown as Ref<HTMLElement>
    const previewImg = ref(null) as unknown as Ref<HTMLImageElement>
    const rotate = ref(0)
    const scale = ref(1)

    // 放大基数
    const scaleBase = 0.4
    // 旋转基数
    const rotateBase = 90

    onMounted(() => {
      addEvent()
    })

    const addEvent = () => {
      document.body.style.overflow = 'hidden'
      Event.map((item) => {
        if (!item.open) return
        document.addEventListener(
          item.type as keyof DocumentEventMap,
          item.listener as EventListenerOrEventListenerObject,
          false
        )
      })
    }

    const removeEvent = () => {
      Event.map((item) =>
        document.removeEventListener(
          item.type as keyof DocumentEventMap,
          item.listener as EventListenerOrEventListenerObject,
          false
        )
      )
    }

    const handleToolbar = (event: Event) => {
      const e = event || window.event
      const target = e.target as never
      const index = [].indexOf.call(toolbar.value.children, target)
      if (Toolbar[index]) {
        Toolbar[index].event()
        previewImgTrans()
      }
    }

    const handleMousewheel = (event: Event) => {
      const e = (event || window.event) as WheelEvent
      const isUp = e.deltaY ? e.deltaY < 0 : e.detail > 0
      isUp ? zoomIn() : zoomOut()
      previewImgTrans()
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      const e = event || window.event
      if (e.key === 'Escape') {
        closePreview()
      }
    }

    const zoomIn = () => {
      // 放大
      if (scale.value + scaleBase < 2) scale.value += scaleBase
    }

    const zoomOut = () => {
      // 缩小
      if (scale.value - scaleBase > 0) scale.value -= scaleBase
    }

    const restore = () => {
      // 还原
      if (scale.value !== 1) scale.value = 1
    }

    const rotateLeft = () => {
      // 逆时针旋转
      rotate.value -= rotateBase
    }

    const rotateRight = () => {
      // 逆时针旋转
      rotate.value += rotateBase
    }

    const closePreview = () => {
      // 关闭
      emit('closePreview')
      document.body.style.overflow = ''
      removeEvent()
      setTimeout(() => {
        scale.value = 1
        rotate.value = 0
      }, 200)
    }

    const previewImgTrans = () => {
      previewImg.value.style.transform = `translateX(0px) translateY(0px) scale(${scale.value}) rotate(${rotate.value}deg)`
    }

    const Event = [
      {
        type: 'keydown',
        listener: handleKeyDown,
        open: props.closeOnPressEscape
      },
      {
        type: 'mousewheel',
        listener: handleMousewheel,
        open: true
      },
      {
        type: 'DOMMouseScroll',
        listener: handleMousewheel,
        open: true
      }
    ]

    const Toolbar = [
      {
        icon: 'ti-icon-zoom-in',
        event: zoomIn
      },
      {
        icon: 'ti-icon-zoom-out',
        event: zoomOut
      },
      {
        icon: 'ti-icon-restore',
        event: restore
      },
      {
        icon: 'ti-icon-refresh',
        event: rotateLeft,
        style: { transform: 'rotateY(180deg)' }
      },
      {
        icon: 'ti-icon-refresh',
        event: rotateRight
      },
      {
        icon: 'ti-icon-close',
        event: closePreview
      }
    ]

    return () => (
      <div class="ti-image__preview" style={{ zIndex: props.zIndex }}>
        <div class="ti-image__preview__mask"></div>
        <div class="ti-image__preview__inner">
          <img
            v-drag-img
            class="ti-image__preview__img"
            src={props.src}
            alt={props.alt}
            ref={previewImg}
            style={{
              transform: 'rotate(0deg) translateX(0px) translateY(0px) scale(1)'
            }}
          />
        </div>
        <div class="ti-image__preview__toolbar">
          <div
            class="ti-image__preview__toolbar__inner"
            ref={toolbar}
            onClick={handleToolbar}
          >
            {Toolbar.map((item) => {
              return <TiIcon name={item.icon} style={item.style} />
            })}
          </div>
        </div>
      </div>
    )
  }
})

export default ImagePreview
