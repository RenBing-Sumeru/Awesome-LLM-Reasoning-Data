既有工作基线有两个端点。Final-answer RLVR 提供廉价 programmatic feedback，却无法判断证明严谨性；Lean 和 Isabelle 等形式系统通过编译 proof term，可以对给定形式陈述保证正确性，但需要形式化和版本化证明环境。DeepSeekMath-V2 位于两者之间：它在无参考答案的自然语言证明上扩展 learned issue finding，以判断不确定性换取对文本证明的覆盖。

具体贡献是三角色反馈闭环。专家先用同一 `{0, 0.5, 1}` 标度标注 proof quality 和 verifier-analysis quality；verifier 学习判断证明，meta-verifier 学习判断 verifier 提出的缺陷，generator 从这些 learned score 中同时学习证明生成和自评。随着 generator 变强，多次采样的 verifier 与 meta-verifier 判断自动标注新 hard proof，并在最后两轮替代人工标注。

有区别的数据变化并非简单增加证明数量。每个阶段加入不同 feedback object：`(problem, proof, expert score)`、`(problem, proof, verifier analysis, expert meta-score)`、generator proof 加 self-analysis 与 self-score，以及后期的 proof 加多组 verifier analysis、meta-assessment、validation vote、选定标签与 routing decision。即使实际记录不可用，这仍是 learned-verifier 研究可复用的概念 schema。

GRPO、model judge、self-refinement、rejection fine-tuning 和 best-of-many search 单独看都不是新方法。论文也没有确立形式验证、独立 verifier 多样性或开放训练配方。其方向信号是 verifier scaling 与数据构造的耦合：增加判断计算量会改变哪些 hard proof 成为正负训练标签。

复用前，读者必须获得或重建专家 protocol、分类别校准、`n/m/k`、独立 verifier diversity、自动标签错误率、人工转交与丢弃日志、来源权利、竞赛 overlap 检查、GRPO/RFT 代码和 item-level checkpoint lineage。在这些缺失时，本论文是可审计的前沿配方和评测发布，而不是可复用训练数据发布。
