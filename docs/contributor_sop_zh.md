# 贡献者 SOP

## 工作模型

本仓库由独立 Paper Card 生成。每篇论文的可维护信息都只放在自己的
`paper_cards/library/cards/<entry_id>/` 目录；渲染器、静态站点、报告和
Review 工具直接读取 Card 库，而不读取共享论文索引。

| 内容 | 唯一维护位置 |
| --- | --- |
| 分类 taxonomy | `paper_cards/library/categories.yaml` |
| 论文元数据 | `paper_cards/library/cards/<entry_id>/paper.yaml` |
| 双语正文 | 同一 Card 的 `sources/` |
| 中文头、机构、人工判决、流程状态 | 同一 Card 内对应的 JSON 文件 |
| 图谱页、站点资源、报告 | 由 Card 库生成 |

## 新增或更新论文

1. 优先核验官方会议页、arXiv、DOI、项目页、作者代码库和数据发布页。
2. 新建或更新一个 Card；目录名必须与 `paper.yaml.id` 一致。
3. 在 `paper.yaml` 中维护元数据、数据对象、验证契约、构造过程、审计
   信息、官方链接、摘要和收录状态。
4. 新 Card 默认填一个 `category_ids` 分类；人工维护时可增减为零到两个
   受控分类。不要新增 Track 字段。
5. 完成 9 个英文和 9 个中文 section。未知事实必须明确标注待核验，不能
   凭印象补全。
6. 在同一 Card 中补齐中文头和机构；有证据后再保存本 Card 的人工判决。

## L4 质量要求

`01_problem`、`02_core_idea`、`03_method` 和 `05_novelty` 应说明一手
来源、数据对象、反馈契约、流程、可核验 artifact、复现限制和具体新意。
只有标题或泛泛评价不能达到 L4。

官方链接不等于可复用发布：链接存在并不能证明数据、许可证、划分或
verifier 可靠。请把未知项保留为未知。

## Review 与校验

```bash
python3 tools/paper_cards/card_tool.py check
python3 scripts/validate_data.py
PORT=8770 python3 tools/paper_cards/server.py
```

在 `http://127.0.0.1:8770/` 使用 Review：可编辑中文字段、手动增减到
至多两个分类、保存人工判决并晋升合格 Card。所有写入只发生在当前 Card
目录。工具更新后运行以下命令，统一局部分类镜像并删除废弃字段：

```bash
python3 tools/paper_cards/migrate.py library-normalize
```

Python 服务启动时会先检查并预热被 Git 忽略的派生缓存
`tmp/paper_cards/review-index.json`，然后才监听端口。缓存缺失或过期会自动
重建；重建失败时服务以非零状态退出，不展示不完整列表。手动增删 Card 目录后，
下一次请求会自动发现变化。

中文头字段不得留空：一句话评价、阅读优先级、论文类型、适合读者、置信度和作者显示
都必须填写；机构未知时必须明确勾选“没有机构”，写入 `no_institution: true`。

## 生成文件

不要手工修改 README、图谱页、站点资源、inventory 或报告。由 Card 库
重新生成：

```bash
python3 scripts/render_papers.py
python3 scripts/collect_sources.py
python3 scripts/summarize_counts.py
python3 scripts/render_readme.py
python3 scripts/render_site.py
```

随后运行对应的 `--check`、链接检查和数据校验。

## 同步 V2

只在干净工作区同步共享 V2：

```bash
git status --short
git fetch upstream V2
git merge --ff-only FETCH_HEAD
python3 tools/paper_cards/migrate.py library-normalize
python3 tools/paper_cards/card_tool.py check
python3 scripts/validate_data.py
```

除非维护者明确要求，否则不要使用 `pull`、`reset` 或非 fast-forward 合并。
