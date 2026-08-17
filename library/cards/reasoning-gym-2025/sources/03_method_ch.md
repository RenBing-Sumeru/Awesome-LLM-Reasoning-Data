该 pipeline 是可执行的，而不是一次性语料库构建：

1. **输入与身份。** 选择注册任务，并提供完整配置、虚拟数据集规模与 seed。附录 A.1 列出 100 多个任务；附录 A.2 给出代表性记录，其 `metadata` 包含 `source_dataset`、`source_index`、解答状态和难度字段；附录 A.3 公开 zero-shot 研究的 easy/hard 配置。
2. **程序化生成。** 在配置、seed 与 index 固定时，任务专用 `ProceduralDataset` 从这些输入确定性生成项目。每项返回 `question`、`answer` 和 `metadata`。有限虚拟数据集暴露指定长度，wrapper 可通过重播种继续生成。当前库可将这些字段物化为 Hugging Face 行，但没有发布标准官方固定数据集。
3. **组合与 curriculum。** Composite dataset 根据配置权重在具名 generator 之间选择。论文实验对纳入任务做均匀采样。受支持的 curriculum 暴露单词长度、Sudoku 空格数、数值区间等任务属性；报告中的控制器在过去 20 个 step 表现超过 70% 时提高难度（论文 §5；附录 A.6）。
4. **Policy rollout 与 reward。** 多数实验通过修改后的 `verl` stack，用 GRPO 训练 Qwen2.5-3B-Instruct。附录 A.6 示例使用 20,000 条虚拟数据集规模、prompt batch 32、最大 prompt/response 长度 4,096/2,048、temperature 1.0、top-p 1、每个 prompt 8 个回答、学习率 1e-6 和 500 个 step。论文总训练 reward 是 accuracy 与缩放系数 0.2 的 format reward 之和；评测则只报 accuracy。另一条 qwen-math 路径用于生成 RG-Math 模型。
5. **筛选与输出。** 库中没有全局接受样本 filter。每个 generator 实现自身有效性约束，每个 `score_answer` 实现定义正确性或部分分。训练消费在线 prompt、回答与标量 reward；评测消费冻结问题与 accuracy。如果需要可审计数据集，必须明确保存成功与失败回答、reward 组成、异常和训练上下文。

论文报告三次独立域内与跨域运行共用同一组 50 题评测集，curriculum 评测在每个难度层使用 50 条 holdout 样本。论文还披露约 1,500 A6000 GPU 小时，由 Runpod 租用；主实验使用四张 A6000 的节点（论文 §4–5；附录 A.6）。

复现需要分开固定两层版本。对论文时期结论，精确 Reasoning Gym commit 仍是 unknown，但当前官方训练 README 记录了 Python 3.11、CUDA 11.8、`verl` commit `c34206925e2a50fd452e474db857b4d488f8602d`、vLLM 0.7.3 和 flash-attn 2.7.3。对当前复用，应固定本次审计的仓库 revision `49b07130b3fcd12f2d064bba7c43869543a0e7e7`、包 metadata `0.1.26.dev0`、任务注册表、所有配置/seed/index、原生或 cascade scorer 模式与可选 `math-verify` 版本。不能把当前 scorer 行为当成未披露的论文时期实现。
