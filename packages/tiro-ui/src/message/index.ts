import { h, VNode } from 'vue'
import MessageTsx from './message'
import { MessageType, renderer } from './methods'

export interface IMessageOption {
  type?: MessageType
  message: string
  duration?: number
  clearable?: boolean
  icon?: () => VNode
}

export const Message = ({
  type,
  message,
  duration,
  clearable,
  icon
}: IMessageOption) => {
  const vnode = h(MessageTsx, { type, message, duration, clearable, icon })
  renderer({ vnode, duration })
}

export const TiMessage = Message

export default Message
