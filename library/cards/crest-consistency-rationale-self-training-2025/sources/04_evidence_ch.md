官方论文页核验了标题、作者顺序、NAACL 会议信息、2025 年 4 月出版、10519-10539 页和 DOI。正式 PDF 给出四阶段方法、`z`、`z_tilde`、SFT 数据集与 DPO 目标的公式,以及数据量、超参数、rationale 聚合统计和局限。作者仓库 main commit `a6afada860235ef613752ee11ba2da8ba2e045c1` 公开生成、过滤、选项探针、SFT、偏好对和 DPO 代码;GitHub 没有列出 release。

表 1 报告:对 Meta-Llama-3-8B,从一致性过滤的 `M_SFT` 进一步训练为混合偏好的 `M_CREST` 后,ReClor 准确率从 66.10 变为 69.50,ARC-Challenge 从 81.40 变为 81.91,CommonsenseQA 从 79.36 变为 81.41。对 Gemma-7B,相应变化为 67.90 到 70.00、84.22 到 84.47、80.51 到 80.67。Phi-2 附录在三个数据集上也报告了相同排序。这些是下游模型结果,不是单条 rationale 的质量标签。

消融支持构造选择具有敏感性。ARC-Challenge 与 CommonsenseQA 在容忍度 `t=2` 时达到峰值,ReClor 则在 `t=3` 时达到峰值;纳入 `z_tilde=0` 的 rationale 会降低报告表现。在 ReClor 上,总体准确率在 `lambda=0.6` 达到峰值;提高一致性偏好池权重会改善 Hard 子集,却损害 Easy 子集。这些发现支持按数据集选择过滤与混合参数,而不是采用通用阈值。

在独立的 100 题 ReClor FLASK 分析中,GPT-4o 对 `M_CREST` 给出的鲁棒性/正确性/效率分数为 2.95/3.51/3.33;`M_SFT` 为 2.92/3.28/3.29,RFT 为 2.66/3.17/2.88。论文还报告:对模型新生成的 rationale 再执行追问时,follow-up accuracy 提升。这是在一个外部 judge 与一种行为探针下的证据,不能建立因果忠实性或独立的步骤正确性。

artifact 核验改变了发布边界。`resources/data` 包含准备后的 ReClor、ARC 与 CommonsenseQA JSONL 文件;README 说明,运行 stage 1 后,本地 `outputs` 目录才会保存 rationale 与评价结果,训练 adapter 则写入本地 `models` 目录。公共文件树中没有生成 rationale、选项级预测、`z_tilde` 向量、过滤后 SFT 文件、偏好池、抽样后的 DPO 数据或 checkpoint。因此,benchmark 增益可以支持研究该配方,却不能认证一个已发布 CREST 数据集,因为该派生数据集并不存在于发布中。
