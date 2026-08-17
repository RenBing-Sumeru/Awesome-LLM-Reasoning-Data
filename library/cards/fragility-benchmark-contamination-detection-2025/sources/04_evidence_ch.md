关键消融固定污染 SFT 模型，在 64 个 RL step 后比较目标函数（表 3）。Loss 检测器在 RAFT 下平均 AUROC 为 79.25，在带 clipping 的 RAFT++ 下为 57.58、GRPO 下为 61.26；去除 clipping 后又回升至 74.39 和 73.28。这直接支持 clipping 是决定性因素，而不只是“做过 RL”。

对于末期 CoT SFT，DeepSeek-R1-Distill-Llama-8B 的平均 Pass@1 从 48.38 升至 60.14（表 4），而表 5 中多数检测 AUROC 接近 50。证据覆盖的是选定数学基准与开源模型，不能外推到闭源前沿训练或所有污染类型。
