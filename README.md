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

- json-server
  REST API
  GET /tickets // 列表
  GET /tickets/12 // 详情
  POST /tickets // 增加
  PUT /tickets/12 // 替换
  PATCH /tickets/12 // 修改
  DELETE /tickets/12 // 删除

POST 方法, 添加子资源时调用 POST 方法
PUT HTTP 方法未更改意味着, 如果您多次重试请求，那将等于一次请求转换。
PATCH HTTP 方法被认为是非幂等的.如果您多次重试请求，您最终将拥有多个具有不同 URI 的资源。

mkdir server & cd server & echo { \'users\': [] \}>db.json

-- postman 见相关配置
form-data
等价于 http 请求中的 multipart/form-data,它会将表单的数据处理为一条消息

x-www-form-urlencoded ✓
即 application/x-www-from-urlencoded，将表单内的数据转换为 Key-Value。

raw
raw 对应的是入参是任意格式的可以上传任意格式的文件，可以上传 text、json、xml、html

binary
Content-Type:application/octet-stream,只可以上传二进制数据，通常用来上传文件，但是一次只能上传一个文件

!!!important 安装 imooc-jira-tool,不需要手动 install

npx imooc-jira-tool

进行 register 之前先删除
npx msw init public
