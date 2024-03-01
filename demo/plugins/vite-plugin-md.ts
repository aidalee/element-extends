/*
 * @Author: please
 * @Date: 2024-02-29 17:55:13
 * @LastEditors: please
 * @LastEditTime: 2024-03-01 11:08:55
 * @Description: 请填写简介
 */
import path from 'path'
import fs from 'fs-extra'
import MarkdownIt from 'markdown-it'

export default () => ({
  name: 'vitePluginMarkdown',
  // src为文件内容，id为当前文件的路径
  transform(src, id) {
    // 匹配.md后缀的文件进行解析
    if (id.endsWith('.md')) {
      const markdownIt = MarkdownIt({
        html: true,
        xhtmlOut: false
      })
      const snippetPattern = /:::snippet\s+(.*?)\s+:::/gs
      const matches = src.matchAll(snippetPattern)
      let importContent = ''
      for (const match of matches) {
        // parse three lines in snippet block
        // 提取三行内容
        const [title, desc, demoName] = match[1].split('\n')
        // match demo Vue components
        // 去除括号和斜杠，直接得到Demo组件名称，如ButtonPrimary
        const tagPattern = /<(\w+)\/>/
        const demoTagName = demoName.match(tagPattern)[1] // <ButtonPrimary/> -> ButtonPrimary

        const demoComponentName = camelToDashCase(demoTagName).replace(
          /([a-zA-Z])([A-Z])/g,
          '$1-$2'
        ) // ButtonPrimary -> button-primary
        // 获取源码
        const demoCode = fetchDemoCode(demoComponentName, id)
        // 根据组件和md文件的相对路径添加依赖
        const importLine = `import ${demoTagName} from './${demoComponentName}.vue';\n`
        importContent += importLine
        // 调用demo容器组件,将demoCode和title作为props传入
        // Demo 将直接渲染组件实例，作为插槽传入
        // Desc 用MrkdownIt解析为html，作为插槽传入
        const caseCardContent = `<so-snippet title="${title}" code="${encodeURIComponent(
          demoCode
        )}" >
          <template v-slot:demo>${demoName}</template>
          <template v-slot:desc>${markdownIt.render(desc)}</template>
        </so-snippet>
        `
        // 替换原来待渲染的内容
        src = src.replace(match[0], caseCardContent) // html render
      }
      // 解析之后的html文档需要在外层包裹<template>根结点
      return {
        // code: `<template>${markdownIt.render(src)}</template>`,
        code: `
          <script setup>
            ${importContent}
          </script>
          <template>
            <div class='yk-demo-doc'>
              ${markdownIt.render(src)}
            </div>
          </template>`,
        map: null
      }
    }
  }
})

// fetch demo source code by relative path
// 根据Demo组件文件名和当前md文档的绝对路径，读取demo组件源代码
export function fetchDemoCode(componentName, id) {
  const targetFile = `${componentName}.vue`
  const absolutePath = path.resolve(path.dirname(id), targetFile)
  try {
    const content = fs.readFileSync(absolutePath, 'utf-8')
    return content
  } catch (error) {
    return ''
  }
}

// 驼峰命名转短横线
/** @example ButtonPrimary -> button-primary */
function camelToDashCase(str: string) {
  return str.replace(/([a-zA-Z])([A-Z])/g, '$1-$2').toLowerCase()
}
