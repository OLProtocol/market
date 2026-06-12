#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// 配置信息
const CONFIG = {
  remoteHost: '103.103.245.177',
  remotePath: '/var/www/app.ordx.market',
  localPath: path.join(__dirname, '..', 'out'),
  sshUser: 'root', // 可以根据实际情况修改用户名
  sshPort: process.env.DEPLOY_SSH_PORT || '20222',
  sshKey: '', // 如果有SSH密钥文件，可以在这里指定路径
};

// 颜色输出
const colors = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function error(message) {
  log(`❌ ${message}`, 'red');
}

function success(message) {
  log(`✅ ${message}`, 'green');
}

function info(message) {
  log(`ℹ️  ${message}`, 'blue');
}

function warning(message) {
  log(`⚠️  ${message}`, 'yellow');
}

// 检查本地out目录是否存在
function checkLocalPath() {
  if (!fs.existsSync(CONFIG.localPath)) {
    error(`本地目录不存在: ${CONFIG.localPath}`);
    error('请先运行 npm run build 或 yarn build 生成out目录');
    process.exit(1);
  }
  success(`本地目录检查通过: ${CONFIG.localPath}`);
}

// 构建rsync命令
function buildRsyncCommand() {
  let command = 'rsync';
  
  // 基本参数
  const args = [
    '-avz', // archive, verbose, compress
    '--delete', // 删除目标目录中源目录没有的文件
    '--progress', // 显示传输进度
    '--exclude=node_modules', // 排除node_modules
    '--exclude=.git', // 排除.git目录
    '--exclude=.DS_Store', // 排除.DS_Store文件
  ];

  // 如果有SSH密钥，添加密钥参数
  if (CONFIG.sshKey && fs.existsSync(CONFIG.sshKey)) {
    args.push(`-e "ssh -p ${CONFIG.sshPort} -i ${CONFIG.sshKey}"`);
  } else {
    args.push(`-e "ssh -p ${CONFIG.sshPort}"`);
  }

  // 添加源路径和目标路径
  args.push(`${CONFIG.localPath}/`);
  args.push(`${CONFIG.sshUser}@${CONFIG.remoteHost}:${CONFIG.remotePath}/`);

  return `${command} ${args.join(' ')}`;
}

// 执行部署
function deploy() {
  try {
    info('开始部署...');
    
    // 检查本地路径
    checkLocalPath();
    
    // 构建rsync命令
    const rsyncCommand = buildRsyncCommand();
    
    info(`执行命令: ${rsyncCommand}`);
    
    // 执行rsync命令
    execSync(rsyncCommand, { 
      stdio: 'inherit',
      cwd: process.cwd()
    });
    
    success('部署完成！');
    info(`文件已上传到: ${CONFIG.remoteHost}:${CONFIG.remotePath}`);
    
  } catch (err) {
    error('部署失败！');
    error(err.message);
    
    // 提供一些常见问题的解决方案
    console.log('\n可能的解决方案:');
    console.log('1. 确保远程服务器可以访问');
    console.log('2. 检查SSH连接是否正常');
    console.log('3. 确认远程目录权限');
    console.log('4. 如果使用SSH密钥，请检查密钥文件路径');
    
    process.exit(1);
  }
}

// 主函数
function main() {
  console.log('🚀 开始部署到远程服务器...\n');
  
  // 显示配置信息
  info('部署配置:');
  console.log(`  远程主机: ${CONFIG.remoteHost}`);
  console.log(`  远程路径: ${CONFIG.remotePath}`);
  console.log(`  本地路径: ${CONFIG.localPath}`);
  console.log(`  SSH用户: ${CONFIG.sshUser}`);
  if (CONFIG.sshKey) {
    console.log(`  SSH密钥: ${CONFIG.sshKey}`);
  }
  console.log('');
  
  // 执行部署
  deploy();
}

// 如果直接运行此脚本
if (require.main === module) {
  main();
}

module.exports = { deploy, CONFIG }; 
