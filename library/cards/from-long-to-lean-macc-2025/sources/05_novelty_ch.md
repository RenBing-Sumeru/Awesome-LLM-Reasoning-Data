MACC 把**rationale 压缩的停止点**变成逐样本构造决定。单次 compressor 只生成一条缩短 rationale；固定轮数方法对每个样本应用相同改写次数。MACC 则沿一条相互依赖的修订链前进，并把首次 token 长度回弹作为“继续改写不再缩短轨迹”的局部信号。选中的完整 rationale 随后成为答案级/完整 episode 的 SFT 监督。

该配方区分两层选择。记录级别上，算法 1 只用 token 数选择 \(r^*\)。配置级别上，Performance Estimation Hypothesis 使用 compression rate、PPL、原始长度以及目标/压缩模型准确率特征，预测下游准确率与输出长度，从而帮助选择 compressor 和轮次设置。这两层不能混淆：回归模型不是针对单条修订的语义 verifier。

答案条件化顺序改写也不同于普通自压缩。论文形式上从目标模型生成的 \(r_0\) 开始，但每轮修订由外部 API 模型编写，并看到最终答案。这可能生成与已知标签对齐的简洁解释，却不能证明缩短 rationale 保留了原始推理的因果路径。论文明确把方法同 knowledge distillation 区分开，但外部 compressor 仍会实质塑造训练文本。

对推理数据研究而言，新意是一条显式 long2short 谱系 \(x\rightarrow r_0\rightarrow r_1\ldots\rightarrow r^*\)，配合廉价程序化 selector 和下游 SFT。它把轮次预算、tokenization、API 模型、答案暴露与选择规则变成一等数据变量。表 6/算法 1 的不一致进一步说明，已发布的概念 selector 需要记录级停止日志和 token 数才能审计。

该新意不包括步骤标签、学习式奖励模型、语义等价检查、单轮多候选、开放生成语料或已证明的非 SFT objective。报告的准确率与效率提升不能证明选中修订是最忠实轨迹，也不能证明 token 长度回弹普遍最优。
