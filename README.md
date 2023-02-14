# jira

创建项目并使用 vscode 打开

npx create-react-app jira --template typescript

cd jira & code .

前期规避的问题：

1.相对路径过长，设置绝对路径
tsconfig.json 中
"baseUrl": "./"

"path": {
"@name": "path"
}

- [json path 符号说明](https://github.com/json-path/JsonPath)

2. 格式化问题

- install Prettier
  [prettier](https://prettier.io/docs/en/install.html)

npm install --save-dev --save-exact prettier

echo {}> .prettierrc.json

echo -e "# Ignore artifacts:\nbuild\ncoverage"> .prettierignore

- Pre-commit Hook
  npx mrm@2 lint-staged

- eslint
  npm install --save-dev eslint-config-prettier

package.json -> eslintConfig -> extends 末尾添加 -> "prettier"
package.json -> lint-staged {} 中添加 -> ts,tsx

- [@commitlint](https://github.com/conventional-changelog/commitlint)
  npm install --save-dev @commitlint/{config-conventional,cli}

echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js

npx husky add .husky/commit-msg 'npx --no -- commitlint --edit ${1}'
