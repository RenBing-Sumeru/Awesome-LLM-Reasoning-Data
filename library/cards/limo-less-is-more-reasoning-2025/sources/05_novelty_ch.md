已有工作已经表明，在数学 reasoning trace 上做 supervised fine-tuning 可以改善能力较强的 base model，也已研究过难度、teacher quality 和 long-CoT example。LIMO 并未提出 SFT、distillation、solve-rate estimation、keyword heuristic、DeepSpeed ZeRO-3 或长上下文评测。

具体变化在于如何分配 curation effort。LIMO 不保留开放语料的大部分数据，而使用多阶段漏斗：

- 从数千万混合数学问题开始；
- 删除 7B math model 在四次尝试内解出的题；
- 保留 32B reasoning model 成功率为 1–3/32 的题；
- 对 evaluation benchmark 去重；
- 从三个 reasoning teacher 采样多个 solution；
- 用与 elaboration、self-checking、exploration 和 connective structure 相关的表面特征评分；
- 在 2,125 个排序后的 question-solution pair 中只保留 800 个。

这重新定义了 sample efficiency。最终 SFT set 很小，但构造过程不小：反复模型 inference、多 teacher、人工检查和海量上游池都是 recipe 的一部分。因此，“Less is more”描述的是进入 loss 的 demonstration 数量，而不是总数据访问、compute 或 selection labor。

论文还把 base-model knowledge 明确设为前提。同样 800 个 demonstration 在 Qwen2.5-32B-Instruct 上远好于 Qwen1.5-32B-Chat，model-scale study 覆盖 3B 到 72B。方向信号是条件性 elicitation：经过策略筛选的 trace 可能释放 pretraining 已编码的知识，但不能替代缺失的 prerequisite knowledge。

数据对象层面的新变化有限。发布记录仍是 `question` + `solution` + `answer`，所有 process metadata 都被丢弃。词法质量函数是 ranking proxy，不是 learned process reward 或 mathematical verifier。其 30% length term 和 keyword-frequency component 可能选择冗长、风格上自我反思的 trace，却不验证推理步骤。

把结果复用为通用 recipe 前，研究者必须区分最终样本数与搜索成本，把该分数和 length-controlled、step-verified alternative 比较，测试跨 base 迁移，发布 rejected candidate，并对齐 v2 dataset 与训练仓库。817-row v1/800-row v2 的区分和当前 repository mismatch 是 novelty boundary 的一部分，不是无关的打包细节。
