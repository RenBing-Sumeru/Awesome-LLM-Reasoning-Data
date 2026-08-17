Generalist pipeline 从 ALOHA 2 fleet 的专家远程操作开始。专家在 12 个月内采集跨数千任务的数千小时数据，覆盖不同物体、技能、难度、horizon 和灵巧性要求。报告没有公开 episode 数、摄像头、proprioception、动作维度、operator/site metadata、失败保留策略或任务 manifest。带动作标签的 episode 与 web、code、image/audio/video、embodied-reasoning 和 VQA data 混合；sampling weight、augmentation、filter 和 license 均未知。

模型输入记录包含当前场景图像和自然语言任务指令。蒸馏后的 Gemini Robotics-ER cloud backbone 处理多模态上下文，机器人端 local decoder 预测连续低层 action chunks。Backbone latency 低于 160 ms，从 observation 到 action chunk 约 250 ms，chunking 支持有效 50 Hz 控制率。这些是 inference measurements，不是训练 compute 或 rollout budget。

任务 specialization 从 generalist Gemini Robotics checkpoint 出发，针对每个长时程任务分别在 2,000–5,000 条 curated high-quality demonstration episode 上微调。质量规则、拒绝样本和 yield 均未披露。Reasoning specialization 则使用重新标注的动作数据：模型先预测未来约 1 秒的左右臂轨迹作为 intermediate，再把轨迹解码为动作。Fast adaptation 使用 8 个短时程 segment，并比较 5、20 和 100 条 demonstration episode。

评测采用 task-specific 二元 success、0 到 1 的 progress、重复物理 trial、随机顺序的 back-to-back A/B testing 和 pairwise t-test。长时程任务通常各运行 20 次，spelling game 为 12 次；fast-adaptation 的每个 task/data point 各运行 10 次。这些 success/progress 是评测判定，不是已披露的训练 reward。

Gemini Robotics 的 batch size、loss、optimizer、训练步数、schedule、checkpoint selection 和 compute 均为 unknown。Appendix 中 2M 和 1M steps 属于 multi-task 或 single-task diffusion baseline，不属于 Gemini Robotics。复现还需要机器人 calibration、controller 与工具版本、cloud/local model checkpoint、distillation target、重标注代码、完整 split 成员关系和原始 trials。
