专有动作语料只按聚合层面描述。Episode、frame 和 action 数量，任务与物体 manifest，摄像头与 calibration，proprioception，controller version，operators、sites、dates、隐私与 consent 处理、失败数据和 source-level rights 均为 unknown。更广的 web/code/media/embodied/VQA mixture 同样缺少比例、filtering、deduplication 和 license。

Success 和 progress 是 task-specific 评测判定，不是论文声称的 RL reward。Scorer identity、完整 rubric、blinding、inter-rater agreement、raw trials、false positive 和 false negative 均不可用。作为 curator inference，部分物理状态可能满足 progress milestone，却掩盖不安全或脆弱行为；binary success 也可能忽略路径质量、碰撞、恢复成本或人工干预。

Reasoning intermediate 不可复现。报告称动作数据被重新标注为未来机械臂轨迹，但没有说明 relabeller、坐标系、时间采样、遮挡处理、覆盖率、验证，以及标签由人、模型还是几何方法生成。视觉上合理的 keypoint path 不一定代表因果或 faithful reasoning。

物理 trial 数量有限，并受硬件磨损、calibration、光照、物体摆放、latency 和 operator reset 影响。随机顺序的 back-to-back A/B testing 可减轻部分变化，但没有提供可 replay state 或独立复现。Generalist initialization、distillation、多样数据、模型容量和 specialization demonstration 的因果作用仍纠缠。

报告没有披露 Gemini Robotics 的 batch size、loss、optimizer、训练步数、schedule、checkpoint selection 或 compute。Appendix 中 2M 和 1M steps 是 diffusion baseline 的预算；把它们归给 Gemini Robotics 是错误的。Inference latency 和有效 50 Hz control 也不是训练预算。

ERQA 的 400 条记录与 CC BY 4.0 license 只适用于 answer-level benchmark 及其 harness，并不开放 ALOHA 2 demonstrations、relabelled trajectories、多模态训练源、模型权重或 training code。报告也没有发布全局 train/evaluation split、duplicate-trajectory audit、scene/task/object overlap ledger、decontamination 或 item-level lineage。
