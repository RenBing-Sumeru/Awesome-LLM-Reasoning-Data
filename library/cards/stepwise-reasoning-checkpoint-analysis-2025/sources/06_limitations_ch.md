论文直接说明两项限制。精确定义步骤边界很困难：Llama 风格的 `### Step` 结构比某些 slow-thinking 模型的对话式或无结构输出更清晰。并且 CCA 候选常以不完整推理路径结束；它们仍可能给出正确答案，但比自然完成的链条更缺乏可解释性和透明度。（论文 Limitations。）

反馈层还带来审计风险。PRM 分数同时决定哪些答案簇存活、哪个截断候选获胜。PRM 可能未校准、对 dialogue formatting 敏感，或偏爱流畅但错误的终点。使用最后一步分数会让 PRM 更接近 outcome score；附录 B.2 本身指出，正确路径可能有不完美的中间推理。精确相等聚类也可能在等价数值/表达式格式间失效。这些是由已披露机制得出的、以证据为基础的 curator inference，并非测得的 SRCA 错误率。

复现与复用仍受限。未核验到官方实现、运行配置、checkpoint/cluster/score 轨迹、原始结果、模型 revision 固定或 benchmark item 清单。因此仅凭公开论文无法独立检查 KV rollback、统计 checkpoint 候选、复现早停、检查失败分支，或审计 benchmark/PRM contamination。报告的 benchmark accuracy 不能作为中间 completion 是安全过程标签或适合训练数据的证据。
