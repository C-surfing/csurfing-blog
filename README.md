<div align="center">

# 🚀 Csurfing's Agent Lab

**csurfing.xyz — 个人博客 · 知识库 · AI Agent 学习笔记**

[![Website](https://img.shields.io/badge/网站-csurfing.xyz-22c55e?style=for-the-badge&logo=cloudflare&logoColor=white)](https://csurfing.xyz/)
[![Astro](https://img.shields.io/badge/Astro-7-orange?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![Deploy](https://img.shields.io/badge/Deploy-Cloudflare%20Pages-f38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://pages.cloudflare.com/)
[![License](https://img.shields.io/badge/License-Apache--2.0-blue?style=for-the-badge&logo=apache)](LICENSE)
[![RSS](https://img.shields.io/badge/RSS-订阅-ee802f?style=for-the-badge&logo=rss&logoColor=white)](https://csurfing.xyz/rss.xml)
[![Lint](https://github.com/C-surfing/csurfing-blog/actions/workflows/lint.yml/badge.svg)](https://github.com/C-surfing/csurfing-blog/actions/workflows/lint.yml)

软件工程学生 · Home Lab 玩家 · Agent 生态观察者

</div>

---

## 📝 关于本站

这里是 [csurfing.xyz](https://csurfing.xyz/) 的源码与内容仓库。我用它记录:

- **AI Agent 与记忆系统** —— Agent 记忆架构、技能治理、记忆工程
- **工程实践** —— WSL 调优、Vibe Coding、工作流沉淀
- **学习笔记** —— 数学 / 物理 / C++ 复习笔记、深度学习基础

写作闭环:Zotero 划线高亮 → 融合思考 → 博客文章发布,内容全部沉淀在这个仓库的 `src/content/posts/`。

## 🏷️ 仓库归属

本仓库是 **csurfing.xyz 的个人源码 + 内容仓库**,由我 [@C-surfing](https://github.com/C-surfing) 独立维护:

- 站点起步于 Astro 主题 [Mizuki](https://github.com/LyraVoid/Mizuki),此后作为**独立分支演进** —— 不跟随上游合并,站点配置、页面、内容、脚本与部署链路均由我个人维护。
- 本仓库**不是 GitHub fork**(无上游 fork 关系)。仓库保留上游提交历史与旧版本 tag 是为了记录主题的来路,历史中出现的上游作者提交属于遗留记录,**仓库的所有权与维护者不是主题作者**。
- 上游署名与许可见 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md);文章内容版权归作者本人所有。

## 🔧 我做了什么改造

主题代码基本保持原样,改造集中在**内容、页面、配置、工程链路**四层 —— 全部可在仓库里逐项点开核对。

### 1️⃣ 内容层

| 项 | 规模 | 入口 |
| :--- | :--- | :--- |
| 原创文章 | 22 篇 | [`src/content/posts/`](src/content/posts/) |
| 知识库 wiki | 7 篇 | [`src/content/wiki/`](src/content/wiki/) |
| 学习笔记 PDF | 自建归档 | [`public/pdfs/`](public/pdfs/),文章内可内嵌阅读 |
| 写作闭环 | Zotero 划线 → 融合思考 → 发布 | 见《个人 Workflow 优化》 |

### 2️⃣ 页面层(自建 / 深度定制)

`skills` · `bookmarks` · `wiki` · `projects` · `timeline` · `diary` · `devices` · `friends` · `guestbook` · `albums`

收藏夹的**分类顺序由 [`src/pages/bookmarks.astro`](src/pages/bookmarks.astro) 里的 `categoryOrder` 硬编码控制**(Agent / 学习 / 408 / Research / 资源榜单 / 工具 / 创业 / 其他)。

### 3️⃣ 配置层

[`src/config/`](src/config/) 下 18 个配置文件全部个人化:站点信息、导航栏、侧栏、公告、背景壁纸、音乐播放器、评论、看板娘、页脚署名、友链等。

### 4️⃣ 工程层

- **部署**:Cloudflare Pages —— push 到 `main` → GitHub Actions 构建 → `pages` 分支
- **构建链**:`pnpm build` = 抓取番剧/追番数据 → `astro build` → Pagefind 站内搜索索引 → 字体子集压缩
- **维护脚本** [`scripts/`](scripts/)(11 个):`new-post` 建文章、`sync-content` 内容同步、`update-anime` / `update-bangumi` / `update-bilibili` 数据抓取、`indexnow-submit` 主动推搜索引擎、`compress-fonts` 字体压缩
- **自建规范** [`docs/rule/`](docs/rule/):组件架构 / 组件拆分 / 文件组织 / CSS 风格 / Atom 组件 / 侧栏组件 / 图标使用 —— 7 篇

## 📚 内容索引

<details open>
<summary><b>🤖 AI Agent / 记忆系统</b> (9)</summary>

| 文章 | 说明 |
| :--- | :--- |
| [Agent Memory OS](src/content/posts/agent-memory-os.mdx) | Agent 记忆操作系统全景 |
| [TencentDB Agent Memory Design](src/content/posts/tencentdb-agent-memory-design.mdx) | 腾讯云记忆系统设计 |
| [Claude Code Memory System](src/content/posts/claude-code-memory-system-design.mdx) | Claude Code 记忆系统设计 |
| [Memory Extraction](src/content/posts/memory-extraction.mdx) | 记忆提取 |
| [Memory Organization](src/content/posts/memory-organization.mdx) | 记忆组织 |
| [Agent Evolution & Skill Governance](src/content/posts/agent-evolution-skill-governance.mdx) | Agent 演进与技能治理 |
| [PI Agent Skill Registry Deep Dive](src/content/posts/pi-agent-skill-registry-deep-dive.mdx) | PI Agent 技能注册表剖析 |
| [Modern Agent 01: Reasoning & Planning](src/content/posts/modern-agent-01-reasoning-planning.mdx) | 现代 Agent 推理与规划 |
| [Foundation Model Intro](src/content/posts/foundation-model-intro.mdx) | 大模型入门 |

</details>

<details open>
<summary><b>🛠️ 工程实践</b> (9)</summary>

| 文章 | 说明 |
| :--- | :--- |
| [个人 Workflow 优化](src/content/posts/personal-workflow-optimization.mdx) | 个人工作流沉淀(融合《vibe 时代的软件工程》) |
| [React + TS Vibe Coding](src/content/posts/react-ts-vibe-coding-guide.mdx) | Vibe Coding 实战指南 |
| [Codex 断网思考](src/content/posts/codex-disconnect-network-think.mdx) | Codex 使用心得 |
| [LangChain vs LangGraph](src/content/posts/langchain-vs-langgraph-react.mdx) | React Agent 框架对比 |
| [WSL2 ext4 VHDX 瘦身](src/content/posts/wsl2-ext4-vhdx-compact.md) | WSL 磁盘清理 |
| [麒麟 V11 + VMware](src/content/posts/kylin-v11-vmware-setup.mdx) | 麒麟系统虚拟机部署 |
| [Mizuki 部署笔记](src/content/posts/mizuki-deploy-notes.md) | 本站搭建记录 |
| [Ontology vs DDD](src/content/posts/ontology-vs-ddd-palantir.mdx) | 领域建模对比 |
| [Git 指南](src/content/posts/git-guide.mdx) | Git 使用指南 |

</details>

<details>
<summary><b>📖 学习笔记</b> (4)</summary>

| 文章 | 说明 |
| :--- | :--- |
| [高等数学期末复习](src/content/posts/advanced-math-final-review.mdx) | 高数复习笔记 |
| [大学物理期末复习](src/content/posts/college-physics-final-review.mdx) | 大物复习笔记 |
| [C++ 期末复习](src/content/posts/cpp-final-review.mdx) | C++ 复习笔记 |
| [相对论与人生哲学](src/content/posts/relativity-and-life-philosophy.mdx) | 物理与哲思 |

</details>

<details>
<summary><b>📔 Wiki 短笔记</b> (7)</summary>

| 笔记 | 说明 |
| :--- | :--- |
| [AI Hero Skills Pipeline](src/content/wiki/ai-hero-skills-pipeline.md) | 技能流水线 |
| [DevSpace Chat Mode](src/content/wiki/devspace-chat-mode-local.md) | 本地部署笔记 |
| [Memory Extraction Special](src/content/wiki/memory-extraction-special.md) | 记忆提取专题 |
| [Memory Organization Special](src/content/wiki/memory-organization-special.md) | 记忆组织专题 |
| [记忆科学播客摘录](src/content/wiki/memory-science-podcast-quotes.md) | 播客划线 |
| [opencodex Provider Proxy](src/content/wiki/opencodex-provider-proxy.md) | 通用 provider 代理 |
| [生硬 AI Infra 摘录](src/content/wiki/shengying-ai-infra-quotes.md) | 摘录整理 |

</details>

## 🧱 技术栈

| 层 | 选型 |
| :--- | :--- |
| 框架 | [Astro](https://astro.build) + TypeScript |
| 主题起点 | [Mizuki](https://github.com/LyraVoid/Mizuki)(深度定制,独立演进) |
| 内容 | MDX / Markdown + Pagefind 站内搜索 |
| 部署 | Cloudflare Pages(GitHub Actions 自动构建,`pnpm build` → `dist/`) |
| 依赖管理 | pnpm workspace |
| 代码规范 | Biome(`pnpm lint`) |

## 🚀 本地开发

```bash
pnpm install
pnpm dev        # 本地预览 http://localhost:4321
pnpm build      # 构建到 dist/
pnpm preview    # 预览构建产物
```

## 📁 仓库结构

```text
csurfing-blog/
├── src/
│   ├── content/
│   │   ├── posts/         # 📝 全部文章(MDX/MD)
│   │   └── wiki/          # 📔 短笔记
│   ├── config/            # ⚙️ 站点配置(导航、资料、评论、公告…)
│   └── pages/             # 🧩 页面(含自建页面)
├── public/
│   ├── pdfs/              # 📄 学习笔记 PDF 归档
│   └── music/             # 🎵 音乐播放器资源
├── docs/                  # 📚 自建规范 + 上游参考文档
│   └── rule/              # 组件/样式规范(自建 7 篇)
├── scripts/               # 🔧 发布/维护脚本(11 个)
├── .github/workflows/     # CI:lint / 自动部署
└── astro.config.mjs
```

## 📜 许可与署名

- 本站源码基于 **Apache-2.0**([LICENSE](LICENSE))。
- 主题起点 [Mizuki](https://github.com/LyraVoid/Mizuki)(Apache-2.0)← 衍生自 [Fuwari](https://github.com/saicaca/fuwari)(MIT),上游署名与完整许可证文本见 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。
- `src/content/` 下的**文章与笔记内容版权归作者(Csurfing)所有**,转载请注明出处并附原文链接。

---

<p align="center">✨ 持续记录 · 持续进化 · <a href="https://csurfing.xyz">csurfing.xyz</a></p>
