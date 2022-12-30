import { render, VNode } from 'vue'
import style from './style/index.cssr'

export type MessageType = 'info' | 'error' | 'warning' | 'success'

export interface IMessageRender {
  vnode: VNode
  duration?: number
}

export const containerClassName = 'ti-message-container'

let isContainer: HTMLElement | null = null

export const createContainer = () => {
  style.mount({ id: 'ti-message' })
  const container = document.createElement('div')
  container.className = `${containerClassName}`
  document.body.appendChild(container)
  isContainer = container
  return container
}

export const renderContainer = () => {
  if (isContainer) return isContainer
  return createContainer()
}

export const renderMessage = (container: Element, vnode: VNode) => {
  const fragment = document.createElement('div')
  fragment.className = 'ti-message-item'
  render(vnode, fragment)
  container.appendChild(fragment)
  return fragment
}

export const seTTiming = (
  container: Element,
  fragment: HTMLElement,
  duration: number
) => {
  const timer = setTimeout(() => {
    container.removeChild(fragment)
    if (!container.childNodes.length) {
      container && document.body.removeChild(container)
      isContainer = null
      style.unmount()
    }
    clearTimeout(timer)
  }, duration)
}

export const renderer = ({ vnode, duration = 3000 }: IMessageRender) => {
  const Container = renderContainer()
  const Message = renderMessage(Container, vnode)
  seTTiming(Container, Message, duration + 300)
}
