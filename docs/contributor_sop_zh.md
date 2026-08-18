# 贡献者 SOP

如何新增或修改一张卡片。真正重要的是这里的编辑判断；机制部分很短，因为 `library/`
是唯一的数据真源，所有对外呈现都由它生成。

[English](contributor_sop.md) · [开发文档](DEVELOPING.md) · [CONTRIBUTING.md](../CONTRIBUTING.md)

## 1. 不可违反的硬规则

- 不要只添加一个标题或一个裸链接。
- 不要猜测 arXiv 编号、发表页、DOI、代码仓库、数据集页、Hugging Face 页或项目主页。
- 不要掩盖不确定性。写 `unknown`，或把缺口记进 `needs`。
- 不要把 `training_use` 扩大到原文支持不了的范围。
- 不要把"论文链接已核实"当成数据、代码、许可、划分、验证器或谱系已知的证据。
- 不要把 API 密钥、OAuth secret、数据库连接串、令牌、私有提示词、内部日志，或含密钥的
  截图放进仓库任何位置。
- 每张卡片都要回答五个实际问题：来源、数据对象、反馈契约、构造方式、审计风险。

## 2. 什么该收录

如果一份工作能帮读者理解以下任意一点，就收录：

- 面向推理、数学、代码、证明、工具使用、智能体、评分标准或领域推理的数据发布。
- 其任务或判分可以充当反馈契约的评测基准。
- 验证器、奖励模型、过程奖励模型、评审、评分标准、环境、终止判定或评测框架。
- 构造配方：题目来源、教师轨迹生成、搜索、拒绝采样、过滤、自博弈、RLVR、蒸馏或发布元数据。
- 披露了后训练推理数据、奖励设计、RLVR、蒸馏、推理预算或数据配比的前沿模型报告。
- 会改变我们如何解读数据、验证器或推理预算的规模化与推理时计算研究。
- 审计与失效类论文：数据污染、泄漏、奖励投机、验证器欺骗、大模型评审攻击、虚假奖励、
  可复现性失效。
- 帮助读者在上述类别中导航的综述或入门材料。

不收录的情形：与推理数据、后训练、验证器设计、评测、构造或审计没有可见关联的通用模型论文；
已有一手来源时的二手博客或帖子；不带来新官方来源的重复条目；以及虽然有趣但不属于大模型
后训练推理数据范畴的工作。

## 3. 五句话初筛

动手建文件之前，先写下这五句话。写不出来，说明这份工作还不适合成卡。

1. 数据对象：「一条记录或一段轨迹包含……」
2. 反馈契约：「它的行为由……来检验」
3. 训练或评测用途：「它可以以……的方式进入后训练」
4. 构造配方：「这份数据由……产生」
5. 审计风险：「最可能让这个结论产生误导的是……」

## 4. 找官方来源

按这个顺序搜索，命中第一个官方结果就停：会议论文集页、arXiv、DOI、项目主页，然后是代码
或数据集仓库。**只登记你真正打开过的链接。** 如果确实找不到官方来源，照样建卡片，把缺失的
产物字段留空，并把缺口写进 `needs`，不要编造 URL。

论文链接只能证明论文存在，证明不了数据集、许可、划分策略或验证器。这些各有自己的字段，
每个字段填 `unknown` 都是合法答案。

## 5. 一张卡片的样子

`library/cards/<entry_id>/` 下一个目录对应一张卡片：

```text
library/cards/<entry_id>/
├── paper.yaml          # 元数据、五个维度、数据对象、构造配方、审计账本
├── header_zh.json      # 中文摘要、阅读优先级、论文类型、适合读者
├── institutions.json
├── queue.json          # 策展裁决
├── review.json         # 复核状态
└── sources/            # 01_problem.md 至 09_citation.md，每篇各配一个 _ch.md
```

`entry_id` 是小写连字符 slug，以发表年份结尾，例如
`math-shepherd-verify-and-reinforce-llm-math-reasoning-2024`。不要在末尾加 arXiv 或
会议编号，`scripts/normalize_library.py` 会把它们剥掉。

九个章节中英各一份：`01_problem`、`02_core_idea`、`03_method`、`04_evidence`、
`05_novelty`、`06_limitations`、`07_usefulness`、`08_reading_notes`、`09_citation`。
都是普通段落。**中文那份要写成中文**，不要写成带英文骨架的半成品——站点从不在同一页混用
语言，半翻译的章节在中文读者眼里就是英文。

## 6. 分类

`category_ids` 取自 `library/categories.yaml`。挂一个 id 是常态；当一篇论文确实同时属于
两个方向时挂两个。第一个 id 视为主方向。

五个维度取自 `library/vocabulary.yaml`，那是它们取值的唯一定义处：

- `source_role`——这份工作扮演什么角色
- `verification_contract`——谁来验证答案。刻意只有五个取值：卡片必须在 `programmatic`、
  `environmental`、`judgment_required`、`mixed`、`unknown` 中做出承诺，而不是描述奖励的形状
- `supervision_granularity`——标签附着在什么单位上
- `training_use`——被哪个训练目标消费
- `construction_layer`——贡献在流水线的哪个环节

如果需要的取值不存在，就在 `vocabulary.yaml` 里补上中英两个标签，或者加一条指向规范取值的
同义词。不要凭空使用未登记的取值：构建会拒绝发布这样的卡片。

## 7. 写策展字段

`data_object`、`recipe_metadata` 与 `audit` 是让卡片比一条引用更有价值的部分，而且会在
站点上公开。

- 写清那条记录，而不是那篇论文。「一条记录是一个 Lean 4 定理陈述加一段由 Lean 校验的证明脚本」
  远胜于「形式化证明数据」。
- 区分"已发布"与"仅有报告"。2,170 行的评测集不能证明 1,000 万条训练轨迹也发布了。
- 原文给了数字就写上数字，没给就明确说没给。
- 在 `audit` 里写读者真会撞上的失效：未说明的答案归一化、版本未知的评审模型、声称互斥但
  未提供证据的数据划分。
- `unknown` 本身就是一个结论。写出来，而不是把字段留空。

一句话摘要要在一句话里说清：这份工作发布了什么，由什么来检验。避免"新颖"、"最先进"，
以及摘要支持不了的任何断言。

## 8. 审核裁决

`queue.json` 里的 `manual_annotation.search_status` 决定是否发布：

| 裁决 | 效果 |
|---|---|
| `promoted` | 发布。 |
| `candidate` | 发布；仍在考虑中。 |
| `rejected` | 留在库中，永不发布。 |
| 缺失 | 视为未审核，不发布。 |

排除规则在 `atlas.yaml` 里，其中 `excluded_ids` 用于处理这种情况：一位策展人收录了某张
卡片，而另一位在别的方向上否决了它。

## 9. 跑检查

```bash
python scripts/validate_library.py      # 这张卡片的结构合法吗
python scripts/build_site.py            # 重新生成 docs/
python scripts/render_docs.py           # 重新生成 README、papers/、封面页脚
python scripts/render_exports.py        # 重新生成 exports/
python scripts/build_site.py --check    # 已提交的产物还与库一致吗
python scripts/render_docs.py --check
python scripts/render_exports.py --check
python scripts/serve.py                 # 在 http://127.0.0.1:8787 预览
```

`validate_library.py` 把"破坏"与"单薄"分开。**错误**意味着这张卡片会以错误的方式发布：
缺标题、方向 id 未知、维度取值不在词表内。**警告**意味着卡片单薄，或带着批次导入的残留字段；
这些只记录、不阻塞。加 `--strict` 则警告也算失败。

`--check` 模式会在临时目录重新渲染并比对。它能证明已提交的产物与库一致，但**证明不了库本身
是对的**——那是校验器和你自己阅读的职责。

## 10. 批次导入

新到的一批卡片走 `incoming/`：

```bash
python scripts/inspect_batches.py "incoming/<批次>"        # 只读盘点
python scripts/merge_batches.py  "incoming/<批次>"         # 试运行
python scripts/merge_batches.py  "incoming/<批次>" --apply --union-tracks
python scripts/dedupe_papers.py                            # 然后 --apply
python scripts/normalize_library.py                        # 然后 --apply
```

`merge_batches.py` 把每个 `entry_id` 收敛为一张卡片，保留内容最完整的那一版。
`dedupe_papers.py` 处理它抓不到的情况：同一篇论文以不同 id 被收录了两次。
`normalize_library.py` 归并维度同义词、剥掉 id 上的会议编号，并把 `one_line_summary`
确立为唯一的摘要字段。三者都默认试运行，且会把每张被覆盖的卡片备份到 `.backup/<时间戳>/`。

## 11. 完成的定义

- 五句话初筛写得出来，且站得住。
- 每个产物链接都真正打开过，没有任何一处是猜的。
- 中英两份都完整，且各自读起来就是那门语言。
- 维度取值在 `library/vocabulary.yaml` 内，`category_ids` 在 `library/categories.yaml` 内。
- 缺口由 `unknown` 与 `needs` 承载，而不是一个听起来很确定的猜测。
- `validate_library.py` 报告零错误。
- 三个 `--check` 全部通过，说明已提交的站点、README、方向页与导出都与库一致。
