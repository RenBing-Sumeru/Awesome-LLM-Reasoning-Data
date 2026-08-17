论文明确承认的核心限制是 Monte Carlo 伪标签不能保证步骤正确。正标签只表示至少一个采样 completer 找回了答案，因此无效前缀可能通过后续纠错、猜测或 shortcut 获得 false positive；有效但困难的前缀也可能因 10 个 completer 全部失败而得到 false negative。70B/72B completer 可以降低但不能消除这种相对于模型的误差，论文也没有报告形式执行审计或 PRM 混淆分析。

学习得到的 selector 还会引入额外风险。未校准的逐步正类概率直接相乘，使分数对轨迹长度和某个低概率步骤敏感。因此，0.25 的配对差值不是逻辑 margin，论文中较弱的 DPO 结果也与分数区分不足相一致。Curator inference：只保留全部步骤为正且答案正确的 SFT 轨迹，可能隐藏有价值的恢复过程和系统性失败模式；DPO 中较低分的轨迹仍可能有效。

发布完整性使全面审计受阻。SFT 数据遗漏所有被丢弃候选及其产出率；DPO 数据遗漏未进入任何 pair 的候选、原始概率向量和轨迹分数。步骤标签文件没有 source item ID、生成器/版本字段、completion 输出或成功次数。PRM checkpoint、校准、第二阶段精确采样数和 decoding 设置、DPO beta、软件环境以及不可变谱系 manifest 均不可用。论文没有报告去污染或 benchmark overlap 分析，也没有说明采用 CC BY-NC-SA 4.0 的衍生数据卡与上游 FOLIO/FOLIOv2/LogicAsker 条款是否兼容。

核查的仓库也不是可直接执行的论文实验记录：两个生成脚本使用未定义的 `args.data_path` 和拼写错误的 LogicAsker prompt 文件名，DPO 入口使用未定义的 `args.model_name`；脚本默认值还与论文报告的 PRM 标注设置不同。最后，评测集中于逻辑任务和三个 claim verification 数据集；benchmark 表现不能证明 verifier 能泛化到其他推理领域，也不能证明发布数据没有污染。
