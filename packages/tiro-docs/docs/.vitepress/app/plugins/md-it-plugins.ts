import container from 'markdown-it-container'

const containerPlugin = (klass = 'show'): [any, string, object] => {
  return [
    container,
    klass,
    {
      render(tokens, idx) {
        const token = tokens[idx]
        let content = ''
        if (token.nesting === 1) {
          let target = idx + 1

          while (tokens[target].nesting === 0) {
            if (tokens[target].type !== 'fence') {
              content += `${tokens[target].content}\n`
              tokens[target].content = ''
            }
            target++
          }
          return `<ti-example>\n<template v-slot:component>\n${content}</template>\n`
        } else {
          return '</ti-example>'
        }
      }
    }
  ]
}

const tablePlugin = (klass = 'table'): [any, string, object] => {
  return [
    container,
    klass,
    {
      render(tokens, idx) {
        const token = tokens[idx]
        if (token.nesting === 1) {
          return `<ti-example-table>`
        } else {
          return '</ti-example-table>'
        }
      }
    }
  ]
}

export { containerPlugin, tablePlugin }
