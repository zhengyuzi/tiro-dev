import { c, cB, cE, cM } from '../../_minxin/cssr'
import { Theme } from '../../../theme-chalk/index'

const dot = {
  size: '8px',
  color: 'rgba(255, 255, 255, 0.4)',
  active: 'rgba(255, 255, 255, 1)'
}

const line = {
  width: '4px',
  height: '18px'
}

const arrow = {
  size: '35px',
  color: 'rgba(255, 255, 255, 1)',
  bkcolor: 'rgba(31, 45, 61, .2)',
  active: 'rgba(31, 45, 61, .4)',
  padding: '16px'
}

export default c([
  cB(
    'carousel',
    {
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      position: 'relative',
      boxSizing: 'border-box'
    },
    [
      c('&.is-vertical', [
        cE('inner', {
          flexDirection: 'column'
        })
      ]),
      cE('inner', {
        width: '100%',
        height: '100%',
        display: 'flex'
      }),
      cE(
        'dots',
        {
          position: 'absolute',
          display: 'flex'
        },
        [
          c('&.is-dot', [
            cE('dot', {
              width: dot.size,
              height: dot.size,
              borderRadius: Theme['--ti-border-radius-circle']
            })
          ]),
          c('&.is-line', [
            cE('dot', {
              borderRadius: Theme['--ti-border-radius-middle']
            })
          ]),
          cE(
            'dot',
            {
              backgroundColor: dot.color,
              cursor: 'pointer'
            },
            [
              c('&.is-active', {
                backgroundColor: dot.active
              })
            ]
          ),
          c(
            '&.is-bottom, &.is-top',
            {
              width: '100%',
              justifyContent: 'center'
            },
            [
              cE('dot', {
                margin: '0px 3px'
              }),
              c('&.is-line', [
                cE('dot', {
                  width: line.height,
                  height: line.width
                })
              ])
            ]
          ),
          c('&.is-bottom', {
            bottom: '6%'
          }),
          c('&.is-top', {
            top: '6%'
          }),
          c(
            '&.is-right, &.is-left',
            {
              flexDirection: 'column',
              top: '50%',
              transform: 'translateY(-50%)'
            },
            [
              cE('dot', {
                margin: '3px 0px',
                alignSelf: 'baseline'
              }),
              c('&.is-line', [
                cE('dot', {
                  width: line.width,
                  height: line.height
                })
              ])
            ]
          ),
          c('&.is-right', {
            right: '4%'
          }),
          c('&.is-left', {
            left: '4%'
          })
        ]
      ),
      c('&.is-show-arrow:not(.is-vertical):hover', [
        cE('arrows', {
          visibility: 'visible',
          opacity: 1
        })
      ]),
      cE(
        'arrows',
        {
          opacity: 0,
          visibility: 'hidden',
          transition: 'all 0.3s'
        },
        [
          cE(
            'arrow',
            {
              position: 'absolute',
              width: arrow.size,
              height: arrow.size,
              borderRadius: Theme['--ti-border-radius-circle'],
              textAlign: 'center',
              lineHeight: arrow.size,
              backgroundColor: arrow.bkcolor,
              color: arrow.color,
              fontSize: '18px',
              cursor: 'pointer',
              top: '50%',
              transform: 'translateY(-50%)'
            },
            [
              c('&:hover', {
                backgroundColor: arrow.active
              }),
              c('&:first-child', {
                left: arrow.padding
              }),
              c('&:last-child', {
                right: arrow.padding
              })
            ]
          )
        ]
      )
    ]
  )
])
