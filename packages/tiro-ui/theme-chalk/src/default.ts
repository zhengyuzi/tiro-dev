import CSSRender from 'css-render'

const { c } = CSSRender()

export const TiScrollbar = c([
  c('&::-webkit-scrollbar', {
    display: 'none'
  }),
  c('&:hover', [
    c('&::-webkit-scrollbar', {
      display: 'block',
      width: '7px',
      height: '1px'
    }),
    c(
      '&::-webkit-scrollbar-thumb',
      {
        borderRadius: '2px',
        backgroundColor: '#d9d9d9'
      },
      [
        c('&:hover', {
          backgroundColor: '#ccc'
        })
      ]
    )
  ])
])

export const ThemeType = [
  'default',
  'success',
  'info',
  'danger',
  'warning',
  'bright'
]

export const ThemeSize = ['small', 'medium', 'large']
