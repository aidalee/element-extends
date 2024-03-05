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

```jsx
import { ElButton } from '@soterea-f2e/so-ui'

return () => {
  return (
    <ElButton>按钮</ElButton>
  )
}
```