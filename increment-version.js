// increment-version.js
const fs = require("fs");
const path = require("path");

// 读取 package.json
const packagePath = path.join(__dirname, "package.json");
const packageJson = JSON.parse(fs.readFileSync(packagePath, "utf8"));

// 获取当前版本号
const version = packageJson.version;
const [major, minor, patch] = version.split(".").map(Number);

// 递增补丁版本（patch），你也可以根据需求改为 minor 或 major
const newVersion = `${major}.${minor}.${patch + 1}`;

// 更新 package.json 的版本号
packageJson.version = newVersion;

// 写回 package.json
fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2) + "\n");

console.log(`Version updated to ${newVersion}`);
