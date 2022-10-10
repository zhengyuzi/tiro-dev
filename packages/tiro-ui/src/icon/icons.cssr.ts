import CSSRender from 'css-render'
import bem from '@css-render/plugin-bem'

const cssr = CSSRender()

const namespace = 'ti'

const plugin = bem({
  blockPrefix: `.${namespace}`,
  elementPrefix: '-',
  modifierPrefix: '-icon-'
})

cssr.use(plugin)

const { c } = cssr
const { cB, cE, cM } = plugin

const icons = [
  {
    name: 'top',
    code: '\\e692'
  },
  {
    name: 'direction-down',
    code: '\\e67f'
  },
  {
    name: 'copy',
    code: '\\e689'
  },
  {
    name: 'direction-right',
    code: '\\e68a'
  },
  {
    name: 'direction-up',
    code: '\\e68b'
  },
  {
    name: 'direction-left',
    code: '\\e68c'
  },
  {
    name: 'menu',
    code: '\\e68d'
  },
  {
    name: 'loading',
    code: '\\e68e'
  },
  {
    name: 'select',
    code: '\\e68f'
  },
  {
    name: 'zoom-out',
    code: '\\e690'
  },
  {
    name: 'zoom-in',
    code: '\\e691'
  },
  {
    name: 'add',
    code: '\\e664'
  },
  {
    name: 'bad',
    code: '\\e66d'
  },
  {
    name: 'calendar',
    code: '\\e66e'
  },
  {
    name: 'comment',
    code: '\\e674'
  },
  {
    name: 'elipsis',
    code: '\\e675'
  },
  {
    name: 'file',
    code: '\\e676'
  },
  {
    name: 'folder-close',
    code: '\\e677'
  },
  {
    name: 'filter',
    code: '\\e678'
  },
  {
    name: 'good',
    code: '\\e679'
  },
  {
    name: 'home',
    code: '\\e67a'
  },
  {
    name: 'file-open',
    code: '\\e67b'
  },
  {
    name: 'link',
    code: '\\e67e'
  },
  {
    name: 'help',
    code: '\\e680'
  },
  {
    name: 'notification',
    code: '\\e681'
  },
  {
    name: 'more',
    code: '\\e682'
  },
  {
    name: 'print',
    code: '\\e683'
  },
  {
    name: 'navigation',
    code: '\\e684'
  },
  {
    name: 'refresh',
    code: '\\e685'
  },
  {
    name: 'setting',
    code: '\\e686'
  },
  {
    name: 'survey',
    code: '\\e687'
  },
  {
    name: 'user',
    code: '\\e688'
  },
  {
    name: 'code',
    code: '\\e747'
  },
  {
    name: 'arrow-down',
    code: '\\e665'
  },
  {
    name: 'ashbin',
    code: '\\e666'
  },
  {
    name: 'arrow-right',
    code: '\\e667'
  },
  {
    name: 'eye',
    code: '\\e668'
  },
  {
    name: 'bottom',
    code: '\\e669'
  },
  {
    name: 'attachment',
    code: '\\e66a'
  },
  {
    name: 'close',
    code: '\\e66b'
  },
  {
    name: 'download',
    code: '\\e66c'
  },
  {
    name: 'eye-close',
    code: '\\e66f'
  },
  {
    name: 'favorite',
    code: '\\e670'
  },
  {
    name: 'label',
    code: '\\e671'
  },
  {
    name: 'heart',
    code: '\\e672'
  },
  {
    name: 'hide',
    code: '\\e673'
  },
  {
    name: 'picture',
    code: '\\e67c'
  },
  {
    name: 'search',
    code: '\\e67d'
  },
  {
    name: 'empty',
    code: '\\e65e'
  },
  {
    name: 'restore',
    code: '\\ea6b'
  }
]

const fontFace = c('@font-face', {
  fontFamily: 'ti',
  src: `url('//at.alicdn.com/t/c/font_3658387_1i6tevohnew.woff2?t=1665390206227') format('woff2'),
  url('//at.alicdn.com/t/c/font_3658387_1i6tevohnew.woff?t=1665390206227') format('woff'),
  url('//at.alicdn.com/t/c/font_3658387_1i6tevohnew.ttf?t=1665390206227') format('truetype');
  `
})

const iconItem = icons.map((item) => {
  return cM(`${item.name}:before`, {
    content: `"${item.code}"`
  })
})

export default c([
  fontFace,
  cB(
    '',
    {
      fontFamily: 'ti !important',
      fontStyle: 'normal',
      ['-webkit-font-smoothing']: 'antialiased',
      ['-moz-osx-font-smoothing']: 'grayscale'
    },
    [...iconItem]
  )
])
