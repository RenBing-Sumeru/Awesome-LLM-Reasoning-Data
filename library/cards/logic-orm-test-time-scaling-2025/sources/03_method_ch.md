构造与使用 pipeline 可分为六个阶段：

1. **Prompt 来源。** 论文使用 ProverQA 的训练部分（5,000 题）、JustLogic（4,900 题）和 FOLIO（约 1,000 题）。FOLIO 为人工标注；JustLogic 是覆盖七种推理深度的合成数据；ProverQA 包含三种难度及 noisy-premise 变体。公开的轨迹文件只有 FOLIO 衍生数据。
2. **多样本 CoT 生成。** GPT-4o 是三个数据集的主要 generator；Qwen2.5-7B-Instruct 还用于 ProverQA 的初步变体。普通 prompt 要求逐步推理，并以 `\boxed{}` 结束。论文预算是每个 ProverQA 与 JustLogic 输入采样 8 个候选，每个 FOLIO 输入采样 10 个。公开 GPT helper 使用 temperature 0.6，但默认只生成 8 个候选，因此复现 FOLIO 的 10-sample 设置需要修改该默认值。
3. **Outcome labeling。** Parser 把 boxed True/False/Uncertain 映射为 A/B/C。与 benchmark label 完全一致时得到整数 reward 1，其他已解析标签得到 0。公开记录包含 `input`、`label`、`reasons`、`predicted_answer`、`reasoning_label`、`system` 与 `reward`；在所核查文件中，`reasoning_label` 和 `system` 始终为空。
4. **Echo 生成与过滤。** 三类 forced-label prompt 分别要求生成支持 True、False 或 Uncertain 的 rationale。错误 Echo 轨迹交给 GPT-4o judge；公开代码将其配置为 temperature 0.1、最多四个输出 token。被识别的错误丢弃，judge 未发现的错误保留。对 JustLogic，论文还描述了基于题内 BLEU diversity 与输入逆频率的重采样，\(\alpha=0.8\)、\(\beta=0.2\)。原始 Echo generation、judge message、被拒绝记录和采样索引均未发布。
5. **ORM 训练。** 通过 LoRA 适配 Qwen2.5-7B-Instruct，使其在完整题目和轨迹之后预测最终 token 为 `+` 或 `-`。论文报告使用一张 A100、训练 3 epoch、总 batch 64、learning rate \(5\times10^{-4}\)。官方 shell 传入 3 epoch，但 `finetune_orm.py` 硬编码为 2。Trainer 把任一 JSON 作为单一 train split 载入，再用 seed 42 shuffle 并抽取 100 条作为 validation；没有稳定 row ID 或公开 split manifest 将某个 checkpoint 绑定到精确记录。
6. **Best-of-N 使用。** Reasoner 以 temperature 0.6 采样 N 条完整解答；ORM 对其打分，系统选择得分最高的轨迹。每条曲线使用的精确 N 网格没有在正文中逐项列出。公开 inference 示例默认 32 个候选和 2,048 个 new token，但 checked-in main loop 只写出未打分 generation，没有保存 ORM score、获胜索引或被拒绝候选。

公开数据计数进一步划清了边界。CoT 文件在 1,001 个唯一输入上包含 10,009 条记录，其中 7,383 条为正、2,626 条为负。合并 Echo-CoT 文件含 19,105 条记录，正样本仍为 7,383 条，负样本增至 11,722 条。多重集比较表明，后者包含完整 CoT 文件，另加 9,096 条记录，且新增记录全部为负。这是可复用的 hard-negative release，但并不是原始三路 Echo generation pool 的日志：Appendix Table 2 报告的 True、False 与 Uncertain prompt 候选集在过滤前明显更大。
