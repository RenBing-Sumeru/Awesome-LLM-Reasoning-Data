论文中可重建的流水线如下：

1. **输入。** 收集 TACO、APPS、CodeContests 和 OpenR1 CodeForces 问题，删除精确字符串重复项，保留 28,904 个问题；公开发布时排除 CodeContests 与 OpenR1 CodeForces 的 test split。
2. **污染筛查。** 针对 LiveCodeBench、CodeContests、HumanEval 和 MBPP，以余弦相似度阈值 0.7 检索每个问题最近的评测邻居。Llama-3.3-70B-Instruct 与 Qwen2.5-32B-Instruct 判断候选对，再人工检查 90 对（至多占问题集的 0.3%），没有发现释义或语义匹配。
3. **生成。** DeepSeek-R1 通过 SGLang 为每个问题生成多个解答，以 Python 为主；使用 nucleus sampling、温度 0.6、top-p 0.95、注入的推理起始标签和 16k 最大输出长度。并行的 C++ 分支用于 IOI 消融。
4. **选择。** 要求完整推理轨迹和最终 `python` 或 `cpp` 代码块，拒绝推理轨迹内部含代码块的响应，提取最终解答，并用 Tree-sitter 解析语法。主路径不会执行每条解答。
5. **输出。** 论文得到 736,712 条 Python 和 355,792 条 C++ 样本。HF 1.0 发布集暴露 `input`、`output`、提取后的 `solution` 与 provenance 字段；split_1 通过 `dataset`、`split` 和 `index` 重建 APPS/TACO prompt。
6. **训练与评测。** 对 Qwen2.5 base 和 instruct 的 7B、14B、32B 模型执行 3 个 epoch 的微调，使用 AdamW、batch 256、最大序列 32,768、学习率 5e-5、cosine 衰减、warmup ratio 0.1、BF16、packing 和 tensor/context parallelism，硬件为 H100-80GB GPU。评测使用温度 0.6 和最大生成长度 30,720。

复现必须固定两套配方。论文 OCR-1 生成使用 16k 输出；当前 NVIDIA-NeMo/Skills 提交 `74b8649` 推荐 OCR-2，准备约 34K 个问题，截断超过 3,200 token 的 prompt，并在 `r1.yaml` 中设置 32 个随机种子与 28,768 个生成 token。当前代码是有用的 scaffold，但不是论文原始运行的冻结 manifest。
