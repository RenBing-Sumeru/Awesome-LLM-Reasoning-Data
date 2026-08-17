本卡采用正式接收的 **EMNLP 2025 Main Conference** 论文作为 canonical source；其 ACL Anthology ID 为 `2025.emnlp-main.683`，页码为 13512–13553。作者顺序以 proceedings 为准，证据边界包括 42 页终稿、附录 A–J、Responsible NLP Checklist、ACL venue 记录以及 arXiv:2503.04625。ACL 页面可以核验引用和论文许可，但不能据此推断训练数据、Python 环境、代码或 checkpoint 已发布。

START 处理长推理模型中的一个具体错位：QwQ-32B-Preview 与 DeepSeek-R1-Distill-Qwen-32B 能进行长推理，却常常不会因为普通 prompt 的工具指令而调用 code interpreter。论文首先检验定向文本干预能否在不训练的情况下激活潜在 Python 能力，再研究能否把成功干预转成可供自训练的监督工具轨迹。

训练对象不只是 problem-answer pair。概念上的一条接收记录包含：

| 组成部分 | 预期内容 |
|---|---|
| task | 一个数学或编程问题及其上游来源 |
| 干预前行为 | 长推理，以及一个初始正确或错误的最终答案 |
| intervention | 六类功能性 hint 中的一种改写表达，插入在 `Wait`、`Alternatively` 之后或推理终止处 |
| action 与 observation | Python 代码、解释器输出或错误，以及后续解释或 debugging |
| 干预后行为 | 继续推理并给出新的最终答案 |
| selection fields | 前后正确性、执行有效性、重复状态与接收判定 |

该 schema 是依据方法和示例重建的；论文没有发布 machine-readable record schema 或样本集。核心选择信号是 hint 是否把初始错误解转成成功解，同时还会进行重复采样、删除重复 response，并删除错误代码执行。准确的 answer checker、代码测试行为、重复 detector、错误处理和图 1 中的 `modify` 阶段均未披露。

该工作属于 **Data Construction and Open Release Recipes**，因为它最可复用的贡献是一条构造管线：hint 设计与改写 → hint 插入 → 生成交织 Python 的轨迹 → 按正确性与执行结果过滤 → 10K `D_seed` → START-0 → 报告的 40K `D_START` → full-parameter SFT。由于每条轨迹包含 Python observation，它也与 Environment and Agent Trajectory Data 相邻；但环境既未发布也不可重放，因此一个主 category 已足够。

它不是 RLVR recipe、process-reward 数据集或开放数据发布。正确性与执行结果只用于选择 SFT target，而不是优化 reward；没有 step label 或 scalar reward 被公开，也没有发现官方数据、代码、模型、环境、日志或项目页。

完整双语分析由接收论文与 checklist 支持，机构也由论文首页核验，因此本卡达到 `L4_chinese_review_ready`。L4 表示具备中文 review 材料，不表示已可复用。由于数据对象和 checkpoint 并未公开，直接复用被阻断；缺失 verifier、环境、采样、过滤、修改、许可与发布细节，也阻断精确复现。
