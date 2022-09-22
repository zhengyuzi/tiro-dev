const { defineConfig, build } = require('vite')
const vue = require('@vitejs/plugin-vue')
const path = require('path')
const fg = require('fast-glob')
const fs = require('fs')

const entryDir = path.resolve(__dirname, '../../tiro-ui')
const outputDir = path.resolve(__dirname, '../../build/dist')
const buildDir = path.resolve(__dirname, '../../build')
const srcDir = path.resolve(__dirname, '../../tiro-ui/src')

const baseConfig = defineConfig({
  configFile: false,
  publicDir: false,
  plugins: [vue()]
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
    await build(
      defineConfig({
        ...baseConfig,
        build: {
          rollupOptions,
          lib: {
            entry: path.resolve(srcDir, item),
            name,
            fileName: name,
            formats: ['es', 'umd']
          },
          outDir: path.resolve(__dirname, `../../build/components/${name}`)
        }
      })
    )
  })
}

const buildJson = async () => {
  const comps = await getComps()

  const package = {
    name: 'tiro-ui',
    type: 'module',
    files: ['dist'],
    main: './dist/tiro-ui.umd.js',
    module: './dist/tiro-ui.mjs',
    types: './types/index.d.ts',
    exports: {
      '.': {
        import: './dist/tiro-ui.mjs',
        require: './dist/tiro-ui.umd.js'
      }
    }
  }

  comps.map((item) => {
    const name = item.split('/')[0]
    package.exports[`./${name}`] = {
      import: `./dist/components/${name}/${name}.mjs`,
      require: `./dist/components/${name}/${name}.umd.js`
    }
  })

  fs.writeFile(
    path.resolve(buildDir, 'package.json'),
    JSON.stringify(package, null, '\t'),
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
