一句话概括：ThinkLite-VL 先投入离线搜索算力估计目标策略的相对难度，保留经过五轮以上 MCTS 才首次解出以及 50 轮后仍未解出的 prompt，再在这个模型特定子集上执行一次 GRPO。

对 prompt `x`、image `I` 与当前推理前缀 `s_t`，对应的 Qwen2.5-VL policy 以 temperature 0.5 采样三个候选下一步。MCTS selection 由 visit count 驱动；simulation 持续到生成 final answer 或达到十步上限。随后，Qwen2.5-7B-Instruct 接收问题、ground-truth answer 与生成的 rationale/answer，只返回一句 true 或 false。true 判定终止搜索并记录 `K`；否则继续到 50 轮预算。7B 筛选得到 5.4K 条晚解样本与 5.6K 条未解样本，72B 筛选得到 7.5K 条。（论文 §3.2；附录 Tables 6–7）

反馈契约有两重边界。构造阶段的文本 critic 能把生成文本与给定参考答案比较，也能拒绝明显矛盾的 rationale；但它看不到图像，不能证明中间步骤，也无法区分真正困难、错误标签、歧义、parser 敏感性与自身判断错误。GRPO 阶段虽然公开了目标函数与 32 个 rollout，却没有披露实际 reward、答案抽取、规范化或 judge fallback。端到端反馈因此是混合、终局式信号，而不是经验证的过程标签契约。

筛选后的数据对象仍是原始多模态任务与答案。MCTS continuation、critic 输出、`K` 和失败状态属于应随选中行一起保存的构造证据，但公开 Hard-11K 并未被记录为完整决策 ledger。这个区分很重要：下游模型收益只能检验所选 prompt 集在作者训练设置下是否有用，不能验证每条搜索轨迹或 ground-truth answer。

论文中最接近的比较对象包括：MM-Eureka 的 zero-shot accuracy 筛选；用 50 个 rollout 并保留 accuracy 低于 0.2 样本的离线 self-consistency；保留当前策略 accuracy 位于 0 与 0.9 之间样本的在线 self-consistency；同规模随机子集；以及未筛选的 70K 全量池。ThinkLite-VL 把选择特征从单次或扁平 rollout 成功率改为显式 tree-search effort，并为每个目标规模分别测量。模型特定性不是附带结论：7B 与 72B 集合仅重叠 5.4K，使用另一规模所选数据进行 cross-training 的结果更差。（论文 §2、Tables 3–5）
