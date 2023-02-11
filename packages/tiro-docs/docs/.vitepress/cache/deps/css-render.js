// ../../node_modules/.pnpm/css-render@0.15.11/node_modules/css-render/esm/parse.js
function ampCount(selector) {
  let cnt = 0
  for (let i = 0; i < selector.length; ++i) {
    if (selector[i] === '&') ++cnt
  }
  return cnt
}
var separatorRegex = /\s*,(?![^(]*\))\s*/g
var extraSpaceRegex = /\s+/g
function resolveSelectorWithAmp(amp, selector) {
  const nextAmp = []
  selector.split(separatorRegex).forEach((partialSelector) => {
    let round = ampCount(partialSelector)
    if (!round) {
      amp.forEach((partialAmp) => {
        nextAmp.push((partialAmp && partialAmp + ' ') + partialSelector)
      })
      return
    } else if (round === 1) {
      amp.forEach((partialAmp) => {
        nextAmp.push(partialSelector.replace('&', partialAmp))
      })
      return
    }
    let partialNextAmp = [partialSelector]
    while (round--) {
      const nextPartialNextAmp = []
      partialNextAmp.forEach((selectorItr) => {
        amp.forEach((partialAmp) => {
          nextPartialNextAmp.push(selectorItr.replace('&', partialAmp))
        })
      })
      partialNextAmp = nextPartialNextAmp
    }
    partialNextAmp.forEach((part) => nextAmp.push(part))
  })
  return nextAmp
}
function resolveSelector(amp, selector) {
  const nextAmp = []
  selector.split(separatorRegex).forEach((partialSelector) => {
    amp.forEach((partialAmp) => {
      nextAmp.push((partialAmp && partialAmp + ' ') + partialSelector)
    })
  })
  return nextAmp
}
function parseSelectorPath(selectorPaths) {
  let amp = ['']
  selectorPaths.forEach((selector) => {
    selector = selector && selector.trim()
    if (
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      !selector
    ) {
      return
    }
    if (selector.includes('&')) {
      amp = resolveSelectorWithAmp(amp, selector)
    } else {
      amp = resolveSelector(amp, selector)
    }
  })
  return amp.join(', ').replace(extraSpaceRegex, ' ')
}

// ../../node_modules/.pnpm/css-render@0.15.11/node_modules/css-render/esm/utils.js
function removeElement(el) {
  if (!el) return
  const parentElement = el.parentElement
  if (parentElement) parentElement.removeChild(el)
}
function queryElement(id) {
  return document.head.querySelector(`style[cssr-id="${id}"]`)
}
function createElement(id) {
  const el = document.createElement('style')
  el.setAttribute('cssr-id', id)
  return el
}
function isMediaOrSupports(selector) {
  if (!selector) return false
  return /^\s*@(s|m)/.test(selector)
}

// ../../node_modules/.pnpm/css-render@0.15.11/node_modules/css-render/esm/render.js
var kebabRegex = /[A-Z]/g
function kebabCase(pattern) {
  return pattern.replace(kebabRegex, (match) => '-' + match.toLowerCase())
}
function unwrapProperty(prop, indent = '  ') {
  if (typeof prop === 'object' && prop !== null) {
    return (
      ' {\n' +
      Object.entries(prop)
        .map((v) => {
          return indent + `  ${kebabCase(v[0])}: ${v[1]};`
        })
        .join('\n') +
      '\n' +
      indent +
      '}'
    )
  }
  return `: ${prop};`
}
function unwrapProperties(props, instance, params) {
  if (typeof props === 'function') {
    return props({
      context: instance.context,
      props: params
    })
  }
  return props
}
function createStyle(selector, props, instance, params) {
  if (!props) return ''
  const unwrappedProps = unwrapProperties(props, instance, params)
  if (!unwrappedProps) return ''
  if (typeof unwrappedProps === 'string') {
    return `${selector} {
${unwrappedProps}
}`
  }
  const propertyNames = Object.keys(unwrappedProps)
  if (propertyNames.length === 0) {
    if (instance.config.keepEmptyBlock) return selector + ' {\n}'
    return ''
  }
  const statements = selector ? [selector + ' {'] : []
  propertyNames.forEach((propertyName) => {
    const property = unwrappedProps[propertyName]
    if (propertyName === 'raw') {
      statements.push('\n' + property + '\n')
      return
    }
    propertyName = kebabCase(propertyName)
    if (property !== null && property !== void 0) {
      statements.push(`  ${propertyName}${unwrapProperty(property)}`)
    }
  })
  if (selector) {
    statements.push('}')
  }
  return statements.join('\n')
}
function loopCNodeListWithCallback(children, options, callback) {
  if (!children) return
  children.forEach((child) => {
    if (Array.isArray(child)) {
      loopCNodeListWithCallback(child, options, callback)
    } else if (typeof child === 'function') {
      const grandChildren = child(options)
      if (Array.isArray(grandChildren)) {
        loopCNodeListWithCallback(grandChildren, options, callback)
      } else if (grandChildren) {
        callback(grandChildren)
      }
    } else if (child) {
      callback(child)
    }
  })
}
function traverseCNode(
  node,
  selectorPaths,
  styles,
  instance,
  params,
  styleSheet
) {
  const $ = node.$
  let blockSelector = ''
  if (!$ || typeof $ === 'string') {
    if (isMediaOrSupports($)) {
      blockSelector = $
    } else {
      selectorPaths.push($)
    }
  } else if (typeof $ === 'function') {
    const selector2 = $({
      context: instance.context,
      props: params
    })
    if (isMediaOrSupports(selector2)) {
      blockSelector = selector2
    } else {
      selectorPaths.push(selector2)
    }
  } else {
    if ($.before) $.before(instance.context)
    if (!$.$ || typeof $.$ === 'string') {
      if (isMediaOrSupports($.$)) {
        blockSelector = $.$
      } else {
        selectorPaths.push($.$)
      }
    } else if ($.$) {
      const selector2 = $.$({
        context: instance.context,
        props: params
      })
      if (isMediaOrSupports(selector2)) {
        blockSelector = selector2
      } else {
        selectorPaths.push(selector2)
      }
    }
  }
  const selector = parseSelectorPath(selectorPaths)
  const style = createStyle(selector, node.props, instance, params)
  if (blockSelector) {
    styles.push(`${blockSelector} {`)
    if (styleSheet && style) {
      styleSheet.insertRule(`${blockSelector} {
${style}
}
`)
    }
  } else {
    if (styleSheet && style) {
      styleSheet.insertRule(style)
    }
    if (!styleSheet && style.length) styles.push(style)
  }
  if (node.children) {
    loopCNodeListWithCallback(
      node.children,
      {
        context: instance.context,
        props: params
      },
      (childNode) => {
        if (typeof childNode === 'string') {
          const style2 = createStyle(
            selector,
            { raw: childNode },
            instance,
            params
          )
          if (styleSheet) {
            styleSheet.insertRule(style2)
          } else {
            styles.push(style2)
          }
        } else {
          traverseCNode(
            childNode,
            selectorPaths,
            styles,
            instance,
            params,
            styleSheet
          )
        }
      }
    )
  }
  selectorPaths.pop()
  if (blockSelector) {
    styles.push('}')
  }
  if ($ && $.after) $.after(instance.context)
}
function render(node, instance, props, insertRule = false) {
  const styles = []
  traverseCNode(
    node,
    [],
    styles,
    instance,
    props,
    insertRule ? node.instance.__styleSheet : void 0
  )
  if (insertRule) return ''
  return styles.join('\n\n')
}

// ../../node_modules/.pnpm/@emotion+hash@0.8.0/node_modules/@emotion/hash/dist/hash.browser.esm.js
function murmur2(str) {
  var h = 0
  var k,
    i = 0,
    len = str.length
  for (; len >= 4; ++i, len -= 4) {
    k =
      (str.charCodeAt(i) & 255) |
      ((str.charCodeAt(++i) & 255) << 8) |
      ((str.charCodeAt(++i) & 255) << 16) |
      ((str.charCodeAt(++i) & 255) << 24)
    k = (k & 65535) * 1540483477 + (((k >>> 16) * 59797) << 16)
    k ^= /* k >>> r: */ k >>> 24
    h =
      ((k & 65535) * 1540483477 + (((k >>> 16) * 59797) << 16)) ^
      ((h & 65535) * 1540483477 + (((h >>> 16) * 59797) << 16))
  }
  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 255) << 16
    case 2:
      h ^= (str.charCodeAt(i + 1) & 255) << 8
    case 1:
      h ^= str.charCodeAt(i) & 255
      h = (h & 65535) * 1540483477 + (((h >>> 16) * 59797) << 16)
  }
  h ^= h >>> 13
  h = (h & 65535) * 1540483477 + (((h >>> 16) * 59797) << 16)
  return ((h ^ (h >>> 15)) >>> 0).toString(36)
}
var hash_browser_esm_default = murmur2

// ../../node_modules/.pnpm/css-render@0.15.11/node_modules/css-render/esm/mount.js
if (typeof window !== 'undefined') {
  window.__cssrContext = {}
}
function unmount(intance, node, id) {
  const { els } = node
  if (id === void 0) {
    els.forEach(removeElement)
    node.els = []
  } else {
    const target = queryElement(id)
    if (target && els.includes(target)) {
      removeElement(target)
      node.els = els.filter((el) => el !== target)
    }
  }
}
function addElementToList(els, target) {
  els.push(target)
}
function mount(
  instance,
  node,
  id,
  props,
  head,
  silent,
  force,
  anchorMetaName,
  ssrAdapter
) {
  if (silent && !ssrAdapter) {
    if (id === void 0) {
      console.error('[css-render/mount]: `id` is required in `silent` mode.')
      return
    }
    const cssrContext = window.__cssrContext
    if (!cssrContext[id]) {
      cssrContext[id] = true
      render(node, instance, props, silent)
    }
    return
  }
  let style
  if (id === void 0) {
    style = node.render(props)
    id = hash_browser_esm_default(style)
  }
  if (ssrAdapter) {
    ssrAdapter.adapter(
      id,
      style !== null && style !== void 0 ? style : node.render(props)
    )
    return
  }
  const queriedTarget = queryElement(id)
  if (queriedTarget !== null && !force) {
    return queriedTarget
  }
  const target =
    queriedTarget !== null && queriedTarget !== void 0
      ? queriedTarget
      : createElement(id)
  if (style === void 0) style = node.render(props)
  target.textContent = style
  if (queriedTarget !== null) return queriedTarget
  if (anchorMetaName) {
    const anchorMetaEl = document.head.querySelector(
      `meta[name="${anchorMetaName}"]`
    )
    if (anchorMetaEl) {
      document.head.insertBefore(target, anchorMetaEl)
      addElementToList(node.els, target)
      return target
    }
  }
  if (head) {
    document.head.insertBefore(
      target,
      document.head.querySelector('style, link')
    )
  } else {
    document.head.appendChild(target)
  }
  addElementToList(node.els, target)
  return target
}

// ../../node_modules/.pnpm/css-render@0.15.11/node_modules/css-render/esm/c.js
function wrappedRender(props) {
  return render(this, this.instance, props)
}
function wrappedMount(options = {}) {
  const {
    id,
    ssr,
    props,
    head = false,
    silent = false,
    force = false,
    anchorMetaName
  } = options
  const targetElement = mount(
    this.instance,
    this,
    id,
    props,
    head,
    silent,
    force,
    anchorMetaName,
    ssr
  )
  return targetElement
}
function wrappedUnmount(options = {}) {
  const { id } = options
  unmount(this.instance, this, id)
}
var createCNode = function (instance, $, props, children) {
  return {
    instance,
    $,
    props,
    children,
    els: [],
    render: wrappedRender,
    mount: wrappedMount,
    unmount: wrappedUnmount
  }
}
var c = function (instance, $, props, children) {
  if (Array.isArray($)) {
    return createCNode(instance, { $: null }, null, $)
  } else if (Array.isArray(props)) {
    return createCNode(instance, $, null, props)
  } else if (Array.isArray(children)) {
    return createCNode(instance, $, props, children)
  } else {
    return createCNode(instance, $, props, null)
  }
}

// ../../node_modules/.pnpm/css-render@0.15.11/node_modules/css-render/esm/CssRender.js
function CssRender(config = {}) {
  let styleSheet = null
  const cssr = {
    c: (...args) => c(cssr, ...args),
    use: (plugin, ...args) => plugin.install(cssr, ...args),
    find: queryElement,
    context: {},
    config,
    get __styleSheet() {
      if (!styleSheet) {
        const style = document.createElement('style')
        document.head.appendChild(style)
        styleSheet = document.styleSheets[document.styleSheets.length - 1]
        return styleSheet
      }
      return styleSheet
    }
  }
  return cssr
}

// ../../node_modules/.pnpm/css-render@0.15.11/node_modules/css-render/esm/exists.js
function exists(id, ssr) {
  if (id === void 0) return false
  if (ssr) {
    const {
      context: { ids }
    } = ssr
    return ids.has(id)
  }
  return queryElement(id) !== null
}

// ../../node_modules/.pnpm/css-render@0.15.11/node_modules/css-render/esm/index.js
var esm_default = CssRender
export {
  CssRender,
  esm_default as default,
  exists,
  hash_browser_esm_default as hash
}
//# sourceMappingURL=css-render.js.map
