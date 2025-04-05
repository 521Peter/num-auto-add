### 1.下载包

- 用yarn下载`yarn add num-auto-add`
- 用npm下载`npm i num-auto-add`

### 2.引入包

`import numAutoAdd from "num-auto-add";` 

### 3.声明自定义指令

`Vue.directive('numAutoAdd', numAutoAdd());` 

注意：numAutoAdd可以函数接收两个参数

- 第一个参数是设置动画执行的总时间（以毫秒为单位），默认是700ms
- 第二个参数是布尔标志many，用于指示动画是可以执行多次还是只执行一次，默认为true，也就是可以执行多次。

### 4.给数字绑定指令
`<h3 v-numAutoAdd>666</h3>`

