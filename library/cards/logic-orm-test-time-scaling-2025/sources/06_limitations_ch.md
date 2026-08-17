二元最终标签匹配是较弱的 reasoning-validity verifier。一条轨迹可能包含无效推断、与前提矛盾或捏造中间事实，但只要最终落在正确 A/B/C 标签上，仍会得到 reward 1；反过来，一条大体有效但解析或最终标签出错的推导会被标为负。论文承认 outcome supervision 不能证明推理过程的 faithfulness，因此不能把公开 reward 解释为 step-level correctness。

Echo filtering 由模型执行，而且具有选择性。被保留的错误轨迹恰好是某个 GPT-4o judgment 设置未能识别的错误。这可作为有用的 adversarial curriculum，但也可能编码 judge-specific blind spot、prompt artifact，以及预设标签与生成语言之间的系统相关性。精确 GPT-4o API snapshot、generation seed、raw judge output 和完整 decoding 配置均未披露，因而无法审计不同模型版本或重复运行下的稳定性。

Release 缺少最关键的构造记录。19,105 条文件没有区分普通 CoT 与 Echo 的字段，没有 asserted-answer 字段、稳定 candidate ID 或 judge verdict。原始 forced-label 候选、被丢弃的明显错误、过滤理由以及 JustLogic 重采样索引 manifest 均不可用。虽然六个 ORM 覆盖 FOLIO、ProverQA 和 JustLogic，但公开轨迹只有 FOLIO，因此无法把 ProverQA 与 JustLogic 模型绑定到可审计的逐记录训练数据。

测试时部分没有作为 trace artifact 发布。历史 candidate pool、ORM score、selected index、candidate rank、获胜轨迹和被拒绝的 Best-of-N 尝试均不可用。公开 inference main loop 只输出未打分 generation，没有以端到端方式执行完整 ranking path。缺少带分候选日志后，无法测量 calibration、排名反转、score tie、失败是否随候选数量集中，也无法判断所选答案是否因逻辑有效性之外的因素改变。

计数和代码之间存在不一致，应保持未解决状态，而不是静默归一化。JustLogic Appendix Table 4 把总数印为 49,197，但两个类别计数之和为 69,197，Appendix B 所述采样目标也无法解决差异。论文和 shell 指定 ORM 训练 3 epoch，而 `finetune_orm.py` 使用 2。GPT generation helper 默认 8 个候选，但 FOLIO 使用 10；Qwen generator 又只实现 Uncertain/C Echo prompt。该 release 提供了若干组件，而不是一个已经核验、能重建全部数据集和结果的单一命令。

数据治理信息不完整。JSON array 没有具名 train/validation/test split、逐行 source version 或稳定 ID；trainer 使用 seed 42 shuffle 后内部抽取 100 条 validation。论文没有报告 decontamination、prompt deduplication、train/test overlap 分析或上游 snapshot manifest，而且两个 FOLIO 文件都各有一条完全重复记录出现两次。论文为 CC BY 4.0，repository code 为 MIT，model card 声明 MIT，但不存在覆盖 FOLIO JSON、上游 ProverQA/JustLogic 材料或 GPT-4o 输出的 dataset-specific license 或 derived-data rights statement。因此，即使文件可以公开访问，复用权利仍未解决。
