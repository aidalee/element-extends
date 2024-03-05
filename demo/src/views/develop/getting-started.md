## 快速上手

### 安装

#### 切换到所托内部镜像源，安装该组件

> 安装该组件库 `npm / pnpm` 都行; 推荐 pnpm

```shell
pnpm add @soterea-f2e/so-ui
```

#### 推荐使用`nrm`管理镜像源

> 安装 nrm

```shell
npm i -g nrm
```

> nrm 查看镜像源（检测 nrm 是否安装成功）

```shell
nrm ls
```

> nrm 新增一个自定义(如：soterea)的镜像源

```shell
nrm add soterea http://nexus.soterea.cn/repository/soterea-npm/
```

> nrm 切换镜像源

```shell
nrm use soterea
```

### 使用 （下面是组件vue3 jsx 语法中 使用的主要代码片段 其他省略...）

> 按需加载

```jsx
import { Button as SoButton } from '@soterea-f2e/so-ui'
import '@soterea-f2e/so-ui/es/button/style'
export default defineComponent({
  components: {
    SoButton
  },
  setup (props, ctx){
    return () => {
      return (
        <SoButton>按钮</SoButton>
      )
    }
  }
})
```
> 全量加载

```jsx
# main.js 中引入并注册

import SoUI from '@soterea-f2e/so-ui'
import '@soterea-f2e/so-ui/es/style'
createApp(App).use(SoUI)

# 页面中使用:
<SoButton></SoButton>
<EButton></EButton>
....
```