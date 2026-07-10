# 项目扩展中文 SOP：如何规模化维护 Awesome LLM Reasoning Data

> 英文版本见 [Contributor SOP](contributor_sop.md)。

这份 SOP 是给新同学执行 `Awesome-LLM-Reasoning-Data` 扩展工作的标准作业流程。请严格执行。这个项目不是普通论文列表，目标也不是把论文数量堆上去，而是把“大模型后训练推理数据”整理成一个可以学习、检索、引用、审计和复用的研究图谱。

## 0. 项目目标

本项目要帮助读者回答一个核心问题：

> 当一个模型经过后训练后推理能力变强，到底是什么数据对象、反馈信号、verifier、reward、environment、judge 或 construction recipe 让这个提升成为可能？

因此，每一次贡献都必须服务于下面四层结构：

1. `README.md`：项目首页和整体导航。
2. `docs/`：学习文档、概念解释和阅读路线。
3. `papers/`：按研究方向和细分领域组织论文。
4. `paper_cards/`：把重要论文、数据集、verifier、agent environment、recipe、benchmark、failure case 写成可审计的 paper card。
5. `data/`：结构化元数据源，驱动 README、网站、paper pages、exports、reports 和 Ask the Atlas 的 RAG corpus。

任何修改都应该让项目更准确、更有用、更可审计，而不是更长、更花哨。

## 1. 不可违反的硬规则

- 不允许只添加论文标题或裸链接。
- 不允许猜 arXiv ID、venue page、DOI、GitHub repo、dataset page、Hugging Face page、project page。
- 没有官方 primary source 时，不允许把条目标记为 `verified`。
- 没有完整双语 paper-card source 且不能通过校验时，不允许标记为已复核状态。
- 不允许隐藏不确定性。缺失信息必须写成 `unknown`、`needs_search`、`needs_url`、`needs_metadata` 或 `ambiguous`。
- 不允许把 `training_use` 写得比论文证据支持的范围更大。
- 不允许把“论文链接已验证”理解成“数据、代码、license、split、verifier、lineage 都已清楚”。
- 不允许把 API key、OAuth secret、数据库 URL、Redis token、私有 prompt、内部日志、含 secret 的截图放进仓库。
- 每篇论文或 paper-card source 必须回答五件事：source、data object、feedback、construction/selection、audit risk。

## 2. 项目文件地图

| 区域 | 文件或目录 | 作用 |
|---|---|---|
| 主元数据 | `data/papers.yaml` | 所有论文、数据集、model report、benchmark、verifier 的结构化源。 |
| 数据 schema | `data/schema.json` | 必填字段和枚举值。 |
| 研究方向 | `data/categories.yaml`, `data/research_tracks.yaml` | 3 个 paper-atlas 大区、14 个 track，以及每个 track 的细分方向。 |
| Starter paths | `data/starter_packs.yaml` | 给初学者和不同读者的阅读路线。 |
| Paper-card sources | `paper_cards/` | 双语 review card 源文件。 |
| Paper pages | `papers/` | 由脚本生成的研究方向页面。 |
| Website | `docs/index.html`, `docs/assets/*` | GitHub Pages 可搜索网站。 |
| Ask assistant | `docs/ask/`, `apps/ask-atlas/` | Ask the Atlas 前端和后端。 |
| Reports | `reports/` | coverage、needs_search、link_check、release notes、quality audit。 |
| 贡献规则 | `CONTRIBUTING.md`, `.github/PULL_REQUEST_TEMPLATE.md` | 对外贡献要求和 PR checklist。 |

新同学第一天应先读：

1. `README.md`
2. `docs/00_start_here.md`
3. `docs/01_what_is_post_training_reasoning_data.md`
4. `docs/contributor_sop_zh.md`
5. `CONTRIBUTING.md`
6. 任选 3 个已复核 paper-card source，例如 `paper_cards/sources/<entry_id>/`

## 3. 标准工作流总览

每个 batch 都必须按下面顺序做：

1. 选择一个工作队列。
2. 搜索官方来源。
3. 判断条目是否应该收录。
4. 新增或更新 `data/papers.yaml`。
5. 如果条目足够重要，创建或改进 paper card。
6. 重新生成派生文件。
7. 运行 QA 检查。
8. 提交 PR，并说明证据和剩余 unknown。
9. Reviewer 检查 metadata、links、cards、generated outputs。
10. CI 通过后才允许合并。

建议新同学一次 PR 处理 3-8 个条目。不要一次塞几十篇论文，这会让 review 质量下降。

## 4. 工作队列类型

每个 PR 只做一种队列，不要混杂。

| 队列 | 任务 | 主要文件 |
|---|---|---|
| needs-search 清理 | 给缺失条目找官方论文、代码、数据、项目链接。 | `reports/needs_search.md` |
| 链接验证 | 确认 paper/code/data/project/HF 是否官方。 | `reports/link_coverage.md`, `reports/link_check.md` |
| L1 到 L3 晋级 | 补 summary、data object、audit note。 | `data/papers.yaml` |
| Paper-card creation | 给高影响力条目写双语 paper-card source。 | `paper_cards/README.md`, `docs/paper_card_sop.md` |
| Review 晋级 | 去掉模板化内容，补足 audit-ready 信息。 | `paper_cards/sources/` + `data/papers.yaml` |
| Track enrichment | 强化某一个 paper track 或 subfield。 | `papers/`, `data/research_tracks.yaml` |
| Website/Ask sync | 元数据变更后同步网站和 Ask RAG。 | `docs/assets/`, `apps/ask-atlas/` |

## 5. 候选论文筛选 SOP

### 5.1 可以收录的内容

如果一个工作能帮助读者理解以下任意方面，就可以考虑收录：

- 推理、数学、代码、证明、工具使用、agent、rubric、domain reasoning 的数据 release。
- benchmark，并且它的 task 或 scoring 能成为 feedback contract。
- verifier、reward model、PRM、judge、rubric、environment、terminal predicate、evaluation harness。
- construction recipe：prompt sourcing、teacher trace generation、search、rejection sampling、filtering、self-play、RLVR、distillation、release metadata。
- frontier model report：披露了后训练推理数据、reward design、RLVR、distillation、inference budget、data mixture。
- scaling 或 test-time compute 研究：影响我们理解 data scaling、verifier scaling 或 inference budget。
- audit/failure 论文：contamination、leakage、reward hacking、verifier gaming、LLM-as-judge attack、spurious reward、reproducibility failure。
- survey/primer：帮助读者理解这些方向的背景和路线。

### 5.2 不应该收录的内容

不要收录：

- 只是一篇泛泛的模型论文，看不出和 reasoning data、post-training、verifier、evaluation、construction、audit 的关系。
- 只有二手博客或帖子，但 primary source 已存在。
- 与已有条目重复，且没有新增官方来源。
- 找不到官方来源，也不值得保留为 `needs_search` lead。
- 与 LLM 后训练推理数据无关，即使论文很有趣。

### 5.3 五句话初筛

动手改文件前，先写出这五句话：

1. Data object：一个样本或 episode 里面包含什么？
2. Feedback contract：这个行为由什么系统判断好坏？
3. Training/evaluation use：它可以怎样进入 post-training 或 evaluation？
4. Construction recipe：这些数据是如何被产生、筛选或组织的？
5. Audit risk：如果这篇工作被误解，最可能误导人的地方是什么？

如果这五句话写不出来，不要晋级，不要写成 `verified` 或 L5。

## 6. 官方来源搜索 SOP

只记录官方来源。优先级如下：

1. Venue 页面：ACL Anthology、OpenReview、PMLR、NeurIPS proceedings、CVF、ACM、IEEE、Springer、Nature/Science、官方会议页面。
2. arXiv abs 页面，不优先使用 raw PDF。
3. DOI 页面。
4. 作者或机构官方 project page。
5. 作者或机构官方 code repository。
6. 官方 dataset/model page，包括官方 Hugging Face release。
7. 只有在没有 primary paper 时，才使用 secondary source，并且必须标清楚。

每个官方来源需要记录：

- exact title；
- year；
- venue/source；
- official URL；
- authors，如果官方来源可见；
- official code URL；
- official data URL；
- official Hugging Face URL；
- official project page；
- license/provenance notes；
- 仍然缺失的字段。

不要从论文标题推测 GitHub 或 HF。官方来源没有写，就保持 `null`。

## 7. 研究 Track 分类 SOP

每个 entry 应该拥有一个或多个 `category`。当前项目有 14 个 track，
并且被组织成三个 paper-atlas 大区：Background / Foundations、Core Reasoning Data Types、Data Lifecycle。

| category id | 研究方向 |
|---|---|
| `foundations_and_primers` | Foundations & Primers |
| `instruction_demonstration_rationale_data` | Instruction / Demonstration / Rationale Data |
| `preference_reward_feedback_data` | Preference & Reward Feedback Data |
| `programmatically_verifiable_outcome_data` | Programmatically Verifiable Outcome Data |
| `process_trace_supervision_data` | Process / Trace Supervision Data |
| `rollout_search_test_time_trace_data` | Rollout / Search / Test-Time Trace Data |
| `environment_agent_trajectory_data` | Environment & Agent Trajectory Data |
| `judgment_rubric_domain_expert_data` | Judgment / Rubric / Domain-Expert Data |
| `data_construction_open_release_recipes` | Data Construction & Open Release Recipes |
| `training_usage_optimization_objectives` | Training Usage & Optimization Objectives |
| `scaling_rlvr_test_time_compute` | Scaling, RLVR & Test-Time Compute |
| `benchmarks_evaluation_surfaces` | Benchmarks & Evaluation Surfaces |
| `frontier_reports_data_disclosure_ledger` | Frontier Reports & Data Disclosure Ledger |
| `audit_failure_contamination_verifier_attacks` | Audit, Failure, Contamination & Verifier Attacks |

细分方向来自 `data/research_tracks.yaml`。页面 renderer 会根据关键词、tags、domains、summary 和 inclusion_reason 推断 subfield，所以你写 metadata 时要具体，不能只写泛泛的 `reasoning`。

## 8. `data/papers.yaml` 填写 SOP

### 8.1 必填字段

每个 entry 必须满足 `data/schema.json` 的要求：

```yaml
id:
title:
year:
venue:
authors:
source_role:
verification_contract:
supervision_granularity:
domains:
training_use:
construction_layer:
artifacts:
data_object:
recipe_metadata:
audit:
inclusion_reason:
related:
tags:
status:
```

项目实际还常用这些字段：

```yaml
category:
one_line_summary:
why_it_matters:
card:
needs:
verification:
curation_level:
```

### 8.2 ID 规则

- 使用 lowercase kebab-case。
- 必要时加入年份。
- 一旦 card 或页面引用了 ID，不要随意改。
- 发现重复时，优先更新已有 entry，不要创建第二个 active entry。

示例：

```yaml
id: prm800k-2023
id: deepseek-r1-2025
id: webarena-a-realistic-web-environment-for-building-autonomous-agents-2023
```

### 8.3 枚举值规则

只能使用 `data/schema.json` 里的枚举值。

`source_role`：

- `model_report`
- `data_release`
- `benchmark`
- `verifier_reward`
- `process_supervision`
- `agent_environment`
- `construction_recipe`
- `scaling_study`
- `audit_failure`
- `survey_background`
- `infrastructure`
- `related_awesome_list`

`verification_contract`：

- `programmatic`
- `environmental`
- `judgment_required`
- `mixed`
- `unknown`

`supervision_granularity`：

- `answer_level`
- `step_level`
- `state_action_level`
- `full_episode`
- `pairwise_preference`
- `scalar_reward`
- `process_reward`
- `trajectory_value`
- `unknown`

`training_use`：

- `sft`
- `distillation`
- `preference_learning`
- `reward_modeling`
- `process_supervision`
- `rlvr`
- `agent_training`
- `evaluation`
- `audit`
- `safety_alignment`
- `test_time_compute`
- `unknown`

`construction_layer`：

- `prompt_sourcing`
- `trace_writing`
- `search_substrate`
- `self_play_anchor`
- `reward_verifier_layer`
- `optimizer_scaffold`
- `frontier_pipeline`
- `scaling_report`
- `release_audit`

`status`：

- `verified`
- `partial`
- `needs_url`
- `needs_metadata`
- `needs_search`
- `ambiguous`
- `misattributed`
- `duplicate`
- `excluded`

### 8.4 artifacts 字段

使用下面结构：

```yaml
artifacts:
  paper: null
  arxiv: null
  code: null
  data: null
  project: null
  huggingface: null
  doi: null
  venue: null
  openreview: null
  acl: null
  pmlr: null
  cvf: null
  bibtex: null
```

规则：

- `paper` 写最合适的 primary paper/report URL。
- `arxiv` 写 arXiv abs URL。
- `venue`、`openreview`、`acl`、`pmlr`、`cvf`、`doi` 写官方 citation links。
- `code`、`data`、`project`、`huggingface` 必须是官方来源。
- 缺失就保持 `null`。
- 有 abs 页面时，不优先使用 raw PDF。

### 8.5 data_object 字段

`data_object` 描述一个可复用 record 到底包含什么：

```yaml
data_object:
  prompt_source:
  trace_author:
  answer_format:
  process_fields:
  environment_or_substrate:
  verifier_or_reward:
  terminal_predicate:
```

填写时问：

- prompt/task/context 来自哪里？
- trace/action 是谁生成的？
- answer/artifact 是什么格式？
- 有没有 step labels、tool calls、rollouts、preference pairs、rewards、environment states、terminal outcomes？
- 什么系统判断行为好坏？
- 成功终止条件是什么？

官方来源没有披露就写 `unknown`。

### 8.6 recipe_metadata 字段

`recipe_metadata` 描述数据如何被构建：

```yaml
recipe_metadata:
  base_model:
  teacher:
  generator:
  filtering_rule:
  sampling_protocol:
  rollout_count:
  temperature:
  inference_budget:
  optimizer_or_scaffold:
```

不要发明 base model、teacher、sampling details。如果论文只说 “strong model” 或 “filtered by correctness”，就把这个模糊性写进 `audit.notes`。

### 8.7 audit 字段

使用下面结构：

```yaml
audit:
  source_mixture:
  split:
  decontamination:
  license:
  lineage:
  known_failure_modes:
  citation_status:
  confidence:
  notes:
```

至少检查：

- source mixture 是否披露？
- train/test/dev split 是否披露？
- decontamination 或 overlap check 是否披露？
- license/provenance 是否清楚？
- teacher/data lineage 是否清楚？
- 有什么 false positive、false negative、leakage、reward hacking、judge attack、reproducibility failure 风险？
- confidence 应该是 `high`、`medium` 还是 `low`？

### 8.8 summary 写法

`one_line_summary` 必须是具体、事实性的句子。

好例子：

> Provides step-level human labels for mathematical reasoning traces and trains process reward models to identify correct intermediate reasoning.

坏例子：

> Important paper for LLM reasoning.

`why_it_matters` 必须说明它为什么对后训练推理数据重要，而不是为什么它有名。

好例子：

> It is the process-supervision anchor for moving from answer-level math rewards to step-level feedback in reasoning-model training and evaluation.

坏例子：

> It is useful for LLMs.

## 9. status 和 curation_level 晋级 SOP

`status` 表示 citation/metadata 状态，`curation_level` 表示 atlas 深度。

| Level | 含义 | 最低要求 |
|---|---|---|
| `L0_seeded` | 种子条目。 | 已知标题，官方链接可能缺失。 |
| `L1_link_verified` | 官方 primary link 已确认。 | `verification.link_verified=true`，有 paper/arXiv/venue/DOI。 |
| `L2_artifact_verified` | 官方 artifact 更多。 | code/data/HF/project/venue 等官方链接已检查。 |
| `L3_summary_ready` | summary 已能帮助读者。 | 有具体 `one_line_summary`、`why_it_matters`、data object 和 audit note。 |
| `L4_carded` | 已有 card。 | `card:` 指向真实 card，card 内有 `entry_id`。 |
| `L5_audit_ready` | card 已足够支持复用和审计判断。 | 无 placeholder，清楚写出 data object、verifier、construction、use、risk、official links。 |

晋级规则：

- `verified` 必须有官方 primary link。
- `L4_carded` 和 `L5_audit_ready` 必须有 card。
- `L5_audit_ready` 不能包含 “needs curator review”、大量 `unknown`、模板化空话。
- `partial` 可以有官方链接，但仍缺重要 release details。
- `needs_metadata` 表示条目大概率应该保留，但字段还不完整。
- `needs_search` 表示官方来源还没有固定下来。

## 10. Paper Card 制作 SOP

### 10.1 什么时候写 card

满足任一条件就应该写或改进 card：

- 在 starter pack 里；
- 是某个 research track 的核心论文；
- 引用高、复用可能性高；
- 是 data release、verifier、benchmark、agent environment、recipe、frontier report、scaling paper、failure/audit paper；
- 读者需要在不打开全文的情况下理解其 data object 和 feedback contract。

### 10.2 card 放在哪里

| 类型 | 目录 | 用途 |
|---|---|---|
| Release source | `paper_cards/sources/<entry_id>/` | 数据集、trace release、数据文档、可复用 artifact |
| Verifier source | `paper_cards/sources/<entry_id>/` | verifier、reward、PRM、judge、rubric |
| Agent source | `paper_cards/sources/<entry_id>/` | tool、web、OS、app、SWE、terminal/replay environment |
| Recipe source | `paper_cards/sources/<entry_id>/` | construction recipe、model report、pipeline |
| Benchmark source | `paper_cards/sources/<entry_id>/` | evaluation surface、benchmark ledger |
| Failure source | `paper_cards/sources/<entry_id>/` | contamination、leakage、reward hacking、judge attack、verifier gaming |

### 10.3 双语源文件要求

每个已复核 paper-card source 目录必须包含 `docs/paper_card_sop.md`
列出的 9 个英文文件和 9 个中文 `_ch.md` 文件。

Ask 链接由 preview/package 组合时生成，不要手写进 section 文件。使用下面命令校验：

```bash
python tools/paper_cards/card_tool.py check
```

PR 检查：

```bash
python tools/paper_cards/card_tool.py check
```

### 10.4 L5 review 推荐结构

现代 `L5_audit_ready` card 优先使用下面结构：

```markdown
## TL;DR
## 1. What is this work?
## 2. What data object does it expose?
## 3. What is the verifier / reward / judge / environment?
## 4. How is the data constructed?
## 5. How can it enter post-training?
## 6. What should readers audit?
## 7. What is missing or risky?
## 8. Why it matters for post-training reasoning data
## 9. Links and citation
```

旧 card 也可以使用兼容结构：

```markdown
## One-line takeaway
## Why this matters
## What is the data object?
## Verification contract
## Supervision granularity
## Construction recipe
## How it can be used
## Audit checklist
## Known limitations / failure modes
## Links
## Citation
```

### 10.5 card 写作检查表

每张 card 必须包含：

- TL;DR 或 one-line takeaway。
- 这篇工作是什么。
- data object 字段。
- verifier/reward/judge/environment。
- construction recipe。
- post-training use。
- audit questions。
- risks/limitations。
- official links 和 citation notes。

Agent/environment card 必须特别写清：

- environment；
- initial state；
- goal/constraints；
- action schema；
- observations；
- state diffs；
- terminal predicate；
- replayability；
- scaffold metadata；
- budget/sampling；
- lineage/split。

Verifier card 必须特别写清：

- input format；
- output format；
- native signal；
- training/filtering/evaluation/reward/selection use；
- false positives；
- false negatives；
- brittleness；
- bias；
- reward hacking；
- attack surface；
- versioning/calibration/refresh policy。

Recipe/model-report card 必须特别写清：

- data sources；
- prompt sourcing；
- trace generation；
- search/rejection sampling；
- filtering；
- verifier/reward；
- training method；
- evaluation；
- scaling fields；
- attribution risks；
- reproduction notes。

## 11. needs_search SOP

`needs_search` 和 `needs_metadata` 是项目质量控制的一部分，不是失败。

如果一个条目仍然 unresolved：

1. 缺失链接保持 `null`。
2. `status` 使用 `needs_search` 或 `needs_metadata`。
3. 在 `needs:` 里写清楚缺什么。
4. 在 `audit.notes` 里说明不确定性。
5. 运行 `python scripts/coverage_report.py`，更新 `reports/needs_search.md`。

不要为了让页面看起来完整而伪造链接或过度晋级。

## 12. 更新已有 Entry SOP

新增前必须搜索：

```bash
rg -n "paper title|short title|arxiv id|existing id" data cards papers README.md
```

如果已经存在：

- 更新已有 `data/papers.yaml` block；
- 保留 ID，除非确认没有任何 card/page 引用它；
- 补 artifacts、summary、audit fields；
- 更新或创建 card；
- 不要创建重复 active entry。

如果确实重复：

- 保留质量更高的 ID；
- 弱条目标记为 `duplicate`，或在无引用时删除；
- 在 `audit.notes` 中说明 deduplication。

## 13. 派生文件生成 SOP

许多公开页面由结构化数据生成。修改 `data/`、`paper_cards/`、`docs/` 或 Ask 相关文件后，要运行对应 renderer。

常用生成命令：

```bash
python scripts/render_site.py
python scripts/render_papers.py
python scripts/render_readme.py
python tools/paper_cards/card_tool.py check
python scripts/coverage_report.py
python scripts/export_csv_json.py
python scripts/build_bib_index.py
python scripts/summarize_counts.py
```

检查模式：

```bash
python scripts/render_site.py --check
python scripts/render_papers.py --check
python scripts/render_readme.py --check
python tools/paper_cards/card_tool.py check
```

不要手动改 generated table 来绕过 renderer。

## 14. Website SOP

网站由这些内容生成：

- `data/papers.yaml`
- `data/categories.yaml`
- `data/research_tracks.yaml`
- `data/starter_packs.yaml`
- cards 和 reports

重要网站文件：

- `docs/index.html`
- `docs/assets/entries.json`
- `docs/assets/categories.json`
- `docs/assets/research_tracks.json`
- `docs/assets/starter_packs.json`
- `paper_cards/README.md`
- `docs/assets/counts.json`
- `docs/assets/atlas-data.js`

元数据改动后运行：

```bash
python scripts/render_site.py
python scripts/render_site.py --check
```

不要把 secret 放进 `docs/`，因为 GitHub Pages 会公开发布。

## 15. Ask the Atlas SOP

Ask the Atlas 使用仓库内容做 source-grounded context。README、docs、papers、cards、data 的变更都会影响 RAG 质量。

贡献者规则：

- README、docs、papers、cards 中要保留 Ask 入口。
- 修改公开文档后运行：

```bash
python scripts/check_ask_entrypoints.py
python tools/paper_cards/card_tool.py check
```

- 修改 docs/papers/paper_cards/README.md 后运行 RAG 检查：

```bash
npm --prefix apps/ask-atlas run rag:check
```

- 修改 `apps/ask-atlas/` 后运行后端测试：

```bash
npm --prefix apps/ask-atlas test
```

安全规则：

- 模型 API key 只能存在后端 secret。
- 不允许提交 `.env`、provider key、OAuth secret、database URL、Redis token、含 secret 的截图、含 secret 的 terminal log。
- `docs/assets/ask-config.js` 只能包含公开 backend URL。
- 改 backend config 后运行：

```bash
python scripts/set_ask_backend_url.py --check
npm --prefix apps/ask-atlas run production:status
```

## 16. 本地 QA SOP

正常 PR 前运行：

```bash
python scripts/validate_data.py
python scripts/secret_scan.py
python scripts/render_site.py --check
python scripts/set_ask_backend_url.py --check
python scripts/check_ask_entrypoints.py
npm --prefix apps/ask-atlas run rag:check
python scripts/render_papers.py --check
python scripts/render_readme.py --check
python tools/paper_cards/card_tool.py check
python tools/paper_cards/card_tool.py check
python scripts/coverage_report.py
python scripts/check_links.py --soft
python scripts/summarize_counts.py
```

如果修改了 Ask backend：

```bash
npm --prefix apps/ask-atlas test
```

如果准备 release audit，可以额外跑 live link check：

```bash
python scripts/check_links.py --live
```

`--live` 可能因为外部网站限流而失败。普通 PR 用 `--soft`。

## 17. PR SOP

每个 PR 必须说明：

- 工作队列类型；
- 修改了哪些 entries/cards；
- 检查了哪些官方来源；
- 仍然缺哪些字段；
- 哪些 generated files 被更新；
- 本地跑了哪些 QA 命令；
- 是否影响 Ask Atlas 的 RAG、frontend 或 backend。

推荐 PR 标题：

- `Add verifier cards for <topic>`
- `Verify official links for <track>`
- `Promote <entry> to L5 audit-ready`
- `Expand process supervision paper map`
- `Refresh site assets after metadata update`

## 18. Review SOP

Reviewer 按下面顺序检查：

1. 这个工作是否属于 atlas 范围？
2. 官方链接是否真的是官方？
3. `status` 是否和证据匹配？
4. `curation_level` 是否和深度匹配？
5. enum 值是否合法？
6. `data_object`、`recipe_metadata`、`audit` 是否具体？
7. card 是否通过 `entry_id` 绑定到 entry？
8. card 是否讲清 data object 和 feedback contract？
9. unknown 是否被保留，而不是被猜测填满？
10. generated files 是否和 renderer 一致？
11. QA 命令是否通过？
12. 是否避免了 secret 和内部工作流泄漏？

以下情况必须 request changes：

- 链接是猜的；
- card 太泛泛；
- 没有 primary source 却标 `verified`；
- `L5_audit_ready` card 仍有 placeholder；
- training use 写得比来源支持更宽；
- generated files stale；
- Ask entry links 或 RAG check broken；
- 出现 secret 或内部日志。

## 19. 团队 Scaling SOP

多名同学协作时，建议分工如下：

| 角色 | 职责 | 输出 |
|---|---|---|
| Source verifier | 找官方 paper/code/data/project links。 | 更新 artifacts 和 evidence notes。 |
| Metadata curator | 填 schema 字段和 status。 | 干净的 `data/papers.yaml` entry。 |
| Card writer | 写 release/verifier/agent/recipe/benchmark/failure card。 | 带 `entry_id` 的 card markdown。 |
| Track owner | 维护一个 paper category 的一致性。 | 更好的 subfield coverage 和 read-first order。 |
| QA runner | 跑脚本并看 reports。 | passing checks 和更新后的 reports。 |
| Reviewer | 执行 SOP，提出修改意见。 | review comments 或 approval。 |

推荐周节奏：

1. 周一：分配 queue 和目标 entries。
2. 周二到周三：source verification 和 metadata。
3. 周四：card writing 和 generated outputs。
4. 周五：QA、review、merge。
5. 周末或下周一：更新 roadmap 和 needs-search queue。

每个 PR 要足够窄，让 reviewer 能在 30 分钟内认真检查完。

## 20. Definition of Done

一个贡献完成，必须同时满足：

- metadata 合法；
- 官方链接已固定，或 missing fields 明确；
- status 和 curation level 诚实；
- 重要 entry 有 card；
- card 包含 audit risks，而不只是 summary；
- 受影响的 paper pages、website assets、card index、README sections、reports 已更新；
- 受影响的 Ask entrypoints 和 RAG checks 通过；
- secret scan 通过；
- PR checklist 完成；
- CI 通过。

## 21. 快速命令

安装依赖：

```bash
pip install -r requirements.txt
npm ci --prefix apps/ask-atlas
```

完整普通 PR 检查：

```bash
python scripts/validate_data.py
python scripts/secret_scan.py
python scripts/render_site.py --check
python scripts/set_ask_backend_url.py --check
python scripts/check_ask_entrypoints.py
npm --prefix apps/ask-atlas run rag:check
python scripts/render_papers.py --check
python scripts/render_readme.py --check
python tools/paper_cards/card_tool.py check
python tools/paper_cards/card_tool.py check
python scripts/coverage_report.py
python scripts/check_links.py --soft
python scripts/summarize_counts.py
```

Ask backend 检查：

```bash
npm --prefix apps/ask-atlas test
```

重新生成常见输出：

```bash
python scripts/render_site.py
python scripts/render_papers.py
python scripts/render_readme.py
python tools/paper_cards/card_tool.py check
python scripts/coverage_report.py
python scripts/export_csv_json.py
python scripts/build_bib_index.py
python scripts/summarize_counts.py
```

## 22. Contributor 自查表

提交 review 前逐项回答：

- 我新增的每个链接都能指向官方来源吗？
- 我有没有猜测缺失 artifact？
- 我能用一句话说明 data object 吗？
- 我能用一句话说明 verifier/reward/judge/environment 吗？
- 我记录了 construction details 和 missing knobs 吗？
- 我至少记录了一个 audit risk 吗？
- enum 值都合法吗？
- status 和 curation level 有没有过度晋级？
- 需要更新 card 或 generated outputs 的地方都更新了吗？
- 必要 QA 命令都跑了吗？
- 我有没有避免 secret 和私有实现记录？

只要有一个答案是“否”，PR 就还没有准备好。
