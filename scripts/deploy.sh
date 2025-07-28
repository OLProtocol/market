#!/bin/bash

# 部署配置
REMOTE_HOST="103.103.245.177"
REMOTE_PATH="/var/www/app.ordx.market"
LOCAL_PATH="./out"
SSH_USER="root"
SSH_KEY=""  # 如果有SSH密钥，可以在这里指定路径

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 日志函数
log_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

log_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

log_error() {
    echo -e "${RED}❌ $1${NC}"
}

log_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

# 检查本地out目录是否存在
check_local_path() {
    if [ ! -d "$LOCAL_PATH" ]; then
        log_error "本地目录不存在: $LOCAL_PATH"
        log_error "请先运行 npm run build 或 yarn build 生成out目录"
        exit 1
    fi
    log_success "本地目录检查通过: $LOCAL_PATH"
}

# 构建rsync命令
build_rsync_command() {
    local rsync_args="-avz --delete --progress"
    
    # 排除不需要的文件
    rsync_args="$rsync_args --exclude=node_modules"
    rsync_args="$rsync_args --exclude=.git"
    rsync_args="$rsync_args --exclude=.DS_Store"
    
    # 如果有SSH密钥，添加密钥参数
    if [ -n "$SSH_KEY" ] && [ -f "$SSH_KEY" ]; then
        rsync_args="$rsync_args -e \"ssh -i $SSH_KEY\""
    fi
    
    echo "rsync $rsync_args $LOCAL_PATH/ $SSH_USER@$REMOTE_HOST:$REMOTE_PATH/"
}

# 执行部署
deploy() {
    log_info "开始部署..."
    
    # 检查本地路径
    check_local_path
    
    # 构建rsync命令
    local rsync_command=$(build_rsync_command)
    
    log_info "执行命令: $rsync_command"
    
    # 执行rsync命令
    if eval $rsync_command; then
        log_success "部署完成！"
        log_info "文件已上传到: $REMOTE_HOST:$REMOTE_PATH"
    else
        log_error "部署失败！"
        echo ""
        echo "可能的解决方案:"
        echo "1. 确保远程服务器可以访问"
        echo "2. 检查SSH连接是否正常"
        echo "3. 确认远程目录权限"
        echo "4. 如果使用SSH密钥，请检查密钥文件路径"
        exit 1
    fi
}

# 主函数
main() {
    echo "🚀 开始部署到远程服务器..."
    echo ""
    
    # 显示配置信息
    log_info "部署配置:"
    echo "  远程主机: $REMOTE_HOST"
    echo "  远程路径: $REMOTE_PATH"
    echo "  本地路径: $LOCAL_PATH"
    echo "  SSH用户: $SSH_USER"
    if [ -n "$SSH_KEY" ]; then
        echo "  SSH密钥: $SSH_KEY"
    fi
    echo ""
    
    # 执行部署
    deploy
}

# 运行主函数
main 