import { h, VNode } from 'vue'
import Message from './message'
import { MessageType, renderer } from './methods'

export interface IMessageOption {
  type?: MessageType
  message: string
  duration?: number
  clearable?: boolean
  icon?: () => VNode
}

export const TiMessage = ({
  type,
  message,
  duration,
  clearable,
  icon
}: IMessageOption) => {
  const vnode = h(Message, { type, message, duration, clearable, icon })
  renderer({ vnode, duration })
}
