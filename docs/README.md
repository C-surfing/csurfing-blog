# 文档索引

`docs/` 里放着两类东西:**本站自建的规范与素材**,以及**上游主题的参考文档**。建议按下面的分区查阅,不要把上游参考文档当成本站的实际配置。

## 🧩 本站自建

| 目录 | 内容 |
| :--- | :--- |
| [`rule/`](rule/) | 组件架构 / 组件拆分 / 文件组织 / CSS 风格 / Atom 组件 / 侧栏组件 / 图标使用 —— 7 篇自建规范 |
| [`editor/`](editor/) | 文章编辑器(`editor.html` + `editor.js` + `editor.css`) |
| [`image/`](image/) | 文档配图 |
| [`xhs-blog-intro/`](xhs-blog-intro/) | 小红书博客推广图素材(归档) |

## 📦 上游主题参考(Mizuki / Fuwari)

> ⚠️ 以下文档来自上游主题,描述的是**主题的通用能力**,不代表本站当前配置。本站实际部署为 **Cloudflare Pages + GitHub Actions**(见 [`.github/workflows/`](../.github/workflows/))。

| 文档 | 说明 |
| :--- | :--- |
| [CONTENT_SEPARATION.md](CONTENT_SEPARATION.md) | 内容分离完整指南(代码仓 / 内容仓拆分) |
| [CONTENT_REPOSITORY.md](CONTENT_REPOSITORY.md) | 内容仓库结构说明 |
| [MIGRATION_GUIDE.md](MIGRATION_GUIDE.md) | 单仓库 → 内容分离迁移 |
| [AUTO_BUILD_TRIGGER.md](AUTO_BUILD_TRIGGER.md) | 内容仓更新触发构建 |
| [DEPLOYMENT.md](DEPLOYMENT.md) | 多平台部署配置说明 |
| [PERFORMANCE_MONITORING.md](PERFORMANCE_MONITORING.md) | 性能监控工具配置 |

## 🔗 其他

- 仓库门面与改造清单:[../README.md](../README.md)
- 上游署名与许可:[../THIRD_PARTY_NOTICES.md](../THIRD_PARTY_NOTICES.md)
