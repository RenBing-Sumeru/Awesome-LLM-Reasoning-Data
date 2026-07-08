---
description: 语义检索→结构化录入→渲染校验→人工审核→按授权 commit/push 的论文录入流程
---

向 Awesome-LLM-Reasoning-Data 录入或补充论文。生成物禁手改、链接禁猜等铁律见
`CLAUDE.md`。本流程默认自动推进到审核包产出；强制停点是阶段 5 人工审核。只有在
当前任务已明确授权 commit/push，或审核包被人工回复"通过"后，才执行 git 操作。

## 环境

Python 用 `~/.venvs/atlas/bin/python`；不存在则：

```bash
python3 -m venv ~/.venvs/atlas
~/.venvs/atlas/bin/pip install -r requirements.txt
```

## 载荷

$ARGUMENTS

两种形式，自动识别：

- **A 直接载荷**：arXiv 链接/ID/标题清单 → 跳过阶段 0.5；
- **B 语义载荷**：一句研究性描述，如"寻找 X 方向中构成关键转折点的论文"或
  "找 Y 领域 2025 年后最重要的数据发布" → 走阶段 0.5 检索发现。

## 阶段 0 · 基线（改动前，不得跳过）

1. `git status --short`：工作区有未提交改动 → 停机报告，请人裁决。人可授权破例继续，例外记入审核包。
2. `~/.venvs/atlas/bin/python scripts/validate_data.py`：基线不绿 → 停机报告。
3. 记录当前条目总数，用于最终对账。

## 阶段 0.5 · 检索发现（仅语义载荷）

1. **解析载荷**：方向 → 对照 `data/categories.yaml` 的 `summary` / `reader_promise` 和
   `data/research_tracks.yaml` 的 subfields 定位目标 track。当前 paper atlas 是 3 个大区、
   14 个 track，不要使用旧的 `surveys_and_primers`、`process_supervision_prm` 等 legacy ID。
2. **转写筛选标准**："关键转折点/最重要/奠基"等要求必须转写成可论证的入选判据：
   改变了什么假设、开启了什么范式、被后续工作依赖、或补齐了哪类数据/验证/审计空白。
3. **检索渠道**（按优先级，逐级降落）：WebSearch → WebFetch 抓 arXiv
   listing/已知综述的参考文献 → 训练记忆生成候选清单。
   记忆只当线索：记忆候选必须在阶段 2 验链存活才算存在，验不到就丢弃。
4. **候选规模**：3–8 篇，每篇附一句"为何符合筛选标准"（进审核包）。
5. 符合与否拿不准的候选 → 保留并标注，交阶段 5 人工裁决，不自行丢弃。
6. 检索不到任何可验证候选 → 停机报告，不硬凑。

## 阶段 1 · 查重（每篇）
在 data/papers.yaml 中 grep：arXiv ID + 归一化标题（去标点、小写）
+ **模型/数据集别名**（教训：Qwen2.5-Math-PRM 曾因论文标题与别名不同而漏检）。
- 已存在 → 仅评估是否向其 category: 追加标签，记入"跳过/追加"列；
- 疑似同篇但无法确定 → 保留标注，交阶段 5 裁决。

## 阶段 2 · 验证与录入（每篇，顺序固定）

1. **验链**：WebFetch 抓 arXiv abs 页，核对标题。
   成功 → verification.link_verified: true，verified_at 填今天；
   失败/不符 → 全部链接置 null，status: needs_search。红线：绝不构造未抓取过的 URL。
   摘要中提到的 code/data 仓库：同样先抓取确认存在再写入 artifacts。
2. **证据分级**：写入 YAML 的每个具体事实必须可归因于：
   - A 级：本次抓取的页面原文 → 直接写入；
   - B 级：训练记忆细节 → 现场抓取升 A，否则写 unknown；
   - B 级写入的字段一律进"弱证据披露表"。
   注意：domains/tags 等自由字段不受枚举校验，错了也全绿，只能靠本规则和人审兜底。
3. **填表**：补齐 `data/schema.json` 全部 required 字段；枚举字段只取 schema 值；
   未核实填 unknown。新条目只许 L0_seeded / L1_link_verified。
   verification_contract 等易争议字段先 grep 同类已有条目，跟随库内惯例。
4. **写两句**：one_line_summary（一句事实）+ why_it_matters（对 post-training
   推理数据的意义）。禁止空洞赞美。
5. **打标签**：对照 `data/categories.yaml` 和 `data/research_tracks.yaml` 选 category（多标签正常）。
   只使用当前 14 个 category ID：
   `foundations_and_primers`,
   `instruction_demonstration_rationale_data`,
   `preference_reward_feedback_data`,
   `programmatically_verifiable_outcome_data`,
   `process_trace_supervision_data`,
   `rollout_search_test_time_trace_data`,
   `environment_agent_trajectory_data`,
   `judgment_rubric_domain_expert_data`,
   `data_construction_open_release_recipes`,
   `training_usage_optimization_objectives`,
   `scaling_rlvr_test_time_compute`,
   `benchmarks_evaluation_surfaces`,
   `frontier_reports_data_disclosure_ledger`,
   `audit_failure_contamination_verifier_attacks`。
   边界模糊的判断 → 记入"边界判断表"。

## 阶段 3 · 渲染（顺序固定）

依次运行（均不带 `--check`）：

```bash
P=~/.venvs/atlas/bin/python
$P scripts/render_papers.py
$P scripts/render_readme.py
$P scripts/render_site.py
$P scripts/render_cards.py
$P scripts/export_csv_json.py
$P scripts/export_bibtex.py
$P scripts/summarize_counts.py
$P scripts/coverage_report.py
```

`render_papers.py` 会生成 `papers/README.md` 以及三组目录：
`papers/00_background_foundations/`、`papers/01_core_reasoning_data_types/`、
`papers/02_data_lifecycle/`。不要恢复旧的单层 `papers/00_surveys_and_primers.md`
到 `papers/10_benchmarks_evaluation.md` 结构。

## 阶段 4 · 校验循环（CI 等价）

```bash
P=~/.venvs/atlas/bin/python
$P scripts/validate_data.py
$P scripts/secret_scan.py
$P scripts/render_site.py --check
$P scripts/render_papers.py --check
$P scripts/render_readme.py --check
$P scripts/render_cards.py --check
```

报错 → 只改 YAML 源 → 从阶段 3 重跑。3 轮不绿 → 停机报告。

## 阶段 5 · 人工审核检查点（自动推进到此为止，必须停）
产出**审核包**，缺一不可：

1. **四张表**：
   - 录入表：论文 | 动作(新建/追加标签/跳过) | status | 分类 | 备注
   - 弱证据披露表：声明 | 证据来源(抓取原文/记忆推断) | 建议核对方式
   - 边界判断表：分类决策 | 理由 | 反方观点
   - needs_search 清单及原因
2. **核对入口三层**：
   - data/papers.yaml 中每条新记录的精确行号；
   - 渲染结果的文件+行号，贴出读者将看到的条目原文；
   - 原始证据链接，注明各自支撑哪些关键声明。
3. 语义载荷时：每篇附"符合筛选标准"的论证一句。
4. 对账：条目数 = 基线数 + 新建数；建议的 commit message。

然后等待人工回复：**通过** / 修改某字段 / 剔除某篇。
修改或剔除 → 改 YAML 源 → 重跑阶段 3–4 → 重新出审核包。

## 阶段 6 · 入库与推送（人工回复"通过"后自动执行）

1. **立即 commit**：按文件名逐个 git add 本次涉及的源文件与生成物
   （禁用 git add -A / git add .）；message 用审核包中人已见过的那条。
2. **确认 push 目标分支**：如果当前任务已经明确指定分支，使用该分支；否则先询问。
   同时报告当前分支名与 `git log --oneline --left-right --cherry` 的领先/落后情况供人决策。
3. 得到分支名 → push；目标分支不存在 → 创建并 `push -u`。
4. push 后报告：commit hash、远端分支、CI 触发链接。

## 停机条件（触发即中止并报告现状）
- 基线脏或基线红（可被人工授权破例，例外记入审核包）
- 校验循环 3 轮仍不绿
- 查重结果模糊且影响录入决策
- 载荷/候选链接与实抓标题不符
- 语义检索无任何可验证候选

## 完成定义
- 审核包产出前：validate_data.py 退出码 0、全部 --check 通过、
  条目对账相符、每条新记录 verified+link_verified 或显式 needs_search、
  弱证据披露表覆盖全部 B 级声明、未执行任何 git 操作。
- 全流程完成：审核包被人工明确回复"通过" + commit 已建 + push 已到人工指定分支。
