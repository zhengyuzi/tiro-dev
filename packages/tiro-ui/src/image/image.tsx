import {
  defineComponent,
  onMounted,
  PropType,
  Ref,
  ref,
  Teleport,
  Transition
} from 'vue'
import { ExtractPublicPropTypes } from '../_utils'
import style from './style/index.cssr'
import { TiIcon } from '../icon'

const props = {
  src: String,
  fit: String as PropType<'fill' | 'contain' | 'cover' | 'none' | 'scale-down'>,
  alt: String,
  referrerPolicy: String,
  preview: Boolean
}

export type ImageProps = ExtractPublicPropTypes<typeof props>

const Image = defineComponent({
  props,
  setup(props, { emit, slots }) {
    onMounted(() => {
      style.mount({
        id: 'ti-image'
      })
    })

    const isLoad = ref(true)
    const isPreview = ref(false)
    const toolbar = ref(null) as unknown as Ref<HTMLElement>
    const previewImg = ref(null) as unknown as Ref<HTMLImageElement>
    const rotate = ref(0)
    const scale = ref(1)

    const handleLoad = (e: Event) => {
      emit('load', e)
    }

    const handleError = (e: Event) => {
      isLoad.value = false
      emit('error', e)
    }

    const handleClick = () => {
      if (!props.preview) return
      isPreview.value = true
    }

    const handleToolbar = (e: Event) => {
      const target = e.target as never
      const index = [].indexOf.call(toolbar.value.children, target)
      Toolbar[index] && Toolbar[index]()
      previewImgTrans()
    }

    const zoomIn = () => {
      // 放大
      if (scale.value + 0.4 > 2) return
      scale.value += 0.4
    }

    const zoomOut = () => {
      // 缩小
      if (scale.value - 0.4 < 0) return
      scale.value -= 0.4
    }

    const restore = () => {
      // 还原
      if (scale.value !== 1) scale.value = 1
    }

    const rotateLeft = () => {
      // 逆时针旋转
      rotate.value -= 90
    }

    const rotateRight = () => {
      // 逆时针旋转
      rotate.value += 90
    }

    const closePreview = () => {
      // 关闭
      isPreview.value = false
      scale.value = 1
      rotate.value = 0
    }

    const previewImgTrans = () => {
      previewImg.value.style.transform = `scale(${scale.value}) rotate(${rotate.value}deg)`
    }

    const Toolbar = [
      zoomIn,
      zoomOut,
      restore,
      rotateLeft,
      rotateRight,
      closePreview
    ]

    return () => (
      <div class="ti-image" onClick={handleClick}>
        {isLoad.value ? (
          <img
            class={['ti-image__inner', props.preview ? 'is-preview' : '']}
            src={props.src}
            alt={props.alt}
            referrer-policy={props.referrerPolicy}
            style={{ objectFit: props.fit }}
            onLoad={handleLoad}
            onError={handleError}
          />
        ) : (
          <div class="ti-image__error">
            {slots.error ? slots.error() : '加载失败'}
          </div>
        )}
        {isPreview.value && (
          <Teleport to="body">
            <div class="ti-image__preview">
              <div class="ti-image__preview__mask"></div>
              <div class="ti-image__preview__inner">
                <img
                  class="ti-image__preview__img"
                  ref={previewImg}
                  src={props.src}
                  alt={props.alt}
                />
              </div>
              <div class="ti-image__preview__toolbar">
                <div
                  class="ti-image__preview__toolbar__inner"
                  ref={toolbar}
                  onClick={handleToolbar}
                >
                  <TiIcon name="ti-icon-zoom-in" />
                  <TiIcon name="ti-icon-zoom-out" />
                  <TiIcon name="ti-icon-restore" />
                  <TiIcon
                    name="ti-icon-refresh"
                    style={{ transform: 'rotateY(180deg)' }}
                  />
                  <TiIcon name="ti-icon-refresh" />
                  <TiIcon name="ti-icon-close" />
                </div>
              </div>
            </div>
          </Teleport>
        )}
      </div>
    )
  }
})

export default Image
