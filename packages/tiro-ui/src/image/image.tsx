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
import { lazy } from '../_directives'
import ImagePreview from './image-preview'

const props = {
  src: String,
  fit: String as PropType<'fill' | 'contain' | 'cover' | 'none' | 'scale-down'>,
  alt: String,
  preview: Boolean,
  closeOnPressEscape: {
    type: Boolean,
    default: true
  },
  zIndex: Number,
  lazy: Boolean
}

export type ImageProps = ExtractPublicPropTypes<typeof props>

const Image = defineComponent({
  directives: {
    lazy
  },
  components: {
    ImagePreview
  },
  props,
  setup(props, { emit, slots }) {
    const imageSrc: Ref<string | undefined> = ref()
    const isError = ref(false)
    const isLoad = ref(false)
    const isPreview = ref(false)
    const image = ref(null) as unknown as Ref<HTMLImageElement>

    onMounted(() => {
      style.mount({
        id: 'ti-image'
      })
      if (!props.lazy) {
        loadImage()
      }
    })

    const loadImage = () => {
      imageSrc.value = props.src
    }

    const handleLoad = (e?: Event) => {
      isLoad.value = true
      emit('load', e)
    }

    const handleError = (e: Event) => {
      isError.value = true
      emit('error', e)
    }

    const handleClick = () => {
      if (!props.preview) return
      isPreview.value = true
      emit('preview-open')
    }

    const handlePreview = () => {
      isPreview.value = false
      emit('preview-close')
    }

    return () => (
      <div class="ti-image">
        <img
          ref={image}
          v-show={!isError.value}
          class={['ti-image__inner', props.preview ? 'is-preview' : '']}
          alt={props.alt}
          src={imageSrc.value}
          style={{ objectFit: props.fit }}
          onLoad={handleLoad}
          onError={handleError}
          onClick={handleClick}
          v-lazy={{
            isLazy: props.lazy,
            src: props.src
          }}
        />
        {!isLoad.value && !isError.value && (
          <div class="ti-image__loading">
            {slots.loading ? slots.loading() : null}
          </div>
        )}
        {isError.value && (
          <div class="ti-image__error">
            {slots.error ? slots.error() : '加载失败'}
          </div>
        )}
        <Teleport to="body" disabled={!isPreview.value}>
          <Transition name="ti-image-trans">
            {isPreview.value && (
              <image-preview
                z-index={props.zIndex}
                src={props.src}
                alt={props.alt}
                closeOnPressEscape={props.closeOnPressEscape}
                onClosePreview={handlePreview}
              />
            )}
          </Transition>
        </Teleport>
      </div>
    )
  }
})

export default Image
