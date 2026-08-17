预期流水线是 `源记录 → 查询选择 → policy 分步探索 → 同策略 foresight 打分 → beam 采样与偏好重采样 → 带权偏好 JSONL → ACO 训练 → checkpoint 评测`。

**输入与来源选择。** 论文从 Magpie 随机选择 25K 查询，从 OpenHermes-2.5 随机选择 32K 查询，并分别运行两个来源。主实验使用 LLaMA3.1-8B-Instruct，迁移实验的 backbone 为 Qwen2.5-3B-Instruct 和 Qwen2.5-7B-Instruct。官方 HF 源仓库包含 `instruction`、`response` 和来源元数据。发布的采样器要求两者都存在，并把 `response` 复制到 `ground_truth`；但可见的候选选择与打分路径只使用 instruction 和模型概率，没有使用该复制值。精确的入选 ID 未发布。（论文 §3.1；官方 HF viewer 与采样脚本）

**探索与自奖励。** 在四个决策步骤中的每一步，Genius 保留两个 beam。每个 beam 以生成温度 0.6 采样四个候选下一步，再为每个候选生成一个未来 continuation。方法用 continuation 的累计 log probability 除以其 token 长度得到 foresight value，将候选 value 归一化，并无放回采样两条路径进入下一决策。论文抽象描述了归一化分布；发布脚本使用 softmax 温度 0.1，默认 seed 为 0，候选最大长度为 1024，最终 completion 预算为 3000 tokens。该分数不与任务结果核对。（论文 §2.2、§3.1、Appendix B.2；官方采样器）

**偏好构造。** 每个决策位置把 foresight 最高的轨迹作为 chosen，并从较低排名轨迹中抽取 rejected。Advantage 由当前值减去前一路径值。论文每个查询保留四个 pair，因此两个实验分别包含 100K 和 128K pair。官方构造器按所存 log probability 对候选排序，选择最高分轨迹，再以 seed 42 从其余轨迹随机选一条，写出 `prompt`、`chosen`、`rejected`、`chosen_weights`、`rejected_weights` 和 `chosen_average_weights`。若要重算 pair 或更换选择规则，必须保留完整过程池。

**优化。** ACO 与 DPO 一样使用 policy 和 reference model，但根据 chosen/rejected 的 advantage 差缩放 rejected log-ratio。论文报告使用 8 张 A100 80GB、DeepSpeed ZeRO-3、FlashAttention2、总 batch size 128、learning rate `5e-7` 和 `alpha=1`。发布命令还设置 1 epoch、warmup ratio 0.1、maximum sequence length 1300，并采用解析器默认的 `beta=0.1`；但 model、train-file 和 output path 仍为空。采样阶段使用 32 张 A100 80GB 与 vLLM。软件版本、论文实验 seed、wall-clock 成本和精确 checkpoint hash 均未披露。（Appendix B.2；官方训练脚本）

**评测与污染边界。** 推理使用 vLLM、温度 1.0；GSM8K 为 4-shot，MATH 为 8-shot，其他评测为 zero-shot。主推理套件包括 GSM8K、MATH、ReClor、LogiQA、StrategyQA、GPQA 和 ARC-Challenge；其他评测面包括六个通用 benchmark、AIME 2024、MBPP 与 LiveCodeBench。Appendix C 使用 t-SNE 和每个数据集 500 个样本的平均距离比较 embedding 分布，但没有披露逐条 deduplication、benchmark-overlap 清除或不可变的训练/评测清单。

**复现前必须检查的发布代码。** 在本次检查的未固定 `main` 分支上，采样器为 `traj_pool`、`prob_pool` 和 `adv_pool` 分配 `num_foresight+1` 个槽位，却只为 `step_prob` 分配 `num_foresight` 个槽位；构造器则要求四者长度相等，否则跳过该记录。它还把 `prompt` 单独保存，而展示的 ACO encoder 只读取 `chosen` 和 `rejected` message list。这些是 curator 对交接路径的观察，不是作者报告的实验失败。复现时应固定 revision，解决这两条路径，确认查询确实进入训练上下文，保留 rejected candidates 和过程池，并发布精确的源选择与偏好清单。
