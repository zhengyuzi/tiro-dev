import { c, cB, cE, cM } from '../../_minxin/cssr'
import { Theme, ThemeType, ThemeSize } from '../../../theme-chalk/index'

export default c([
  cB(
    'image',
    {
      display: 'inline-block',
      position: 'relative',
      overflow: 'hidden'
    },
    [
      cE(
        'inner',
        {
          width: '100%',
          height: '100%'
        },
        [
          c('&.is-preview', {
            cursor: 'pointer'
          })
        ]
      ),
      cE('error', {
        width: '100%',
        height: '100%',
        backgroundColor: Theme['--ti-color-gray-100'],
        color: Theme['--ti-color-gray-500'],
        fontSize: '12px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'default'
      }),
      cE('loading', {
        width: '100%',
        height: '100%',
        minHeight: '100px',
        backgroundColor: Theme['--ti-color-gray-100'],
        position: 'absolute',
        top: 0,
        left: 0,
        color: Theme['--ti-color-gray-500'],
        fontSize: '12px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'default'
      })
    ]
  ),
  cB(
    'image__preview',
    {
      position: 'fixed',
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      width: '100vw',
      height: '100vh',
      zIndex: Theme['--ti-z-index-2000'],
      overflow: 'hidden'
    },
    [
      cE('mask', {
        width: '100%',
        height: '100%',
        backgroundColor: Theme['--ti-color-black'],
        opacity: 0.4
      }),
      cE(
        'inner',
        {
          width: '100%',
          height: '100%',
          position: 'absolute',
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        },
        [
          cE('img', {
            maxHeight: 'calc(100% - 10px)',
            maxWidth: 'calc(100% - 10px)',
            userSelect: 'none',
            transition: 'transform 0.2s',
            transformOrigin: 'center'
          })
        ]
      ),
      cE(
        'toolbar',
        {
          position: 'absolute',
          bottom: '8%',
          width: '230px',
          height: '45px',
          left: '50%',
          transform: 'translate(-50%)',
          borderRadius: '40px',
          backgroundColor: Theme['--ti-color-gray-600'],
          opacity: 0.7,
          padding: '0 20px'
        },
        [
          cE(
            'toolbar__inner',
            {
              width: '100%',
              height: '100%',
              color: Theme['--ti-color-white'],
              fontSize: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around'
            },
            [
              c('*', {
                cursor: 'pointer'
              })
            ]
          )
        ]
      )
    ]
  ),
  c(
    '@keyframes Expand',
    `
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `
  ),
  c(
    '@keyframes Shrink',
    `
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  `
  ),
  c('.ti-image-trans-enter-active', {
    animation: 'Expand 0.15s'
  }),
  c('.ti-image-trans-leave-active', {
    animation: 'Shrink 0.15s'
  })
])
