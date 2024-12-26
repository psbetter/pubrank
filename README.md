Pubrank是一个论文投稿信息汇总平台。

## Getting Started
将项目根目录```.env.example```文件命名改为```.env```

按顺序执行

```bash
# 安装
pnpm i
# 数据迁移
pnpm migrate
# 运行
pnpm dev
```
可选命令
```bash
# 打包
pnpm build
# prisma后台启动
pnpm admin
# 代码检验
pnpm lint
# 安装husky
pnpm prepare
# 安装husky
pnpm test
# 规范提交
pnpm commit
# 发布并生成changelog
pnpm run release -- --release-as [major or minor or patch]
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

