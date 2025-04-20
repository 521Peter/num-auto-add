// 使用 ES 模块语法导入插件
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import { readFile } from "fs/promises"; // 用于读取 package.json

// 动态读取 package.json
const pkg = JSON.parse(
  await readFile(new URL("./package.json", import.meta.url))
);
const packageOptions = pkg.buildOptions;
const name = packageOptions.name;
const plugins = [
  // ts 支持
  typescript({
    sourceMap: true,
    // 启用声明文件生成
    declaration: true,
    // 指定声明文件输出目录
    declarationDir: "./dist/types",
  }),
  // 模块导入的路径补全
  resolve(),
  // 将 CommonJS 模块转换为 ES2015
  commonjs(),
  terser({
    compress: {
      // drop_console: true, // 删除 console.log
      // pure_funcs: ['console.log'], // 移除特定函数
    },
    // mangle: true, // 开启变量名混淆
  }),
];

/**
 * 默认导出一个数组，数组的每一个对象都是一个单独的导出文件配置，详细可查：https://www.rollupjs.com/guide/big-list-of-options
 */
export default [
  {
    input: "src/index.ts",
    output: [
      {
        sourcemap: true,
        // 导出的文件地址
        file: `./dist/${name}.js`,
        // 生成的包格式：一个自动执行的功能，适合作为<script>标签
        format: "iife",
        // 变量名
        // name: 'numAutoAdd',
      },
    ],
    plugins,
  },
  {
    input: "src/index.ts",
    output: [
      {
        sourcemap: true,
        file: `./dist/${name}.cjs.js`,
        format: "cjs", // 修正：改为 CommonJS 格式，与文件名一致
      },
    ],
    plugins,
  },
  {
    input: "src/index.ts",
    output: [
      {
        sourcemap: true,
        file: `./dist/${name}.esm.js`,
        format: "esm",
      },
    ],
    plugins,
  },
];
