const { defineConfig, build } = require('vite')
const vueJsx = require('@vitejs/plugin-vue-jsx')
const path = require('path')
const fg = require('fast-glob')
const fs = require('fs')

const entryDir = path.resolve(__dirname, '../../tiro-ui')
const outputDir = path.resolve(__dirname, '../../build/dist')
const buildDir = path.resolve(__dirname, '../../build')
const srcDir = path.resolve(__dirname, '../../tiro-ui/src')

const version = '1.0.0'

const typeFiles = {
  es: 'es',
  umd: 'lib'
}

const baseConfig = defineConfig({
  configFile: false,
  publicDir: false,
  plugins: [vueJsx()]
})

const rollupOptions = {
  external: ['vue'],
  output: {
    globals: {
      vue: 'Vue'
    },
    exports: 'named'
  }
}

const buildAll = async () => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        rollupOptions,
        lib: {
          entry: path.resolve(entryDir, 'index.ts'),
          name: 'tiro-ui',
          fileName: 'tiro-ui',
          formats: ['es', 'umd']
        },
        outDir: outputDir
      }
    })
  )
}

// 获取各组件入口文件
const getComps = () => {
  return fg('**/index.ts', {
    cwd: srcDir,
    ignore: ['**/node_modules', 'index.ts']
  })
}

const buildChunk = async () => {
  const comps = await getComps()

  comps.map(async (item) => {
    const name = item.split('/')[0]

    ;['es', 'umd'].forEach(async (type) => {
      await build(
        defineConfig({
          ...baseConfig,
          build: {
            rollupOptions,
            lib: {
              entry: path.resolve(srcDir, item),
              name,
              fileName: 'index',
              formats: [type]
            },
            outDir: path.resolve(
              __dirname,
              `../../build/${typeFiles[type]}/${name}`
            )
          }
        })
      )
    })
  })
}

const buildJson = async () => {
  const package = {
    name: 'tiro-ui',
    version,
    description: 'A simple Vue3-based desktop UI component library',
    author: 'ZhengYuZi',
    type: 'module',
    license: 'MIT',
    files: ['dist', 'lib', 'types'],
    main: './dist/tiro-ui.umd.js',
    module: './dist/tiro-ui.mjs',
    types: './types/index.d.ts',
    keywords: [
      'vue',
      'vue3-components',
      ' vue-typescript',
      'component-library',
      'ui'
    ],
    peerDependencies: {
      vue: '^3.0.0'
    },
    homepage: '1.15.247.77',
    repository: {
      type: 'git',
      url: 'https://github.com/ZhengYuZi/tiro-dev'
    },
    exports: {
      '.': {
        import: './dist/tiro-ui.mjs',
        require: './dist/tiro-ui.umd.js'
      }
    }
  }

  fs.writeFile(
    path.resolve(buildDir, 'package.json'),
    JSON.stringify(package, null, 2),
    function (err) {
      if (err) throw err
    }
  )
}

const buildLib = async () => {
  await buildAll()
  await buildChunk()
  await buildJson()
}

buildLib()
