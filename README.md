# 使用 `num-auto-add` 在 Vue 3 中实现数字动画效果

`num-auto-add` 是一个轻量级的库，用于在 Vue 3 应用中为数字添加自动递增的动画效果。本文档将指导你如何在基于 Vite 的 Vue 3 项目中集成和使用该库。

## 前提条件

- 已创建一个 Vue 3 项目（推荐使用 Vite 初始化）。
- 确保已安装 Node.js 和包管理工具（npm 或 Yarn）。

## 安装

根据你的包管理工具，选择以下方式安装 `num-auto-add`：

### 使用 Yarn

```bash
yarn add num-auto-add
```

### 使用 npm

```bash
npm install num-auto-add
```

## 使用步骤

### 1. 引入包

在你的 Vue 3 项目的入口文件（通常是 `src/main.js`）中，引入 `num-auto-add` 包。

```javascript
import { createApp } from "vue";
import App from "./App.vue";
import numAutoAdd from "num-auto-add";

const app = createApp(App);

// 声明自定义指令
app.directive("numAutoAdd", numAutoAdd());

app.mount("#app");
```

### 2. 配置自定义指令

`numAutoAdd` 是一个函数，可以接收两个可选参数来配置动画效果：

- **第一个参数**（`duration`）：设置动画执行的总时间，单位为毫秒，默认值为 `700`。
- **第二个参数**（`many`）：布尔值，指示动画是否可以多次执行。`true` 表示可多次执行，`false` 表示仅执行一次。默认值为 `true`。

示例：配置动画持续 1000ms，仅执行一次：

```javascript
app.directive("numAutoAdd", numAutoAdd(1000, false));
```

### 3. 在组件中使用指令

在你的 Vue 组件中，通过 `v-numAutoAdd` 指令将动画效果绑定到包含数字的元素上。

示例组件（`src/App.vue`）：

```vue
<template>
  <div>
    <h3 v-numAutoAdd>666</h3>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
h3 {
  font-size: 24px;
  text-align: center;
  margin-top: 20px;
}
</style>
```

当页面加载时，数字 `666` 将以动画形式从 0 递增到 666。

### 4. 动态数字支持

如果数字是动态变化的（例如通过 `props` 或 `data` 提供），确保在数字更新后触发动画。可以通过以下方式实现：

```vue
<template>
  <div>
    <h3 v-numAutoAdd="number">{{ number }}</h3>
    <button @click="updateNumber">Update Number</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 666,
    };
  },
  methods: {
    updateNumber() {
      this.number = Math.floor(Math.random() * 1000);
    },
  },
};
</script>
```

**注意**：如果 `many` 参数设置为 `true`，每次数字更新时动画都会重新触发；若为 `false`，动画仅在首次渲染时执行。

## 配置示例

以下是一个完整的配置示例，展示如何设置不同的动画持续时间和执行次数：

### 示例 1：默认配置

```javascript
app.directive("numAutoAdd", numAutoAdd()); // 700ms，可多次执行
```

```vue
<h3 v-numAutoAdd>1000</h3>
```

### 示例 2：自定义动画时间

```javascript
app.directive("numAutoAdd", numAutoAdd(2000)); // 2000ms，可多次执行
```

```vue
<h3 v-numAutoAdd>500</h3>
```

### 示例 3：单次动画

```javascript
app.directive("numAutoAdd", numAutoAdd(1000, false)); // 1000ms，仅执行一次
```

```vue
<h3 v-numAutoAdd>888</h3>
```

## 注意事项

1. **数字格式**：`v-numAutoAdd` 指令期望绑定的元素内容是纯数字。如果内容包含非数字字符，可能导致动画效果异常。
2. **性能**：在大量元素上同时使用动画可能影响性能，建议在必要时限制动画的使用范围。
3. **兼容性**：确保 `num-auto-add` 的版本与你的 Vue 3 项目兼容。建议使用最新版本。

## 调试

如果动画未按预期工作，请检查以下内容：

- 确认 `num-auto-add` 已正确安装并引入。
- 检查 `v-numAutoAdd` 指令是否正确绑定到元素。
- 确保元素的初始内容是有效的数字。

## 项目运行

完成以上配置后，运行以下命令启动开发服务器：

```bash
npm run dev
```

访问 `http://localhost:5173`（或终端提示的端口）即可预览效果。

## 总结

通过以上步骤，你可以在 Vue 3 项目中轻松集成 `num-auto-add`，为数字添加生动的递增动画效果。根据需求调整动画时间和执行次数，以优化用户体验。

如需更多帮助，请参考 `num-auto-add` 的官方文档或提交 issue 至其 GitHub 仓库。
