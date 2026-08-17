**来源与原始轨迹。** 方法从 \(D_{\mathrm{train}}\) 定义任务输入，并在 GSM8K、MATH/MATH-500 与 AIME24 surface 上报告数学推理实验。精确构造行、上游版本、source ID、prompt 数和构造/评估映射均未披露。形式化方法称目标模型 \(S\) 根据问题与初始提示生成 \(r_0\)，该提示要求逐步推理并把最终答案放入 boxed。可是表 9–11 报告随 compressor 变化、并在不同目标模型间重复的 “Original Len”，图 8 又写作 “Compressor Origin Length”；因此原始轨迹的实际作者归属仍有歧义。

**顺序生成器。** 每轮由一个 API compressor 改写前一轮 rationale。提示包含问题、先前 thought process 和最终答案，并要求在不添加信息的情况下简化 thought process。主 compressor 为 GPT-4o-mini；比较实验还包含 GPT-3.5-turbo、GPT-4.1-nano、GPT-4.1-mini、GPT-4o 和 DeepSeek-V3。目标模型包括 LLaMA-3.1-8B-Instruct、Qwen2.5-3B/7B-Instruct 和 DeepSeek-R1-Distill-Qwen-1.5B/7B。精确模型与 tokenizer revision、temperature、top-p/top-k、seed、重试策略、timeout 和逐调用输出上限均为 unknown。

**选择与拒绝。** 算法 1 从 \(r_0\) 开始，由 \(r_{i-1}\) 生成一个 \(r_i\)，然后比较 token 数。严格变长会使循环中止并保留 \(r_{i-1}\)；更长的 \(r_i\) 就是回弹/被拒绝轮。长度相等则继续。如果在最大轮次 \(T\) 前没有回弹，则选择最后一个非增长修订。流程没有指定正确性、语义等价、PPL 或过程验证 gate。\(T\)、tokenizer revision、逐样本停止日志、异常处理和实际保留/拒绝计数均为 unknown。

**轮次范围与预算。** 论文没有披露统一全局构造预算。图 3 的固定轮数为 2–10，表 9–11 报告 2–5 轮，GSM8K 示例覆盖 0–5，MATH 示例覆盖 0–8。附录 A.5 把最大推理 token 与最大训练序列长度写为 16,384，但没有把 16,384 明确为压缩调用预算。逐样本 API 调用、输入/输出 token、延迟、价格、失败和重试均不可用。

**性能估计器。** 独立的 Performance Estimation Hypothesis 使用 compression rate、压缩 CoT PPL、原始长度和目标/压缩模型训练准确率等配置级特征，为 compressor 选择预测下游微调准确率和 CoT 长度。默认模型是 Bayesian Ridge，并与 Random Forest 比较。每个目标模型有 \(n=20\) 个配置行，论文报告 5-fold cross-validation 与 80/20 train/test procedure。该估计器不是逐样本停止规则；由于实现不可用，也无法判断同一 compressor 的相关轮次是否按组跨 fold 隔离。

**SFT 构造。** 选中 \(r^*\) 与答案组成简洁 SFT 目标；另混入比例未披露的原始轨迹。LLaMA-Factory LoRA 设置为 rank 8、alpha 16、learning rate \(2\times10^{-5}\)、batch size 32、三轮、最大序列长度 16,384、bfloat16、AdamW 与 cosine warmup。论文报告 7B 模型约需 1.5 小时。硬件、seed、LoRA target module、warmup fraction、framework revision、混合比例与记录数均为 unknown。

**发布 surface。** 作者指定 GitHub 仓库的已检查 revision 只有 `README.md`。安装文字引用 `requirements.txt`，MIT badge 链接 `LICENSE`，但当前与历史 tree 都没有这两个文件。代码、独立 prompt 文件、配置、数据、schema、split manifest、checkpoint 和评估 harness 均未发布。该仓库 URL 已核验为官方链接；实现与语料可用性没有得到核验。
