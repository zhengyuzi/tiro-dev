import CSSRender from 'css-render'

const { c } = CSSRender()

export const TiScrollbar = c([
  c('&::-webkit-scrollbar', {
    visibility: 'hidden'
  }),
  c('&:hover', [
    c('&::-webkit-scrollbar', {
      visibility: 'visible',
      width: '7px',
      height: '1px'
    }),
    c(
      '&::-webkit-scrollbar-thumb',
      {
        borderRadius: '2.5px',
        backgroundColor: '#dcdcdc'
      },
      [
        c('&:hover', {
          backgroundColor: '#bbb'
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
