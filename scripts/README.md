# 部署脚本使用说明

这个目录包含了将项目部署到远程服务器的脚本。

## 文件说明

- `deploy.js` - Node.js版本的部署脚本
- `deploy.sh` - Shell版本的部署脚本
- `README.md` - 本说明文档

## 配置信息

默认配置：
- 远程主机：`103.103.245.177`
- 远程路径：`/var/www/app.ordx.market`
- 本地路径：`./out`（项目根目录下的out文件夹）
- SSH用户：`root`

## 使用方法

### 方法一：使用Node.js脚本

```bash
# 在项目根目录下运行
node scripts/deploy.js
```

### 方法二：使用Shell脚本

```bash
# 在项目根目录下运行
./scripts/deploy.sh
```

### 方法三：添加到package.json

在`package.json`中添加部署脚本：

```json
{
  "scripts": {
    "deploy": "node scripts/deploy.js",
    "deploy:shell": "./scripts/deploy.sh"
  }
}
```

然后运行：
```bash
npm run deploy
# 或者
yarn deploy
```

## 前置条件

1. **确保已构建项目**：
   ```bash
   npm run build
   # 或者
   yarn build
   ```

2. **确保out目录存在**：
   脚本会自动检查`./out`目录是否存在

3. **确保SSH连接正常**：
   - 能够通过SSH连接到远程服务器
   - 如果使用SSH密钥，请在脚本中配置密钥路径

## 自定义配置

### 修改SSH用户

编辑脚本文件，修改`SSH_USER`变量：

```javascript
// deploy.js
const CONFIG = {
  sshUser: 'your-username', // 修改为你的用户名
  // ...
};
```

```bash
# deploy.sh
SSH_USER="your-username"  # 修改为你的用户名
```

### 使用SSH密钥

如果需要使用SSH密钥，请在脚本中配置密钥路径：

```javascript
// deploy.js
const CONFIG = {
  sshKey: '/path/to/your/private/key', // 添加密钥路径
  // ...
};
```

```bash
# deploy.sh
SSH_KEY="/path/to/your/private/key"  # 添加密钥路径
```

## 脚本功能

- ✅ 自动检查本地out目录是否存在
- ✅ 使用rsync高效同步文件
- ✅ 自动排除不需要的文件（node_modules, .git等）
- ✅ 显示详细的传输进度
- ✅ 彩色输出，便于查看状态
- ✅ 错误处理和故障排除建议

## 故障排除

### 常见问题

1. **权限被拒绝**
   - 检查SSH连接是否正常
   - 确认远程目录权限
   - 检查SSH密钥是否正确

2. **本地目录不存在**
   - 先运行`npm run build`或`yarn build`
   - 确认out目录已生成

3. **网络连接问题**
   - 检查网络连接
   - 确认服务器IP地址正确
   - 检查防火墙设置

### 手动测试SSH连接

```bash
ssh root@103.103.245.177
```

### 手动测试rsync

```bash
rsync -avz --dry-run ./out/ root@103.103.245.177:/var/www/app.ordx.market/
```

## 注意事项

- 脚本会完全覆盖远程目录的内容
- 建议在部署前备份重要数据
- 确保远程服务器有足够的磁盘空间
- 如果遇到权限问题，可能需要联系服务器管理员 