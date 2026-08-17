公开发布是 success-only transcript 子集，而不是完整构造语料。Phase 2 对每个任务最多尝试三次，聚合所有唯一成功运行，并明确丢弃失败运行。因此 APIGen-MT-5k 隐藏了 invalid call、near miss、失败恢复、拒绝原因和真实 attempt 分布。单一 `train` split 也没有 development/test partition、split seed、task-family grouping 或与论文时期私有数据的映射。

缺失 environment 与 lineage 字段阻止 replay。公开行不含任务 blueprint、ground-truth action/output、initial/reset 与 final state、state diff、reward、validator/committee log、attempt ID、seed、terminal reason、精确 API/policy/database revision 和 executable replay manifest。可见 conversation 可以被 SFT 消费，但不能独立重跑 terminal predicate，也不能确认是哪一项构造检查接收了该行。

verifier stack 存在未测量的错误模式。格式和类型检查不能建立语义正确性；Python policy test 可能不完整或本身有误；final-state/response matcher 可能产生 false positive 或 false negative，但实现和 adversarial evaluation 均未公开。LLM committee score 与 majority voting 可能共享相关的模型或 prompt bias；committee 身份、calibration、threshold 与逐行 vote 为 unknown。Best-of-N self-critique 也可能选择 judge 偏好的用户行为，而不是更像真实人的行为。

generator 与训练归因仍不完整。GPT-4o 和 DeepSeek-V3 被用于 generation、validation 与 interplay，但精确 dated endpoint、阶段分工、除 appendix 示例外的 prompt、temperature、seed、retry 与逐行 model lineage 均为 unknown。最终 xLAM 模型把 APIGen-MT 与 APIGen 及其他 xLAM/ActionStudio data 混合；公开 5k、最高 8k 实验规模与 checkpoint-specific mixture 之间没有映射，因此不能把模型增益归因于公开文件。

版本与代码证据不足以重建流程。最终论文与当前项目页的 read-API 数量不一致；dataset 没有已验证 tag 或 named release，所以必须用固定的 card/file commit 和已检查 SHA-256 替代可变 `main`。HF 的“Code”目标是 HTML/CSS/JS 项目站仓库，不是已验证的 synthesis、validation、filtering、training 或 evaluation 代码。相关 xLAM 仓库是持续变化的多项目仓库，并声明数据只部分发布；它不是冻结的 APIGen-MT 实现。

复用权利不能只看 SPDX 风格标签。访问是 gated，card 声明 CC-BY-NC-4.0，同时又说明 GPT-4 生成部分不得用于开发与 OpenAI 竞争的模型。逐行受限 provenance、tau-bench/PersonaHub 权利、模型提供商输出条款及上游组件是否被覆盖仍未解决。synthetic generation 与作者关于未收集敏感个人信息的声明可以降低部分风险，但不能替代逐记录 PII、consent 或 source-rights audit。

未验证到专门的 deduplication、semantic-overlap 或 benchmark-contamination audit。构造与 tau-bench evaluation 复用相同的 Retail/Airline API/policy substrate，BFCL 的 instance-level overlap 也未报告。200 条轨迹的人类审计缺少 sampler、annotator 数量、agreement 与 adjudication 披露。这些局限支持 `partial` 状态和有条件的 SFT 阅读，不支持“无限制、已去污染、可重放或 RL-ready 发布”的主张。
