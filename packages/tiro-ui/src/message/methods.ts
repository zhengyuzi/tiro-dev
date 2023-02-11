import { render, VNode } from 'vue'
import style from './style/index.cssr'

export type MessageType = 'info' | 'error' | 'warning' | 'success'

export interface IMessageRender {
  vnode: VNode
  duration?: number
}

export const containerClassName = 'ti-message-container'

let isContainer: HTMLElement | null = null

const isConfigProvider = () => {
  const ConfigProvider = document.querySelector('#ti-config-provider')
  return ConfigProvider
}

export const createContainer = (Provider: Element) => {
  const container = document.createElement('div')
  container.className = `${containerClassName}`
  Provider.appendChild(container)
  isContainer = container
  return container
}

export const renderContainer = (Provider: Element) => {
  if (isContainer) return isContainer
  return createContainer(Provider)
}

export const renderMessage = (container: Element, vnode: VNode) => {
  const fragment = document.createElement('div')
  fragment.className = 'ti-message-item'
  render(vnode, fragment)
  container.appendChild(fragment)
  return fragment
}

export const seTTiming = (
  Provider: Element,
  container: Element,
  fragment: HTMLElement,
  duration: number
) => {
  const timer = setTimeout(() => {
    container.removeChild(fragment)
    if (!container.childNodes.length) {
      container && Provider.removeChild(container)
      isContainer = null
      style.unmount()
    }
    clearTimeout(timer)
  }, duration)
}

export const renderer = ({ vnode, duration = 3000 }: IMessageRender) => {
  const ConfigProvider = isConfigProvider()
  const Provider = ConfigProvider || document.body
  style.mount({ id: 'ti-message' })
  const Container = renderContainer(Provider)
  const Message = renderMessage(Container, vnode)
  seTTiming(Provider, Container, Message, duration + 300)
}
