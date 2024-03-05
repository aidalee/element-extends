# SoButton 按钮

### 介绍

按钮用于触发一个操作，如提交表单。

### 代码演示

:::snippet
按钮类型
支持 `primary` 、`success` 、`warning`、`error`、`default`、`text` 6种类型，默认为`default`。
<ButtonType/>
:::

:::snippet
按钮形状
支持 `round`、`circle`两种类型，默认为`round`。
<ButtonShape/>
:::


:::snippet
按钮大小
有 `lg`、`md`、`sm`三种尺寸，默认为`md`。
<ButtonSize/>
:::

:::snippet
自定义颜色
通过`color`属性自定义按钮颜色
<ButtonGradient/>
:::

:::snippet
禁用状态
通过`disable`设置禁用状态
<ButtonDisabled/>
:::

:::snippet
朴素按钮
通过`plain`设置
<ButtonPlain/>
:::

## API

### props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| type | 类型 | _string_ | `primary` `success` `warning` `danger` `default` `text` | `default` |
| size | 尺寸 | _string_ | `large` `middle` `small` | `middle` |
| color | 自定义按钮颜色，支持 `linear-gradient` 渐变色 | _string_ | - | - |
| delay | 延迟点击时间，单位 ms | _number_ | - | - |
