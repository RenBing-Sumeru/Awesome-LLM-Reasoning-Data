在 `audit_failure_contamination_verifier_attacks` 轨道中，这项工作给出了一套具体配方，用于检验软件 benchmark 在移除任务相关上下文后是否仍保留可疑性能。审计者可以并行构造 issue-only 与 issue-plus-path 提示，固定模型快照和可见信息，解析预测工件，再同时使用覆盖率与对 precision 敏感的指标和 gold 工件比较。把相同契约应用于既有、较新以及仓库不重叠的 issue 集合，可将泛泛的污染担忧转成可证伪对比。

公开 OSF 材料也适合 verifier audit。`metric.py` 让答案级集合判据可检查，`leak_test.py` 则暴露路径树构造与回答提取。复现实验可以直接测试路径数量上限、exact match、precision/recall/F1、根目录文件解析、固定种子的路径采样、checkout 失败和解析器变体，从而区分模型记忆证据与评测器或预处理工件。

对 benchmark 维护者而言，论文提示了一份发布清单：保留不可变 instance 与仓库版本；公开可见上下文清单；同时保存原始和解析后回答；报告缺失 API 调用；加入时间对照与仓库不重叠对照；量化不确定性；并说明模型多报路径时指标具体奖励什么。benchmark score 应与该 provenance ledger 一起解释，不能单独作为 agent 能力证明。

合适的复用等级是 **仅作为 evaluation/audit reference**，在工件许可证和发布版本得到澄清前，不应直接执行性复用。完成权利审查后，静态提示和标签可支持独立污染评测；但论文没有训练配方、没有 state-action trajectory，也没有 SFT、RLVR 或 agent training 的证据。把日志改造成 agent-training data 会超出论文支持的用途。

更强的衍生审计应跨时间匹配 issue，预注册模型和解析器版本，重复解码，限制预测数量，报告 precision 与置信区间，并分开统计模型、解析器、仓库 checkout 和缺失回答造成的失败。这样可以保留最小上下文探针的价值，同时提高因果主张和可复现性。
